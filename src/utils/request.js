/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'

// 创建一个 axios 实例，相当于复制了一个axios
// 通过这个实例去发请求，把需要的配置配置给这个实例来处理
const request = axios.create({
  baseURL: 'https://api.jiankangyouyi.com/ego-gw/v4/evaluation/'
})

export default request