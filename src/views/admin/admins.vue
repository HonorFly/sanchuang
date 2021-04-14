<template>
    <div class="raceAdmins">
        <div class="head">
            <h2>
                管理员管理
            </h2>
        </div>
        <el-table :data="tableData">
            <el-table-column
                prop="contact"
                label="联系人"
                width="108">
            </el-table-column>
            <el-table-column
                prop="contactPhone"
                label="联系电话"
                width="108">
            </el-table-column>
            <el-table-column
                prop="email"
                label="邮箱"
                width="122">
            </el-table-column>
            <el-table-column
                prop="areaName"
                label="赛区名称"
                width="108">
            </el-table-column>
            <el-table-column
                prop="schoolName"
                label="赛区学校"
                width="136">
            </el-table-column>
            <el-table-column
                prop="role"
                label="管理员类型"
                width="100">
                <template slot-scope="scope">
                    <div>
                        {{scope.row.role==1?"总管理员":scope.row.role==2?"赛区管理员":"学校管理员"}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                prop="status"
                label="审核状态"
                width="88">
                <template slot-scope="scope">
                    <div>
                        {{scope.row.status==0?"待审核":scope.row.status==1?"通过":"不通过"}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope" v-if="scope.row.status==0">
                    <el-button type="primary" size="small" @click="handleS(scope.row)">通过</el-button>
                    <el-button type="danger" size="small" @click="handleNS(scope.row)">不通过</el-button>
                </template>
                <template slot-scope="scope" v-if="scope.row.status!=0">
                    <div>已审核</div>
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
            handleS(row) {
                // console.log(row)
                this.getData(`/admin/review?id=${row.id}&status=1`,"get").then(res=>{
                    if(res.data.code==200){
                        this.$message({type:"success",message:"审核成功",center: true})
                        this.getList()  
                    }
                })
            },
            handleNS(row){
               this.getData(`/admin/review?id=${row.id}&status=2`,"get").then(res=>{
                    if(res.data.code==200){
                        this.$message({type:"success",message:"审核成功",center: true})
                        this.getList()  
                    }
                })
            },
            getList(){
               this.getData(`/admin/pageList?pageIndex=1&pageSize=10`,"get").then(res=>{
                    console.log("：：：",res)
                    if(res.data.code==200){
                        this.tableData = res.data.data.list
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
  .el-textarea{
      /deep/ .el-textarea__inner{
          height: 230px;
          outline: none;
          resize: none;
      }
  }
</style>