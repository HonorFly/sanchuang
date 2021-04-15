<template>
    <div class="unotice">
        <div class="head">
            <h2>消息通知</h2>
        </div>
        <el-table :data="tableData" @row-click="handleClick">
            <el-table-column
                prop="createTime"
                label="通知时间"
                width="200">
            </el-table-column>
            <el-table-column
                prop="title"
                label="通知标题">
            </el-table-column>
        </el-table>
        <el-dialog
          title="消息通知详情"
          :visible.sync="dialogFormVisible"
          lock-scroll
        >
          <h2 style="text-align:center;margin-bottom:20px">{{info.title}}</h2>
          <div style="margin:0 10px">{{info.content}}</div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              tableData: [],
              dialogFormVisible: false,
              info:{}
            }
        },
        mounted () {
            this.getData("/messageNotify/pageList","get").then(res=>{
                if(res.data.code==200){
                    this.tableData = res.data.data
                }
            });
        },
        methods: {
            handleClick(row) {
                // console.log(row)
                this.dialogFormVisible = true;
                this.info = row;
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