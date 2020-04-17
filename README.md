> 实名认证PC端

* [Features](#features)
* [Installing](#installing)
* [Usage](#usage)
* [API](#api)
* [License](#license)

***

## Features
* 实名认证PC端

## Installing

**NPM**
```bash
$ npm i real-name-pc -S
```

**SCRIPT**
```bash
  <script type="text/javascript" src="https://unpkg.com/real-name-pc/dist/real-name-pc.min.js"></script>
```

## Usage

1. 执行`const Instance = RealNamePc.Instance`获取实例。
2. 执行`Instance.showEight()`显示年龄小于8周岁的弹窗。

***
### Example

```javascript 
  // 获取操作实例
  const Instance = RealNamePc.Instance;

  // 显示“年龄小于8周岁”的弹窗
  Instance.showEight();

  // 显示“8~16周岁不可充值，充值已达到上限”的弹窗
  Instance.showSixteen();

  // 显示“8~16周岁可充值，但充值金额达到上限”的弹窗
  Instance.showSixteenCharge();

  // 显示“16~18周岁不可充值，充值已达到上限”的弹窗
  Instance.showEighteen();

  // 显示“16~18周岁可充值，但充值金额已达到上限”的弹窗
  Instance.showEighteenCharge();

  // 显示“登录后游戏时长已达到上限”的弹窗
  Instance.showTimeLimitAfterLogin();

  // 显示“游戏中时长已达到上限”的弹窗
  Instance.showTimeLimitWhenPlaying();

  // 关闭弹窗
  Instance.close();
```

## License
MIT