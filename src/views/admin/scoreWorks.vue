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
                    <!-- <el-button type="primary" @click="handleClick(scope.row)">不能晋级</el-button> -->
                </template>
            </el-table-column>
        </el-table>
         <el-dialog
          title="晋级"
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
            <el-form-item
              label="证书"
              prop="fileUrl"
              required
            >
             <el-upload
                class="upload-demo"
                action="http://106.12.177.23:8081/file/upload"
                :on-success="handleSuccess"
                :file-list="fileList">
                    <el-button icon="el-icon-folder-opened">
                        上传
                    </el-button>
                </el-upload>
            </el-form-item>
            
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button
              :loading="loading"
              type="primary"
              round
              @click="sure"
            >
              确定晋级
            </el-button>
          </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
         data() {
            return {
              overtableData: [],
              dialogFormVisible: false,
              ruleForm: {
                workerId: "",
                fileName:"",
                fileUrl:"",
              },
              loading:false,
              rules:{},
              fileList:[]
            }
        },
        mounted () {
            this.getOverList();
        },
        methods: {
            handleSuccess(response, file, fileList){
                console.log(response, file, fileList)
                this.ruleForm.fileUrl = response.data.fileUrl;
                this.ruleForm.fileName = response.data.fileName;
            },
            handleClick(row) {
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
                            this.getData("/matchWork/levelUp","post",this.ruleForm).then(res=>{
                                console.log("晋级",res)
                                this.dialogFormVisible = false;
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    center: true
                                });
                                this.loading = false;
                                this.getList()
                            }).catch(() => {
                                this.loading = false;
                            });
                        
                    }
                })
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