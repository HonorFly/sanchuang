<template>
    <div class="raceTopics">
        <div class="head">
            <h2>
                赛区学校
                <div class="f_r">
                    <i class="el-icon-edit-outline"></i>
                    添加学校
                </div>
            </h2>
        </div>
        <el-table :data="tableData">
            <el-table-column
                prop="sort"
                label="序号"
                width="168">
            </el-table-column>
            <el-table-column
                prop="bannerUrl"
                label="学校作在赛区"
                width="298">
            </el-table-column>
            <el-table-column
                prop="bannerUrl"
                label="学校名称"
                width="268">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="handleClick(scope.row)">编辑</el-button>
                    <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
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
               this.getData("/banner/pageList","get").then(res=>{
                    console.log("轮播图：：：",res)
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
</style>