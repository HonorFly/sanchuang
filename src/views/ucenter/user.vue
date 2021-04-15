<template>
    <div class="ucenterindex">
        <div class="head">
            <h2>用户中心</h2>
        </div>
        <div class="clearfix">
            <div class="baseinfo">
                <div style="margin: 20px;">
                    <div class="card" style="width: 45%;float: left;">
                        <h3>团队基本信息</h3>
                        <ul>
                            <li>团队ID：{{info.id}}</li>
                            <li>报名赛区：{{info.areaName}}</li>
                            <li>报名学校：{{info.schoolName}}</li>
                            <li>团队名称：{{info.teamName}}</li>
                            <li>邮箱：{{info.email}}</li>
                            <li>登录名：{{info.userName}}</li>
                            <li>审核状态：待审核</li>
                        </ul>
                    </div>

                    <div class="card" style="width: 45%;float: left;">
                        <h3>校赛联系信息</h3>
                        <ul>
                            <li>报名学校：{{schoolInfo.schoolName}}</li>
                            <li>学校是否备案：{{schoolInfo.keepRecord?"是":"否"}}</li>
                            <li>邮箱：50117019@qq.com</li>
                            <li>团队在提交信息之后，校管理员审核信息之前，可自行修改信息</li>
                            <li>校赛管理员审核通过后，不可以修改成员信息，若需修改，需要联系校赛管理员申请取消审核后修改，修改后需要重新提交成员信息。</li>
                            <li>全国报名通道关闭后，团队信息将不可修改</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <el-table :data="tableData">
                        <el-table-column
                            prop="userName"
                            label="姓名"
                            width="98">
                        </el-table-column>
                        <el-table-column
                            prop="phone"
                            label="手机号码"
                            width="112">
                        </el-table-column>
                        <el-table-column
                            prop="email"
                            label="邮箱"
                            width="220">
                        </el-table-column>
                        <el-table-column
                            prop="schoolName"
                            label="所在学校"
                            width="150">
                        </el-table-column>
                        <el-table-column
                            prop="speciality"
                            label="专业"
                            width="98">
                        </el-table-column>
                        <el-table-column
                            prop="studentType"
                            label="学生类型"
                            width="98">
                        </el-table-column>
                        <el-table-column
                            prop="userTypeName"
                            label="类型"
                            width="135">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              tableData: [],
              info:{},
              schoolInfo:{}
            }
        },
        mounted () {
            this.getData("/team/selectOne","get").then(res=>{
                console.log("获取基本信息：",res)
                if(res){
                    this.info = res.data.data;
                    this.getData(`/matchSchool/selectOne?id=${this.info.schoolId}`,"get").then(res=>{
                        console.log("校赛信息：",res)
                        this.schoolInfo = res.data.data
                    })
                }
            })
            this.getList();
        },
        methods: {
            getList(){
               this.getData("/teamUser/list","get").then(res=>{
                    console.log(res)
                    if(res&&res.data.code==200){
                        this.tableData = res.data.data
                    }
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
.card {
    color: #fff;
    background: #6bbaf8;
    padding: 10px;
    margin: 10px;
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(90, 90, 90, 0.1);
    min-height: 100px;
}
.card h3 {
    font-weight: 700;
    color: #fcd417;
}
.el-table{
      width: 100%;
      padding: 0 20px;
      margin-top: 20px;
      /deep/ .el-table__header-wrapper{
          .el-table__header{
                thead{
                    tr{
                        th{
                            background-color: #ddd;
                            color: #2c3e50; 
                            font-weight: 800;
                        }
                    }
                }
                
            }
      }
      /deep/ .el-table__body-wrapper{
         .el-table__body{
             tbody{
                 tr{
                     &:hover{
                         td{
                             background-color: #c2dbf3;
                         }
                     }
                 }
             }
         }
      }
  }
</style>