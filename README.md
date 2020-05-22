> 实名认证PC端

* [Features](#features)
* [Installing](#installing)
* [Usage](#usage)
* [API](#api)
* [License](#license)

***

## Features
* h5联运平台PC端防沉迷
* 大厅支付防沉迷
* 大厅mini付防沉迷

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

1. 执行`const feature= RealNamePc.Features.lobbyMini;`获取相应的feature名称。
2. 执行`const SdkInstance = RealNamePc.Instance({ feature });`获取实例。
3. 调用`Instance`实例中的方法进行相应操作。

***
## Example

### 大厅支付防沉迷
```javascript
  const feature= RealNamePc.Features.lobby;
  const SdkInstance = RealNamePc.Instance({ feature, containerId: 'test-lobby' });
  SdkInstance.showEight();

  // 8岁以下的提示
  function handleLessThenEight() {
    SdkInstance.showEight();
  }

  // 8~16岁，单笔超额的提示
  function handleLessThenSixteenCharge() {
    SdkInstance.showSixteenCharge();
  }

  // 8~16岁，当月超额的提示
  function handleLessThenSixteen() {
    SdkInstance.showSixteen();
  }

  // 16~18岁，单笔超额的提示
  function handleLessThenEighteenCharge() {
    SdkInstance.showEighteenCharge();
  }

  // 16~18岁，当月超额的提示
  function handleLessThenEighteen() {
    SdkInstance.showEighteen();
  }
```

### 大厅mini付防沉迷
```javascript
  const feature = RealNamePc.Features.lobbyMini;
  const SdkInstance = RealNamePc.Instance({ feature });
  SdkInstance.checkCharge({
    gkey: 'dsws',
    exts: 'eyJhbW91bnQiOjYsInNpZ24iOiJiM2MyNjc0N2EyNzJjNWY4MDJhMmRkMDdjMjc4MGYxOSIsIml0ZW1faWQiOiJwY3dlaWR1YW5wcm9kdWN0NiIsInNlcnZlcl9pZCI6MjIxfQ'
  })
  .then(res => {
    const { checkResult, handler } = res;
    if (checkResult.charge_status !== 1) {
      handler.exec(() => console.log('点击'));
    }
  })
  .catch(err => console.error('接口异常', err));
```

### h5联运平台防沉迷
```javascript
  const feature= RealNamePc.Features.h5Platform;
  const SdkInstance = RealNamePc.Instance({ feature });

  // 8岁以下的提示
  function handleLessThenEight() {
    SdkInstance.showEight();
  }

  // 8~16岁，单笔超额的提示
  function handleLessThenSixteenCharge() {
    SdkInstance.showSixteenCharge();
  }

  // 8~16岁，当月超额的提示
  function handleLessThenSixteen() {
    SdkInstance.showSixteen();
  }

  // 16~18岁，单笔超额的提示
  function handleLessThenEighteenCharge() {
    SdkInstance.showEighteenCharge();
  }

  // 16~18岁，当月超额的提示
  function handleLessThenEighteen() {
    SdkInstance.showEighteen();
  }

  // 配置实名相关参数
  function configParams() {
    SdkInstance.config({
      appkey: '', // 游戏KEY (必填，不存在传空字符串)
      qid: '3211038786', // 用户id （必填）
      platform: 'h5_game', // 来源平台 （必填)
      idcard_check_type: 'pay_before', // 调用类型 （必填）
      onCloseRealName: () => console.log('触发关闭实名事件'), // 关闭实名弹窗右上角的关闭时，触发的事件 （可选）
      onSubmitSuccess: () => console.log('触发实名认证成功事件11'), // 提交实名认证成功时触发的事件  （可选）
      onSubmitError: () => console.log('触发实名认证失败事件') // 提交实名认证失败时触发的事件  （可选）
    });
  }

  // 获取实名信息
  function handleFetchRealNameInfo() {
    configParams();

    SdkInstance.fetchRealName()
    .then(res => {
      const { auth_type, status } = res;
      // 已开启实名且用户未进行过实名认证
      if (auth_type !== '0' && status === '0') {
        // 显示实名认证
        SdkInstance.showRealName({ canClose: true });
      }
    })
    .catch(err => console.error('获取实名信息异常', err));
  }

  // 显示实名认证
  function clickShowRealName() {
    configParams();

    SdkInstance.showRealName({ canClose: true });
  }

  // 验证金额是否允许充值
  function handleCheckAmount() {
    configParams();

    SdkInstance.checkAmount({
      amount: 30,
      gkey: 'rxhjh5'
    })
    .then(res => {
      // checkResult为验证结果， handler为根据实名状态返回的处理器
      const { checkResult, handler } = res;
      // 根据实名状态弹出相应的弹窗（已进行实名且为成年人时，不进行弹窗操作）
      handler.exec();
    })
    .catch(err => console.error('请求checkAmount接口异常', err));
  }
```

### 弹出弹窗提示
```javascript 
  // 获取操作实例
  const feature= RealNamePc.Features.h5Platform;
  const SdkInstance = RealNamePc.Instance({ feature });

  // 显示“年龄小于8周岁”的弹窗 (默认可关闭)
  Instance.showEight();
  // or 显示“年龄小于8周岁”的弹窗 (不可关闭)
  Instance.showEight({ canclose: false });

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