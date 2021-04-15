<template>
    <div class="teamlogin">
        <div class="login-wrap" style="z-index: 100;">
            <div class="block clearfix">
                <div class="login-box-outer">
                    <div class="login-box">
                        <div class="head">
                            <div style="position:absolute; right:30px; top:14px;font-size:12px;height:16px;line-height:16px;">
                                <router-link to="/teamregister">
                                   账号注册<em style="width:16px; height:16px; background:#999; float:right; color:#fff; border-radius:100%; text-align:center; line-height:16px; margin:1px 0 0 5px; font-family:&#39;宋体&#39;; font-weight:bold;">&gt;</em>
                                </router-link>
                            </div>
                            <h3>用户登录</h3>
                        </div>
                        <div class="form-horizontal">
                            <div class="login-body">
                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                                    <el-form-item  prop="email" required>
                                        <el-input prefix-icon="el-icon-user" v-model="ruleForm.email" placeholder="用户名/邮箱"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="password" required>
                                        <el-input type="password" prefix-icon="el-icon-lock" v-model="ruleForm.password" placeholder="请输入您的密码"></el-input>
                                    </el-form-item>
                                    <div style="height:20px">
                                        <router-link style="float:right;font-size: 12px;color:#333" to="/teamlogin">忘记密码</router-link>
                                    </div>
                                    <el-form-item>
                                        <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">登 录</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    email:"",password:""
                },
                rules:{}
            }
        },
        methods: {
            submitForm() {
                this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        this.getData("/team/login","post",this.ruleForm).then(res=>{
                            console.log(res)
                            if(res.data.code==200){
                                console.log("zou ")
                                window.localStorage.setItem("sc_userInfo",JSON.stringify(res.data.data))
                                window.localStorage.removeItem("sc_ad_userInfo")
                                this.$router.push("/ucenter/index")
                            }else{
                               this.$message.error(res.data.msg)
                            }
                        })
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>