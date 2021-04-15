<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu :default-active="defaultActive" class="el-menu-vertical-demo">
                <router-link to="/admin/index" v-if="role==1">
                    <el-menu-item index="1">
                        <template slot="title">
                            <span>轮播图管理</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/admin/admins" v-if="role==1">
                    <el-menu-item index="11">
                        <template slot="title">
                            <span>管理员管理</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/admin/raceNotices"  v-if="role==1">
                    <el-menu-item index="12">
                        <template slot="title">
                            <span>赛事消息通知</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/admin/raceNews"  v-if="role==1">
                    <el-menu-item index="2">
                        <template slot="title">
                            <span>赛事新闻</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/admin/raceFiles"  v-if="role==1">
                    <el-menu-item index="3">
                        <template slot="title">
                            <span>赛事资料</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/admin/raceTopics"  v-if="role==1">
                    <el-menu-item index="4">
                        <template slot="title">
                            <span>赛事主题</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/admin/raceAreas"  v-if="role==1">
                    <el-menu-item index="5">
                        <template slot="title">
                            <span>赛区信息</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/admin/raceSchools"  v-if="role==1">
                    <el-menu-item index="6">
                        <template slot="title">
                            <span>赛区学校</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <!-- <router-link to="/admin/raceCertificates">
                    <el-menu-item index="7">
                        <template slot="title">
                            <span>赛事证书</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link> -->
                <router-link to="/admin/quota"  v-if="role==1||role==2">
                    <el-menu-item index="8">
                        <template slot="title">
                            <span>赛事名额分配</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/admin/scoreTeachers" v-if="role==1||role==2||role==3">
                    <el-menu-item index="9">
                        <template slot="title">
                            <span>评分老师</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/admin/raceWorks" v-if="role==100">
                    <el-menu-item index="7">
                        <template slot="title">
                            <span>作品</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/admin/scoreWorks" v-if="role==1||role==2||role==3">
                    <el-menu-item index="13">
                        <template slot="title">
                            <span>已评分作品</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <el-menu-item index="10" @click="handleClick">
                    <template slot="title">
                        <span>退出登录</span>
                        <i class="el-icon-arrow-right icon"></i>
                    </template>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
       computed: {
           defaultActive() {
               switch(this.$route.name){
                   case "Aindex":
                       return "1";
                   case "RaceNews":
                       return "2";
                   case "RaceFiles":
                       return "3";
                   case "RaceTopics":
                       return "4";
                   case "RaceAreas":
                       return "5";
                   case "RaceSchools":
                       return "6";
                   case "RaceWorks":
                       return "7";
                   case "Quota":
                       return "8";
                   case "ScoreTeachers":
                       return "9";
                   case "Admins":
                       return "11";
                   case "RaceNotices":
                       return "12";
                   case "ScoreWorks":
                       return "13";
                   default:
                       return "1"
               }
           },
           role(){
               console.log(window.localStorage.getItem("role"))
               return window.localStorage.getItem("role")
           }
       },
       methods: {
           handleClick() {
               this.$confirm('确定退出登录?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //退出接口
                    // this.getData()
                });
           }
       },
    }
</script>

<style lang="scss" scoped>  
    h5{
        text-align: center;
        padding: 20px;
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: normal;
        border-bottom: 1px solid #ccc;
    }
    .icon{
       position:absolute;
       right:5px;
       top:22px;
       font-size:15px;
    }
</style>