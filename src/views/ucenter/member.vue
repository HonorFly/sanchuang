<template>
    <div class="member">
        <div class="head">
            <h2>
                成员列表
                <router-link to="/ucenter/create" class="f_r">
                    <i class="el-icon-edit-outline"></i>
                    添加成员
                </router-link>
            </h2>
        </div>
        <el-table :data="tableData">
            <el-table-column
                prop="userName"
                label="姓名"
                width="78">
            </el-table-column>
             <el-table-column
                prop="phone"
                label="手机号码"
                width="116">
            </el-table-column>
            <el-table-column
                prop="email"
                label="邮箱"
                width="162">
            </el-table-column>
            <el-table-column
                prop="schoolName"
                label="所在学校"
                width="130">
            </el-table-column>
            <el-table-column
                prop="speciality"
                label="专业"
                width="88">
            </el-table-column>
            <el-table-column
                prop="studentType"
                label="学生类型"
                width="76">
            </el-table-column>
            <el-table-column
                prop="userTypeName"
                label="类型"
                width="122">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="handleClick(scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              tableData: []
            }
        },
        mounted () {
            this.getList();
        },
        methods: {
            handleClick(row) {
                console.log(row)
                this.$router.push({path:"/ucenter/create",query:{id:row.id}})
            },
            handleDelete(row){
               console.log(row)
               this.getData(`/teamUser/del?id=${row.id}`,"get").then(res=>{
                   if(res.data.code==200){
                       this.$message({type:"success",message:"删除成功"})
                       this.getList()  
                   }
               })
            },
            getList(){
               this.getData("/teamUser/list","get").then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.tableData = res.data.data
                    }
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
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