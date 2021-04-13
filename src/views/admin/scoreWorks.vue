<template>
    <div class="quota">
        <div class="head">
            <h2>
                作品
            </h2>
        </div>
        <el-table :data="overtableData">
            <el-table-column
                prop="teamId"
                label="团队名称"
                width="160">
            </el-table-column>
            <el-table-column
                prop="workName"
                label="作品名称"
                width="168">
            </el-table-column>
            <el-table-column
                prop="workAbstract"
                label="作品摘要"
                width="320">
            </el-table-column>
            <el-table-column
                prop="score"
                label="分数"
                width="68">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="handleClick(scope.row)">晋级</el-button>
                    <el-button type="primary" @click="handleClick(scope.row)">不能晋级</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
         data() {
            return {
              overtableData: []
            }
        },
        mounted () {
            this.getOverList();
        },
        methods: {
            handleClick(row) {
                console.log(row)
                // this.$router.push({path:"/ucenter/create",query:{id:row.id}})
            },
            getOverList(){
               this.getData("/matchWork/scoreList","get").then(res=>{
                    console.log("已评分：：：",res)
                    if(res.data.code==200){
                        this.overtableData = res.data.data
                    }
                });
            },
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