<template>
    <div class="arealogin">
        <div class="block register clearfix" style="z-index: 100;">
            <div class="reg_head">
                <h2>管理员登录</h2>
            </div>

            <div class="reg_cont">
                    <div class="form-horizontal">
                        <div class="reg_form">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="80px" label-position="left">
                                    <el-form-item label="用户名" prop="email" required>
                                        <el-input v-model="ruleForm.email"></el-input>
                                    </el-form-item>
                                    <el-form-item label="密码" prop="password" required>
                                        <el-input type="password" v-model="ruleForm.password" ></el-input>
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
                        this.getData("/admin/login","post",this.ruleForm).then(res=>{
                            console.log(res)
                            if(res.data.code==200){
                                this.$router.push("/admin/index")
                            }
                        })
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .demo-ruleForm{
        width: 380px;
        margin-left: 130px;
        /deep/.el-form-item__label{
            color: #333;
            font-weight: 700;
        }
    }
    .el-input{
        width: 300px;
    }
</style>