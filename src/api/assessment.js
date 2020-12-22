import request from '@/utils/request'
import getTime from '@/utils/timestamp'

//获取测评基本信息
export const getAssessmentInfo = (data, headers) => {
  return request({
    method: 'POST',
    url: '/basic/information/load.do?evaluationCode=TNBPC',
    // Body 参数使用 data 设置
    data,
    headers
    // Query 参数使用 params 设置
    // Headers 参数使用 headers 设置
  })
}

//获取测评问卷

//解析测评问卷

//生成测评报告

//获取测评报告

//查询用户测评记录