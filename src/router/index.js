import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: ()=>import("../views/Index.vue")
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: ()=>import("../views/introduce.vue")
  },
  {
    path: '/rule',
    name: 'Rule',
    component: ()=>import("../views/rule.vue")
  },
  {
    path: '/linkmethod',
    name: 'Linkmethod',
    component: ()=>import("../views/linkmethod.vue")
  },
  {
    path: '/news',
    name: 'News',
    component: ()=>import("../views/news.vue")
  },
  {
    path: '/notice',
    name: 'Notice',
    component: ()=>import("../views/notice.vue")
  },
  {
    path: '/download',
    name: 'Download',
    component: ()=>import("../views/download.vue")
  },
  {
    path: '/areainfo',
    name: 'Areainfo',
    component: ()=>import("../views/areainfo.vue")
  },
  {
    path: '/university',
    name: 'University',
    component: ()=>import("../views/university.vue")
  },
  {
    path: '/teamregister',
    name: 'Teamregister',
    component: ()=>import("../views/teamregister.vue")
  },
  {
    path: '/teamlogin',
    name: 'Teamlogin',
    component: ()=>import("../views/teamlogin.vue")
  },
  {
    path: '/arearegister',
    name: 'Arearegister',
    component: ()=>import("../views/arearegister.vue")
  },
  {
    path: '/arealogin',
    name: 'Arealogin',
    component: ()=>import("../views/arealogin.vue")
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ()=>import("../views/contact.vue")
  },
  {
    path:"/ucenter",
    name:'UCenter',
    component:()=>import("../views/ucenter/index.vue"),
    children:[
      {
        path:"index",
        name:"uindex",
        component:()=>import("../views/ucenter/user.vue")
      },
      {
        path:"abstract",
        name:"Abstract",
        component:()=>import("../views/ucenter/abstract.vue")
      },
      {
        path:"baseinfo",
        name:"Baseinfo",
        component:()=>import("../views/ucenter/baseinfo.vue")
      },
      {
        path:"certificate",
        name:"Certificate",
        component:()=>import("../views/ucenter/certificate.vue")
      },
      {
        path:"fixpassword",
        name:"Fixpassword",
        component:()=>import("../views/ucenter/fixpassword.vue")
      },
      {
        path:"member",
        name:"Member",
        component:()=>import("../views/ucenter/member.vue")
      },
      {
        path:"create",
        name:"Create",
        component:()=>import("../views/ucenter/createmember.vue")
      },
      {
        path:"notice",
        name:"UNotice",
        component:()=>import("../views/ucenter/notice.vue")
      },
      {
        path:"promise",
        name:"Promise",
        component:()=>import("../views/ucenter/promise.vue")
      },
    ]
  },
  {
    path:"/admin",
    name:'Admin',
    component:()=>import("../views/admin/index.vue"),
    children:[
      {
        path:"index",
        name:"Aindex",
        component:()=>import("../views/admin/banner.vue")
      },
      {
        path:"raceNews",
        name:"RaceNews",
        component:()=>import("../views/admin/raceNews.vue")
      },
      {
        path:"raceFiles",
        name:"RaceFiles",
        component:()=>import("../views/admin/raceFiles.vue")
      },
      {
        path:"raceCertificates",
        name:"RaceCertificates",
        component:()=>import("../views/admin/raceCertificates.vue")
      },
      {
        path:"raceTopics",
        name:"RaceTopics",
        component:()=>import("../views/admin/raceTopics.vue")
      },
      {
        path:"raceAreas",
        name:"RaceAreas",
        component:()=>import("../views/admin/raceAreas.vue")
      },
      {
        path:"raceSchools",
        name:"RaceSchools",
        component:()=>import("../views/admin/raceSchools.vue")
      },
      {
        path:"quota",
        name:"Quota",
        component:()=>import("../views/admin/quota.vue")
      },
      {
        path:"scoreTeachers",
        name:"ScoreTeachers",
        component:()=>import("../views/admin/scoreTeachers.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
