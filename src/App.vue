<template>
  <div id="app">
    <div id="nav">
      <router-link to="/generateAssessment">生成测评报告</router-link> |
      <router-link to="/getAssessment">获取测评报</router-link> |
      <router-link to="/checkRecord">查询用户测评记录</router-link>
    </div>
    <!-- 路由出口 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "healthAI",
}
</script>

<style lang="less"></style>
