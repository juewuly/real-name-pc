#!/usr/bin/env node

/**
 * @author: liuyang9
 * @description: 更新版本号的脚本
 */


const chalk = require('chalk');
const program = require('commander');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const readline = require('readline');

// 将版本信息写入sdk文件
const writeVersionToSdkFile = async version => {
  await writeVersionToSdk(version);
}

// 版本信息
const getVersionBuf = version => Buffer.from(`
/**
 * @author: liuyang9
 * @version: ${version}
 * @description: 防沉迷pc端sdk
 */


`);

const writeVersionToSdk = version => new Promise((resolve, reject) => {
  const sdkPath = path.join(__dirname, '../dist/real-name-pc.min.js');

  fs.readFile(sdkPath, (err, data) => {
    if (err) {
      console.log('读文件失败。');
      reject();
      return;
    }

    fs.open(sdkPath, 'w', (err, fd) => {
      const versionInfoBuffer = getVersionBuf(version);
      const resultBuf = Buffer.concat([versionInfoBuffer, data]);
      if (err) {
        reject();
        return;
      }

      fs.write(fd, resultBuf, 0, resultBuf.length, 0, (err, bytesWritten, buffer) => {
        if (err) {
          console.log('err', err);
          return;
        }

        fs.close(fd, err => {
          if (err) {
            reject();
            return;
          }

          resolve();
        });
      });
    });
  })
});

// 输入版本号
const inputVersion = () => new Promise(resolve => {
  const rl = readline.createInterface(process.stdin, process.stdout, null);
  rl.question(chalk.bold.cyan('请输入版本号：'), input => {
    resolve(input);
    rl.close();
  })
});

// 更新版本文件
const updateVersionTxt = async version => new Promise((resolve, reject) => {
  const versionFilePath = path.join(__dirname, '../version.txt');

  fs.writeFile(versionFilePath, version, function(err) {
    if (err) {
      console.log(chalk.bold.red('版本文件更新失败！'));
      reject(err);
    }

    console.log(chalk.bold.cyan('版本文件更新成功！'));
    resolve();
  });
});

program
  .arguments('<file>')
  .option('-v, --version <version>', '版本号')
  .action(async function() {
    const version = await inputVersion();
    await writeVersionToSdkFile(version);
    await updateVersionTxt(version);
    process.exit();
  })
  .parse(process.argv);
