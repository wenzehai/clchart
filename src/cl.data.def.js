/**
 * Copyright (c) 2018-present clchart Contributors.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// 数据类型和数据名称分开；根据数据类型生成
// 在comm中定义几个函数，用户可以自己定义数据类型，自己定义按钮，自己定义画线的方式，
// 只要用户产生的类支持通用的接口onpaint等函数，并成功注册进来，就可以被chart拿来画图了
// 这样扩展起来才方便
// 而chart.line只画基础的一些图形，其他非标的图形由用户自行定义，包括数据生成的算法

export const STOCK_TYPE_INDEX = 0
export const STOCK_TYPE_A = 1
export const STOCK_TYPE_B = 4
export const STOCK_TYPE_OTHER = 5

export const STOCK_TRADETIME = [
  {
    begin: 930,
    end: 1130
  },
  {
    begin: 1300,
    end: 1500
  }
]

// 基本日线定义，历史分钟线，
export const FIELD_DAY = {
  time: 0,
  open: 1,
  high: 2,
  low: 3,
  close: 4,
  vol: 5,
  money: 6
}
export const FIELD_MIN = {
  idx: 0,
  open: 1,
  high: 2,
  low: 3,
  close: 4,
  vol: 5,
  money: 6,
  allvol: 5, // 增补
  allmoney: 6 // 增补
}

export const FIELD_TICK = {
  time: 0,
  close: 1,
  vol: 2
}
export const FIELD_MDAY = {
  time: 0,
  close: 1,
  vol: 2,
  idx: 3, // 增补
  allvol: 4, // 增补
  allmoney: 5 // 增补
}

// 两种单线的定义
export const FIELD_LINE = {
  time: 0,
  value: 1
}
export const FIELD_ILINE = {
  idx: 0,
  value: 1
}

// 标准5档实时行情
export const FIELD_NOW = {
  time: 0,
  open: 1,
  high: 2,
  low: 3,
  close: 4,
  vol: 5,
  money: 6,
  before: 7,
  stophigh: 8,
  stoplow: 9,
  askp1: 10,
  askp2: 11,
  askp3: 12,
  askp4: 13,
  askp5: 14,
  askv1: 15,
  askv2: 16,
  askv3: 17,
  askv4: 18,
  askv5: 19,
  bidp1: 20,
  bidp2: 21,
  bidp3: 22,
  bidp4: 23,
  bidp5: 24,
  bidv1: 25,
  bidv2: 26,
  bidv3: 27,
  bidv4: 28,
  bidv5: 29
}

// 指数实时行情
export const FIELD_NOW_IDX = {
  time: 0,
  open: 1,
  high: 2,
  low: 3,
  close: 4,
  vol: 5,
  money: 6,
  ups: 7,
  upvol: 8,
  downs: 9,
  downvol: 10,
  mids: 11,
  midvol: 12
}


export const FIELD_INFO = {
  marker: 0,
  code: 1,
  name: 2, // 股票名称
  search: 3,
  type: 4, // 股票类型
  coindot: 5, // 保留小数点
  coinzoom: 6, // 价格放大倍数 除以后为真实值
  volunit: 7 // 成交量单位 乘以后为真实值
}

// 除权字段定义
export const FIELD_RIGHT = {
  time: 0,
  sendstock: 1, // 10送股 放大1000倍
  accrual: 2,  // 10送红利 放大1000倍
  allotstock: 3, // 10配股数 放大1000倍
  allotprice: 4 // 配股价 放大1000倍
}
// 财务信息定义
export const FIELD_FINANCE = {
  code: 0,
  time: 1,
  flow: 2, // 流通股
  total: 3, // 总股本
  earnings: 4 // 每股收益
}

// 以上为系统默认定义，用户定义数据类型可以放在下面

export const FIELD_TRADE = {
  time: 0, // 交易时间
  code: 1, // 股票代码
  type: 2, // B S 买卖标志
  price: 3, // 交易价格
  vol: 4, // 成交量
  money: 5, // 成交金额
  info: 6 // 交易参数
}
