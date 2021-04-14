<template>
    <div class="quota">
        <div class="head">
            <h2>
                作品
            </h2>
        </div>
        <!-- <div>待评分作品</div> -->
        <el-table :data="tableData">
            <el-table-column
                prop="teamId"
                label="团队名称"
                width="100">
            </el-table-column>
            <el-table-column
                prop="workName"
                label="作品名称"
                width="168">
            </el-table-column>
            <el-table-column
                prop="workAbstract"
                label="作品摘要"
                width="438">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <!-- <el-button type="primary"> -->
                        <a :href="scope.row.fileUrl" :download="scope.row.fileUrl" style="color:#fff;padding:12px 20px;background-color:#409EFF;margin-right:10px;border-radius:4px;">下载作品</a>
                    <!-- </el-button> -->
                    <el-button type="primary" @click="handleClick(scope.row)">评分</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
          title="评分"
          :visible.sync="dialogFormVisible"
          lock-scroll
          custom-class="add_or_edit_subject"
        >
          <el-form
            ref="add_or_edit_Form"
            :rules="rules"
            :model="ruleForm"
            label-position="left"
            label-width="100px"
            style="width: 100%; padding-left:30px;"
          >
            <el-form-item label="作品分数" prop="score" required>
              <el-input v-model="ruleForm.score">
              </el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button
              :loading="loading"
              type="primary"
              round
              @click="sure"
            >
              确定
            </el-button>
          </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
         data() {
            return {
              tableData: [],
              overtableData: [],
              dialogFormVisible: false,
              ruleForm: {
                workerId:"",
                score: "",
              },
              loading:false,
              rules:{},
            }
        },
        mounted () {
            this.getList();
            // this.getOverList();
        },
        methods: {
            handleClick(row) {
                // console.log(row)
                this.dialogFormVisible = true;
                this.ruleForm.workerId = row.id;
                this.$nextTick(() => {
                    this.$refs["add_or_edit_Form"].clearValidate();
                });
            },
            sure(){
                console.log(this.ruleForm)
                this.$refs["add_or_edit_Form"].validate(valid => {
                    if (valid) {
                        this.loading = true;
                        this.getData("/workerScore/score","post",this.ruleForm).then(res=>{
                            this.loading = false;
                            if(res.data.code==200){
                                this.dialogFormVisible = false;
                                this.$message({
                                    message: "评分成功",
                                    type: "success",
                                    center: true
                                });
                                this.getList()
                            }
                        }).catch(() => {
                            this.loading = false;
                        });
                        
                    }
                })
            },
            getList(){
               this.getData("/teacher/workList","get").then(res=>{
                    console.log("待评分：：：",res)
                    if(res.data.code==200){
                        this.tableData = res.data.data
                    }
                });
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