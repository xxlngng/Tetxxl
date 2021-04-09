'use strict'

// /** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// }

// 连接mongodb
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
}

// 配置路由
exports.routerGroup = {
  enable: true,
  package: 'egg-router-group',
}

// 校验参数
exports.validate = {
  enable: true,
  package: 'egg-validate',
}
