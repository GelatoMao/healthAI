<template>
  <div>
    <button class="get-assessment-info" @click="getAssessmentInfo">
      获取测评基本信息
    </button>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>获取测评基本信息</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div v-for="(value, key, index) in assessmentInfo" v-bind:key="index">
        {{ key }} : {{ value }}
      </div>
    </el-card>
  </div>
</template>

<script>
import request from "@/utils/request"
import getTime from "@/utils/timestamp"

export default {
  name: "GetAssessmentInfo",
  components: {},
  props: {},
  data() {
    return {
      assessmentInfo: {},
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getAssessmentInfo() {
      const time = getTime()
      request({
        method: "POST",
        url: "/basic/information/load.do?evaluationCode=TNBPC",
        //data用来设置post请求体
        data: {
          appId: "5fdd838e87a7ee3d74ada9a4",
          version: "2.0",
          timestamp: time,
          nonceStr: "",
        },
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6IjVmZGQ4MzhlODdhN2VlM2Q3NGFkYTlhNCIsImlhdCI6MTYwODU1NDAxMywiZXhwIjoxNjA4NjQwNDEzfQ.V_ikj_73iBq-upcb5jcoWmrpjDq1yGzzfgbg-Rg6UHQ",
        },
      })
        .then((res) => {
          console.log(res.data.resData)
          console.log(typeof res.data.resData)
          const assessment = JSON.parse(res.data.resData)
          this.assessmentInfo = assessment
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 900px;
  margin-top: 50px;
}
</style>
