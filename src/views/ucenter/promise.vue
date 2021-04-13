<template>
    <div class="promise">
        <div class="head">
            <h2>文件管理</h2>
        </div>
        <div class="clearfix">
            <div class="form" style="width: 90%">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form-horizontal" label-width="120px" label-position="left">
                    <el-form-item label="团队承诺书" class="uploadForm" prop="teamPromise" required>
                        <el-upload
                            class="upload-demo"
                            action="http://106.12.177.23:8081/file/upload"
                            :on-success="handleSuccessApplication"
                            :file-list="fileList">
                            <el-button icon="el-icon-folder-opened">
                                上传
                            </el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="指导老师承诺书" prop="teachPromise" required>
                        <el-upload
                            class="upload-demo"
                            action="http://106.12.177.23:8081/file/upload"
                            :on-success="handleSuccess"
                            :file-list="fileList1">
                            <el-button icon="el-icon-folder-opened">上传</el-button>
                        </el-upload>
                    </el-form-item>
                                    
                    <el-form-item>
                        <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">保  存</el-button>
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
                    teachPromise:"",
                    teamPromise:""
                },
                fileList:[],
                fileList1:[],
                rules:{}
            }
        },
        methods: {
            submitForm() {
                this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        this.getData("/team/promise","post",this.ruleForm).then(res=>{
                            console.log(res)
                            if(res.data.code==200){
                                console.log("zou ")
                                this.$message({type:"success",message:"保存成功"})
                            }
                        })
                    }
                })
            },
            handleSuccess(response, file, fileList){
                console.log(response, file, fileList)
                this.ruleForm.teachPromise = response.data.fileUrl;
            },
            handleSuccessApplication(response, file, fileList){
                console.log(response, file, fileList)
                this.ruleForm.teamPromise = response.data.fileUrl;
            }
        },
    }
</script>

<style lang="scss" scoped>
.form-horizontal{
    width: 500px;
    margin-left: 30px;
}

.ucenter-main {
   .form{
     .upload-demo{
        /deep/ label{
            width: auto;
            line-height: 30px;
        }
     }
}
}
/deep/.el-upload{
    .el-upload__input{
        display: none;
    }
}
</style>