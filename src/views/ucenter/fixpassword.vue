<template>
    <div class="fixpassword">
        <div class="head">
            <h2>修改密码</h2>
        </div>
        <div class="clearfix">
            <div class="form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="left" class="demo-ruleForm">
                    <el-form-item label="原密码" prop="oldPwd" required>
                        <el-input type="password" v-model="ruleForm.oldPwd"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPwd" required>
                        <el-input type="password" v-model="ruleForm.newPwd"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" required prop="confirmPwd">
                        <el-input type="password" v-model="ruleForm.confirmPwd"></el-input>
                    </el-form-item>
                    
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">保 存</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               ruleForm: {
                    oldPwd: '',
                    newPwd: '',
                    confirmPwd: '',
                },
                rules: {
                    confirmPwd: [
                        { validator: (rule, value, callback) => {
                            if (value === '') {
                              callback(new Error('请再次输入密码'));
                            } else if (value !== this.ruleForm.newPwd) {
                                console.log(value,this.ruleForm.newPwd)
                              callback(new Error('两次输入密码不一致!'));
                            } else {
                              callback();
                            }
                        }, trigger: 'blur' }
                    ],
                },
            }
        },
        methods: {
            submitForm() {
                // console.log(this.ruleForm)
                this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        this.getData("/team/changePwd","post",this.ruleForm).then(res=>{
                        //    console.log("提交：：：",res)
                           if(res.data.code===200){
                               this.$message({type:"success",message:"密码修改成功"})
                           }
                        })
                    }
                })
            },
            
        },
    }
</script>

<style lang="scss" scoped>

</style>