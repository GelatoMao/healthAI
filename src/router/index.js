import Vue from 'vue'
import VueRouter from 'vue-router'
import AnalyzeAssessmentQue from '@/views/analyzeAssessmentQue.vue'
import CheckRecord from '@/views/checkRecord.vue'
import GenerateAssessment from '@/views/generateAssessment.vue'
import GetAssessment from '@/views/getAssessment.vue'
import GetAssessmentInfo from '@/views/getAssessmentInfo.vue'
import GetAssessmentQue from '@/views/getAssessmentQue.vue'

Vue.use(VueRouter)

//路由配置表
const routes = [
  {
    path: '/analyzeAssessmentQue',
    name: 'analyzeAssessmentQue',
    component: AnalyzeAssessmentQue
  },
  {
    path: '/checkRecord',
    name: 'checkRecord',
    component: CheckRecord
  },
  {
    path: '/generateAssessment',
    name: 'generateAssessment',
    component: GenerateAssessment
  },
  {
    path: '/getAssessment',
    name: 'getAssessment',
    component: GetAssessment
  },
  {
    path: '/getAssessmentInfo',
    name: 'getAssessmentInfo',
    component: GetAssessmentInfo
  },
  {
    path: '/getAssessmentQue',
    name: 'getAssessmentQue',
    component: GetAssessmentQue
  }

]

const router = new VueRouter({
  routes
})

export default router
