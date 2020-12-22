<template>
  <div id="app">
    <div id="nav">
      <button @click="getAuthorization">token鉴权</button><br />
      <!-- <button @click="getLocalTime">获取当前时间</button> -->
      <router-link to="/getAssessmentInfo">获取测评基本信息</router-link> |
      <router-link to="/getAssessmentQue">获取测评问卷</router-link> |
      <router-link to="/analyzeAssessmentQue">解析测评问卷</router-link> |
      <router-link to="/generateAssessment">生成测评报告</router-link> |
      <router-link to="/getAssessment">获取测评报告</router-link> |
      <router-link to="/checkRecord">查询用户测评记录</router-link>
    </div>
    <!-- 路由出口 -->
    <router-view />
  </div>
</template>

<script>
import request from "@/utils/request"
import getTime from "@/utils/timestamp"
export default {
  name: "healthAI",
  data() {
    return {}
  },
  methods: {
    getAuthorization() {
      request({
        url:
          "https://api.jiankangyouyi.com/v2/auth/token?appId=5fdd838e87a7ee3d74ada9a4&apiKey=7779aef8d3e94e02b64ed0bce0588b78",
        method: "GET",
      })
    },
  },
  created() {},
}
</script>

<style lang="less"></style>
