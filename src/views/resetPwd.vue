<template>
    <div class="arealogin">
        <div class="block register clearfix" style="z-index: 100;">
            <div class="reg_head">
                <h2>管理员找回密码</h2>
            </div>

            <div class="reg_cont">
                    <div class="form-horizontal">
                        <div class="reg_form">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="80px" label-position="left">
                                    <el-form-item label="邮箱" prop="email" required>
                                        <el-input v-model="ruleForm.email"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">发送密码重置链接</el-button>
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
                    email:"",
                },
                rules:{}
            }
        },
        methods: {
            submitForm() {
                this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        if(this.ruleForm.role==1){
                            this.getData("/admin/login","post",this.ruleForm).then(res=>{
                                console.log(res)
                                if(res.data.code==200){
                                    window.localStorage.setItem("role",res.data.data.role)
                                    this.$router.push("/admin/index")
                                }
                            })
                        }else{
                            this.getData("/teacher/login","post",this.ruleForm).then(res=>{
                                console.log(res)
                                if(res.data.code==200){
                                    window.localStorage.setItem("role",100)
                                    this.$router.push("/admin/raceWorks")
                                }
                            })
                        }
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