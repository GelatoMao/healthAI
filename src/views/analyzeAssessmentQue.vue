<template>
  <div>
    <button class="analyze-assessment-que" @click="analyzeAssessmentQue">
      解析测评问卷
    </button>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>解析测评问卷</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div v-for="(value, key, index) in assessmentQue" v-bind:key="index">
        {{ key }} : {{ value }}
      </div>
    </el-card>
  </div>
</template>

<script>
import request from "@/utils/request"
import getTime from "@/utils/timestamp"


export default {
  name: "AnalyzeAssessmentQue",
  components: {},
  props: {},
  data() {
    return {
      assessmentQue: {},
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    analyzeAssessmentQue() {
      const time = getTime()
      request({
        method: "POST",
        url: "/content/analysis.do?evaluationCode=TNBPC",
        //data用来设置post请求体
        data: {
          appId: "5fdd838e87a7ee3d74ada9a4",
          version: "2.0",
          timestamp: time,
          nonceStr: "",
          reqData: {
            basicParames: {
              birthday: "1990-01-01",
              pastHistory: ["4"],
              gender: "1",
              smoke: ["1"],
              weight: "75.0",
              userId: "htf123",
              diabetesFamilyHistory: ["3"],
              sleep: ["1", "2", "3"],
              abnormalSymptoms: ["1", "3"],
              psychology: ["2"],
              waist: "95",
              diet: ["1", "2", "3", "4"],
              sport: ["1"],
              height: "175",
              fastingBloodGlucose: ["20.0"],
              postprandialBloodGlucose: ["22.0"],
            },
            userOptions: [
              {
                questionCode: "1",
                optionCodes: ["3"],
              },
              {
                questionCode: "2",
                optionCodes: ["4"],
              },
              {
                questionCode: "3",
                optionCodes: ["1", "3"],
              },
              {
                questionCode: "4",
                optionCodes: ["1"],
              },
              {
                questionCode: "5",
                optionCodes: ["1", "2", "3"],
              },
              {
                questionCode: "6",
                optionCodes: ["1", "2", "3", "4"],
              },
              {
                questionCode: "7",
                optionCodes: ["1"],
              },
              {
                questionCode: "8",
                optionCodes: ["3"],
              },
              {
                questionCode: "9",
                optionCodes: ["2"],
              },
            ],
          },
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
          this.assessmentQue = assessment
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped lang="less"></style>
