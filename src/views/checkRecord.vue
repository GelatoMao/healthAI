<template>
  <div>
    <button class="check-record" @click="checkRecord">
      查询用户评测记录
    </button>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>查询用户评测记录</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div v-for="(value, key, index) in record" v-bind:key="index">
        {{ key }} : {{ value }}
      </div>
    </el-card>
  </div>
</template>

<script>
import request from "@/utils/request"
import getTime from "@/utils/timestamp"

export default {
  name: "CheckRecord",
  components: {},
  props: {},
  data() {
    return {
      record: {},
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    checkRecord() {
      const time = getTime()
      request({
        method: "POST",
        url: "/user/state/load.do?evaluationCode=TNBPC",
        //data用来设置post请求体
        data: {
          appId: "5fdd838e87a7ee3d74ada9a4",
          version: "2.0",
          timestamp: time,
          nonceStr: "",
          reqData: {
            userId: "18217061370",
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
          const record = JSON.parse(res.data.resData)
          this.record = record
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped lang="less"></style>
