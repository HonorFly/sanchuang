<template>
    <div class="teamregister">
        <div class="block register clearfix" style="z-index: 100;">
            <div class="reg_head">
                <h2>参赛团队注册</h2>
            </div>
            <div class="reg_cont">
                    <div class="form-horizontal">
                        <div class="reg_form" >
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" label-position="left" class="demo-ruleForm">
                                <el-form-item label="用户名" prop="userName" required>
                                    <el-input v-model="ruleForm.userName"></el-input>
                                </el-form-item>
                                <el-form-item label="注册邮箱" prop="email" required>
                                    <el-input v-model="ruleForm.email"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="password" required>
                                    <el-input type="password" v-model="ruleForm.password"></el-input>
                                </el-form-item>
                                <el-form-item label="确认密码" required prop="repassword">
                                    <el-input type="password" v-model="ruleForm.repassword"></el-input>
                                </el-form-item>
                                <el-form-item label="团队名称" prop="teamName" required>
                                    <el-input v-model="ruleForm.teamName"></el-input>
                                </el-form-item>
                                <el-form-item label="赛区" prop="areaId" required>
                                    <el-select v-model="ruleForm.areaId" placeholder="请选择" @change="getAreaId">
                                        <el-option
                                            v-for="item in areas"
                                            :key="item.id"
                                            :label="item.matchArea"
                                            :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="学校" prop="schoolId" required>
                                   <el-select v-model="ruleForm.schoolId" placeholder="请选择">
                                        <el-option
                                            v-for="item in schools"
                                            :key="item.id"
                                            :label="item.schoolName"
                                            :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <iframe src="/assets/registertxt.html" frameborder="0" width="100%" height="300px" style="width:635px;height: 300px;overflow-y: scroll; border: 1px solid #d9dde1;padding: 15px;"></iframe>

                                <el-form-item prop="radio" required>
                                    <el-radio v-model="ruleForm.radio" label="1">已经阅读并同意上述大赛细则</el-radio>
                                </el-form-item>
                                
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">同意以上内容并注册</el-button>
                                </el-form-item>
                            </el-form>
                        </div>

                        <div class="reg_info" style="width: 45%;float: left;margin-top: 50px;">
                            <h3 style="font-size: 18px;">注册说明</h3>
                            <div class="reg_info_cont">
                                <p>一、	参赛者务必真实准确地填写注册信息；</p>
                                <p>二、	一个团队只能注册一个账号；</p>
                                <p>三、	用户名、注册邮箱、赛区、学校一旦注册成功后不得更改；</p>
                                <p>四、	若学校列表中没有所在学校，请直接向秘书处发送邮件说明情况（3chuang@xjtu.edu.cn）；</p>
                                <p>五、	参赛者须保证注册信息全部属实,一切由上述信息错误引起的后果由参赛者自负。</p>
                                <p>六、 团队注册后，需按照要求在团队界面填完相关信息，点击“确认信息并提交”，才算报名成功。</p>
                                <p><strong>七、 注册邮箱请务必填写真实邮箱，若忘记密码需要通过邮箱找回。</strong></p>
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
                    userName: '',
                    email: '',
                    password: '',
                    repassword: '',
                    teamName: '',
                    areaId: '',
                    school: '',
                    radio: ''
                },
                rules: {
                    repassword: [
                        { validator: (rule, value, callback) => {
                            if (value === '') {
                              callback(new Error('请再次输入密码'));
                            } else if (value !== this.ruleForm.password) {
                                console.log(value,this.ruleForm.password)
                              callback(new Error('两次输入密码不一致!'));
                            } else {
                              callback();
                            }
                        }, trigger: 'blur' }
                    ],
                },
                areas:[
                    // {id: 1, matchArea: "黑龙江赛区", contact: "张三", hostSchool: "东北林业大学", email: "111111@163.com"},
                    // {id: 2, matchArea: "杭州赛区", contact: "李四", hostSchool: "杭州电子科技大学", email: "760927810@qq.com"},
                    // {id: 3, matchArea: "北京赛区", contact: "李四", hostSchool: "北京大学", email: "1808368487@qq.com"}
                ],
                schools:[]
            }
        },
        mounted(){
            this.getData("/matchAreaMessage/all","get").then(res=>{
                // console.log("获取赛区列表：",res)
                if(res.data.code==200){
                    this.areas = res.data.data;
                }
            })
        },
        methods: {
            getAreaId(){
                console.log(this.ruleForm.areaId)
                this.getData(`/matchSchool/all?areaId=${this.ruleForm.areaId}`,"get",{areaId:this.ruleForm.areaId}).then(res=>{
                   if(res.data.code==200){
                       this.schools = res.data.data;
                   }
                })
            },
            submitForm() {
                //  console.log(this.ruleForm)
                this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        this.getData("/team/register","post",this.ruleForm).then(res=>{
                           console.log("提交：：：",res)
                           this.$message({type:"succcess",message:"注册成功"})
                           this.$router.push("/teamlogin");
                        })
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
            .reg_info_cont h3 {
                font-size: 18px;
            }

            .reg_info_cont p {
                text-indent: 2em;
                margin: 5px 0;
            }
            .reg_form{
                width: 50%;
                /deep/ .el-form--label-left .el-form-item__label{
                    color: #333;
                    font-weight:700;
                }
            }
            .el-form{
                position: relative;
            }
            .el-input{
                width: 300px;
            }
</style>