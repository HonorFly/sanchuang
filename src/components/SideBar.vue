<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu :default-active="defaultActive" class="el-menu-vertical-demo">
                <router-link to="/ucenter/index">
                    <el-menu-item index="1">
                        <template slot="title">
                            <span>用户中心</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/ucenter/baseinfo">
                    <el-menu-item index="2">
                        <template slot="title">
                            <span>基本信息</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/ucenter/promise">
                    <el-menu-item index="3">
                        <template slot="title">
                            <span>上传承诺书</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/ucenter/member">
                    <el-menu-item index="4">
                        <template slot="title">
                            <span>成员管理</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/ucenter/abstract">
                    <el-menu-item index="5">
                        <template slot="title">
                            <span>摘要管理</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/ucenter/certificate">
                    <el-menu-item index="6">
                        <template slot="title">
                            <span>查看证书</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/ucenter/notice">
                    <el-menu-item index="7">
                        <template slot="title">
                            <span>消息通知</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <router-link to="/ucenter/fixpassword">
                    <el-menu-item index="8">
                        <template slot="title">
                            <span>修改密码</span>
                            <i class="el-icon-arrow-right icon"></i>
                        </template>
                    </el-menu-item>
                </router-link>
                <el-menu-item index="9" @click="handleClick">
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
                   case "uindex":
                       return "1";
                   case "Baseinfo":
                       return "2";
                   case "Promise":
                       return "3";
                   case "Member":
                   case "Create":
                       return "4";
                   case "Abstract":
                       return "5";
                   case "Certificate":
                       return "6";
                   case "UNotice":
                       return "7";
                   case "Fixpassword":
                       return "8";
                   default:
                       return "1"
               }
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
                    this.getData("/logout?type=1","get").then(res=>{
                        if(res.data.code==200){
                            window.localStorage.removeItem("sc_userInfo")
                            this.$store.commit("setIsLogin",false)
                            this.$message.success("退出成功")
                            this.$router.push("/teamlogin")
                        }
                        
                    })
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