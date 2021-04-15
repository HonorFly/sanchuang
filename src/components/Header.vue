<template>
    <div id="header">
        <ul>
          <router-link v-for="tab in tabsL" :key="tab.name" tag="li" :to="tab.href"> 
              {{tab.name}}
          </router-link>
          <img src="/assets/images/logo.png" alt="logo">  
          <router-link v-for="(tab,index) in tabsR" :key="tab.name" tag="li" :to="index==1&&isLogin&&$route.path!='/teamlogin'?'/ucenter/index':(index==3&&isAdLogin&&$route.path!='/arealogin'?(role==100?'/admin/raceWorks':'/admin/index'):tab.href)"> 
              {{index==1&&isLogin&&$route.path!='/teamlogin'||index==3&&isAdLogin&&$route.path!='/arealogin'?'个人中心':tab.name}}
          </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabsL:[{name:"网站首页",href:"/"},
                    {name:"大赛简介",href:"/introduce"},
                    {name:"新闻公告",href:"/news"},
                    {name:"资料下载",href:"/download"},
                    {name:"省赛信息",href:"/areainfo"},],
                tabsR:[ {name:"团队报名",href:"/teamregister"},
                    {name:"团队登录",href:"/teamlogin"},
                    {name:"赛区注册",href:"/arearegister"},
                    {name:"赛区登录",href:"/arealogin"},
                    {name:"联系我们",href:"/contact"},]
            }
        },
        computed: {
            isLogin() {
                if(window.localStorage.getItem("sc_userInfo")){
                    return true
                }else{
                    return false 
                }
            },
            isAdLogin(){
                if(window.localStorage.getItem("sc_ad_userInfo")){
                    return true
                }else{
                    return false 
                }
            },
            role(){
                return window.localStorage.getItem("role")
            }
        },
    }
</script>

<style lang="scss" scoped>
    #header{
        height: 138px;
        background-color: #0d59a7;
        ul{
            display: flex;
            width: 1200px;
            height: 30px;
            line-height: 30px;
            margin: 0 auto;
            color: #fff;
            li{
                font-size: 18px;
                padding: 0 10px ;
                margin-top: 90px;
                &:hover{
                    cursor: pointer;
                }
            }
        }
        img{
            width: 270px;
            height: 214px;
        }
    }
</style>