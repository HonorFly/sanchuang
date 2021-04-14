<template>
    <div class="abstract">
        <div class="head">
                    <h2>添加作品摘要</h2>
        </div>
        <div class="clearfix">
            <div class="form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form-horizontal" label-width="80px" label-position="left">
                    <el-form-item label="作品名称" prop="workName" required>
                        <el-input v-model="ruleForm.workName"></el-input>
                    </el-form-item>
                    <el-form-item label="摘要内容" prop="workAbstract" required class="txtForm">
                        <el-input class="txt" type="textarea" v-model="ruleForm.workAbstract" :minlength="100" :maxlength="300"></el-input>
                    </el-form-item>
                    <div class="tip">摘要只能为100-300字之间</div>
                    <el-form-item label="作品" prop="fileUrl" required class="txtForm">
                        <el-upload
                            class="upload-demo"
                            action="http://106.12.177.23:8081/file/upload"
                            :on-success="handleSuccess"
                            :file-list="fileList">
                            <el-button icon="el-icon-folder-opened">上传</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item style="display:flex">
                        <el-button  type="primary"  @click="addOrUpdateForm('ruleForm')">保  存</el-button>
                        <el-button  type="primary" @click="submitForm('ruleForm')" v-if="isShow">提 交</el-button>
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
                    workName:"",
                    workAbstract:"",
                    fileUrl:"",
                    fileName:""
                },
                rules:{
                    workAbstract:{
                        validator: (rule, value, callback) => {
                            if (value === '') {
                              callback(new Error('请输入摘要'));
                            } else if (value.length > 300 ) {
                                console.log(rule,value)
                               callback(new Error('摘要不能超过300字!'));
                            } else if (value.length < 100 ) {
                                console.log(rule,value)
                               callback(new Error('摘要不能少于100字!'));
                            } else {
                              callback();
                            }
                        }, trigger: 'blur'
                    }
                },
                isUpdate:false,
                fileList:[]
            }
        },
        computed: {
            isShow() {
                return this.ruleForm.id?true:false 
            }
        },
        mounted () {
            this.getData("/matchWork/selectOne","get").then(res=>{
                console.log("作品详情",res)
                if(res.data.code==200){
                    if(res.data.data.workName){
                       this.isUpdate = true
                       this.ruleForm = res.data.data;
                    }else{
                       this.isUpdate = false
                    }
                }
            });
        },
        methods: {
            handleSuccess(res){
                this.ruleForm.fileUrl = res.data.fileUrl
                this.ruleForm.fileName = res.data.fileName
            },
            addOrUpdateForm() {
                this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        if(this.isUpdate){
                            this.getData("/matchWork/update","post",this.ruleForm).then(res=>{
                                console.log(res)
                                if(res.data.code==200){
                                    console.log("zou ")
                                    this.$message({
                                        message: "保存成功",
                                        type: "success",
                                        center: true
                                    });
                                }
                            })
                        }else{
                            this.getData("/matchWork/add","post",this.ruleForm).then(res=>{
                                console.log(res)
                                if(res.data.code==200){
                                    console.log("zou ")
                                    this.$message({
                                        message: "保存成功",
                                        type: "success",
                                        center: true
                                    });
                                }
                            })
                        }
                    }
                })
            },
            submitForm(){
                 this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        this.getData(`/matchWork/submit?id=${this.ruleForm.id}`,"get").then(res=>{
                            console.log(res)
                            if(res.data.code==200){
                                console.log("zou ")
                                this.$message({
                                    message: "提交成功",
                                    type: "success",
                                    center: true
                                });
                            }
                        })
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .form-input {
        float: left;
    }
    .txtForm{
        margin-bottom: 20px;
    }
    .txt{
        width: 500px;
        height: 200px;
        /deep/.el-textarea__inner{
            width: 500px;
            height: 200px;
            outline: none;
            resize: none;
        }
    }
    .tip{
        margin-left: 80px;
        margin-bottom: 20px;
    }
    .ucenter-main .form .abstract .error{
        position: absolute;
        top: 0;
        bottom: -20px;
        left: 80px;
        right: 0;
        line-height: 24px;
        height: 24px;
        color: #f01414;
        font-size: 12px;
    }
    /deep/.el-upload{
    .el-upload__input{
        display: none;
    }
}
</style>