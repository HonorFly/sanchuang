<template>
    <div class="certificate">
        <div class="head">
            <h2>我的证书</h2>
        </div>
        <el-table :data="tableData" @row-click="handleClick">
            <el-table-column
                prop="date"
                label="类型"
                width="180">
            </el-table-column>
             <el-table-column
                prop="date"
                label="奖项"
                width="180">
            </el-table-column>
            <el-table-column
                prop="date"
                label="证书编号"
                width="280">
            </el-table-column>
            <el-table-column
                prop="address"
                label="下载证书">
            </el-table-column>
        </el-table>
     
    </div>
</template>

<script>
    export default {
        data() {
            return {
              tableData: [
                  {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }
              ]
            }
        },
        mounted () {
            this.getData("/messageNotify/pageList","get").then(res=>{
                if(res.data.code==200){
                    // this.tableData = res.data.data
                }
            });
        },
        methods: {
            handleClick(row, column, event) {
                console.log(row, column, event)
            }
        },
    }
</script>

<style lang="scss" scoped>
   .el-table{
      width: 100%;
      padding: 0 20px;
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