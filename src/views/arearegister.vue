<template>
    <div class="arearegister">
        <div class="block register clearfix" style="z-index: 100;">
            <div class="reg_head">
                <h2>管理员注册</h2>
            </div>

            <div class="reg_cont clearfix">
                <div class="form-horizontal">
                    <div class="reg_form" style="width: 50%;">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="left" class="demo-ruleForm">
                            <el-form-item label="账号类型" prop="role" required>
                                <el-select v-model="ruleForm.role" placeholder="请选择">
                                    <el-option label="省级赛" value="2"></el-option>
                                    <el-option label="校级赛" value="3"></el-option>
                                </el-select>
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
                            <el-form-item label="联系人姓名" prop="contact" required>
                                <el-input v-model="ruleForm.contact"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人电话" prop="contactPhone" required>
                                <el-input v-model="ruleForm.contactPhone"></el-input>
                            </el-form-item>
                            <el-form-item label="上传文件" class="uploadForm" prop="file">
                                <el-upload
                                    class="upload-demo"
                                    action="http://106.12.177.23:8081/file/upload"
                                    :on-success="handleSuccessApplication"
                                    :file-list="fileList">
                                    <el-button icon="el-icon-folder-opened">
                                        申请书
                                    </el-button>
                                </el-upload>
                                <el-upload
                                    class="upload-demo"
                                    action="http://106.12.177.23:8081/file/upload"
                                    :on-success="handleSuccess"
                                    :file-list="fileList1">
                                    <el-button icon="el-icon-folder-opened">计划书</el-button>
                                </el-upload>
                            </el-form-item>

                            <!-- <iframe src="/assets/registertxt.html" frameborder="0" width="100%" height="300px" style="height: 300px;overflow-y: scroll; border: 1px solid #d9dde1;padding: 15px;"></iframe> -->

                            <!-- <el-form-item prop="radio" required>
                                <el-radio v-model="ruleForm.radio">已经阅读并同意上述大赛细则</el-radio>
                            </el-form-item> -->
                            
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">同意以上内容并注册</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

                <div class="reg_info" style="width: 45%;float: left;margin-top: 50px;">
                    <h3 style="font-size: 18px;">注册说明</h3>
                    <div class="reg_info_cont">
                        <p>一、	各级选拔赛管理员务必真实准确地填写注册信息。</p>
                        <p>二、	一个赛区（学校）只能注册一个账号。</p>
                        <p>三、	用户名、注册邮箱、赛区、学校一旦注册成功后不得更改。</p>
                        <p>四、	若学校列表中没有所在学校，请直接向秘书处发送邮件说明情况（3chuang@xjtu.edu.cn）。</p>
                        <p>五、	在提交注册信息之前，须下载省级选拔赛承办申请书（校级选拔赛备案申请书）模板，填写并盖章后，将扫描件上传。</p>
                        <p>如果您申请省级选拔赛管理员，请下载 <strong><a target="_blank" href="http://www.3chuang.net/file/79" style="color: red;">省级选拔赛承办申请书</a></strong></p>
                        <p>如果您申请校级选拔赛管理员，请下载 <strong><a target="_blank" href="http://www.3chuang.net/file/78" style="color: red;">校级选拔赛备案申请书</a></strong></p>
                        <p>六、 管理员须保证注册信息全部属实,一切由上述信息错误引起的后果由管理员自负。</p>
                        <p><strong>七、 注册邮箱请务必填写真实邮箱，若忘记密码需要通过邮箱找回。</strong></p>
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
                    role:"",
                    password: '',
                    repassword: '',
                    areaId: '',
                    schoolId: '',
                    radio: '',
                    contact:"",
                    contactPhone:"",
                    applicationUrl:"",
                    prospectusUrl:""
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
                    file:[
                        {validator:(rule,value,callback)=>{
                            console.log(rule,value)
                            if(!this.ruleForm.applicationUrl){
                                callback(new Error('请上传申请书'));
                            }else if(!this.ruleForm.prospectusUrl){
                                callback(new Error('请上传计划书'));
                            }else{
                                callback()
                            }
                        }},
                        {required:true,validator:(rule,value,callback)=>{
                            console.log(rule,value)
                            if(!this.ruleForm.applicationUrl&&!this.ruleForm.prospectusUrl){
                                callback(new Error('文件必传'));
                            }else{
                                callback()
                            }
                        }}
                    ]
                },
                areas:[],
                schools:[],
                fileList:[],
                fileList1:[],
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
                this.getData("/matchSchool/all","get",{areaId:this.ruleForm.areaId}).then(res=>{
                   if(res.data.code==200){
                       this.schools = res.data.data;
                   }
                })
            },
            submitForm() {
                console.log(this.ruleForm)
                this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        this.getData("/admin/register","post",this.ruleForm).then(res=>{
                           console.log("提交：：：",res)
                           this.$message({type:"success",message:"注册成功"})
                           this.$router.push("/arealogin");
                        })
                    }
                })
            },
            handleSuccess(response, file, fileList){
                console.log(response, file, fileList)
                this.ruleForm.prospectusUrl = response.data.fileUrl;
            },
            handleSuccessApplication(response, file, fileList){
                console.log(response, file, fileList)
                this.ruleForm.applicationUrl = response.data.fileUrl;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .reg_form{
        width: 50%;
        /deep/ .el-form--label-left .el-form-item__label{
            color: #333;
            font-weight:700;
        }
        .uploadForm{
            /deep/ .el-form-item__content{
                display: flex;
                .upload-demo{
                    margin-right: 10px;
                }
            }
        }
        
    }
    .el-form{
        position: relative;
    }
    .el-input{
        width: 300px;
    }
</style>