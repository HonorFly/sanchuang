<template>
    <div class="baseinfo">
        <div class="head">
            <h2>基本信息</h2>
        </div>
        <div class="clearfix">
            <div class="form" style="margin-left:30px">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="left" class="form-horizontal">
                    <el-form-item label="登录名" prop="userName" required>
                        <el-input v-model="ruleForm.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email" required>
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="团队名称" prop="teamName" required>
                        <el-input  v-model="ruleForm.teamName"></el-input>
                    </el-form-item>
                    <el-form-item label="所在赛区" required prop="areaId">
                        <el-input disabled v-model="ruleForm.areaName"></el-input>
                    </el-form-item>
                    <el-form-item label="所在学校" prop="schoolId" required>
                        <el-input disabled v-model="ruleForm.schoolName"></el-input>
                    </el-form-item>
                    <el-form-item label="主题赛" prop="topicId" required>
                            <el-select v-model="ruleForm.topicId" placeholder="请选择">
                            <el-option 
                                v-for="item in topics"
                                :key="item.id"
                                :label="item.topicName"
                                :value="item.id"
                            ></el-option>
                        </el-select>
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
                    userName: '',
                    areaName:"",
                    schoolName:"",
                    email: '',
                    teamName:"",
                    areaId: '',
                    schoolId: '',
                    topicId:""
                },
                rules: {},
                topics:[],
            }
        },
        mounted(){
            this.getData("/team/selectOne","get").then(res=>{
                console.log("获取基本信息：",res)
                if(res.data.code==200){
                    this.ruleForm = {...this.ruleForm,...res.data.data};
                }
            }).then(()=>{
                this.getData("/matchTopic/all","get").then(res=>{
                    console.log("获取赛事主题：",res)
                    if(res.data.code==200){
                        this.topics = res.data.data;
                    }
                })
            })
            
        },
        methods: {
            submitForm() {
                console.log(this.ruleForm)
                this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        this.getData("/team/update","post",this.ruleForm).then(res=>{
                           console.log("提交：：：",res)
                           this.$message({type:"success",message:"信息修改成功"})
                        })
                    }
                })
            }
        },
    }
</script>