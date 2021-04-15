<template>
    <div class="createmember">
        <div class="head">
            <h2>
                {{$route.query.id?"编辑":"添加"}}成员
                <router-link to="/ucenter/member" class="f_r">
                    <i class="el-icon-s-fold"></i>
                    成员列表
                </router-link>
            </h2>
        </div>
        <div class="clearfix">
            <div class="tab-index" style="margin: 20px 0 0 20px;">
                <div class="btn-group">
                    <button :class="['btn', 'btn-primary',{'active':ruleForm.userType==1}]" @click="ruleForm.userType=1" v-if="!$route.query.id"> 
                        成员
                    </button>
                    <button :class="['btn', 'btn-primary',{'active':ruleForm.userType==2}]" @click="ruleForm.userType=2" v-if="!$route.query.id">
                        学校指导老师
                    </button>
                    <button class="btn btn-primary active" v-if="$route.query.id">编辑成员</button>
                </div>
            </div>
            <div class="tab-list">
                <!-- 参赛成员 -->
                <div class="tab-cont">
                    <div class="form">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="left" class="form-horizontal">
                            <el-form-item label="姓名" prop="userName" required>
                                <el-input v-model="ruleForm.userName"></el-input>
                            </el-form-item>
                            <el-form-item label="邮箱" prop="email" required>
                                <el-input v-model="ruleForm.email"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码" prop="phone" required>
                                <el-input v-model="ruleForm.phone"></el-input>
                            </el-form-item>
                            <el-form-item label="所在赛区" prop="areaId" required>
                                <el-select v-model="ruleForm.areaId" placeholder="请选择" @change="getAreaId">
                                    <el-option
                                        v-for="item in areas"
                                        :key="item.id"
                                        :label="item.matchArea"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="所在学校" prop="schoolId" required>
                                <el-select v-model="ruleForm.schoolId" placeholder="请选择">
                                    <el-option
                                        v-for="item in schools"
                                        :key="item.id"
                                        :label="item.schoolName"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            
                            <el-form-item label="专业" prop="speciality" required>
                                <el-input v-model="ruleForm.speciality"></el-input>
                            </el-form-item>
                            <el-form-item label="学生类型" required prop="studentType" v-if="ruleForm.userType==1">
                                 <el-select v-model="ruleForm.studentType" placeholder="请选择">
                                    <el-option key="1" label="专科" value="专科"></el-option>
                                    <el-option key="2" label="本科" value="本科"></el-option>
                                    <el-option key="3" label="研究生" value="研究生"></el-option>
                                    <el-option key="4" label="博士" value="博士"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="是否是组长" prop="isLeader" v-if="ruleForm.userType==1" required>
                                <el-radio v-model="ruleForm.isLeader" :label="1">是</el-radio>
                                <el-radio v-model="ruleForm.isLeader" :label="0">否</el-radio>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">保  存</el-button>
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
                    userName: '',
                    email: '',
                    userType: 1,
                    speciality: '',
                    teamId: '',
                    schoolId: '',
                    isLeader:'',
                    studentType:"",
                    phone:"",
                },
                rules: {},
                areas:[],
                schools:[],
            }
        },
        mounted(){
            this.getData("/matchAreaMessage/all","get").then(res=>{
                // console.log("获取赛区列表：",res)
                if(res.data.code==200){
                    this.areas = res.data.data;
                }
            })
            if(this.$route.query.id){
                this.getData(`/teamUser/selectOne?id=${this.$route.query.id}`,"get").then(res=>{
                    console.log("成员信息：",res)
                    this.ruleForm.areaId = res.data.data.teamId
                    this.getAreaId()
                    this.ruleForm = res.data.data
                })
            }
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
                // this.ruleForm.isLeader = this.ruleForm.isLeader?1:0
                this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        if(this.$route.query.id){
                            this.getData("/teamUser/update","post",this.ruleForm).then(res=>{
                                console.log("提交：：：",res)
                                if(res.data.code==200){   
                                   this.$message({type:"success",message:"编辑成功"}) 
                                   this.$router.replace("/ucenter/member")
                                }else{
                                    this.$message.error(res.data.msg)
                                }
                                
                            })
                        }else{
                           this.getData("/teamUser/add","post",this.ruleForm).then(res=>{
                                console.log("提交：：：",res)
                                this.$confirm("添加成功,是否继续添加?", "提示", {
                                            cancelButtonText: "取消",
                                            confirmButtonText: "确定",
                                            type: "warning"
                                        })
                                            .catch(() => {
                                                this.$router.push("/ucenter/member")
                                            });
                            }) 
                        }
                        
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
  .el-form{
      margin-left: 30px;
  }
  
  .btn-group {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    font-weight: 500;
    border-radius: 2px;
    outline: 0!important;
    background-color: #eee;
    border-color: #eee;
}
.btn-primary {
    color: #ffffff !important;
    background-color: #7266ba;
    border-color: #7266ba;
}
a.btn:hover {
    color: #ffffff !important;
    background-color: #27c24c;
    border-color: #27c24c;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.btn-group > .btn:first-child {
    margin-left: 0;
}
.btn-group > .btn {
    position: relative;
    float: left;
}
.btn-group .btn + .btn {
    margin-left: -2px;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active {
    color: #ffffff !important;
    background-color: #23ad44;
    border-color: #20a03f;
}
</style>