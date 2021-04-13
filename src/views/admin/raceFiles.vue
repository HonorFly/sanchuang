<template>
    <div class="raceNews">
        <div class="head">
            <h2>
                赛事资料
                <div class="f_r" @click="handleAdd" style="font-size:16px;margin-right:20px;cursor: pointer;">
                    <i class="el-icon-edit-outline"></i>
                    添加
                </div>
            </h2>
        </div>
        <el-table :data="tableData">
            <el-table-column
                prop="id"
                label="序号"
                width="108">
            </el-table-column>
            <el-table-column
                prop="fileName"
                label="资料名称"
                width="568">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" >
                        <a :href="scope.row.fileUrl" target="_blank" style="color:#fff">查看</a>
                    </el-button>
                    <el-button type="primary" size="small" @click="handleClick(scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
          :title="textMap[dialogStatus]"
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
            <el-form-item label="资料名称" prop="fileName" required>
              <el-input v-model="ruleForm.fileName" placeholder="请输入资料名称">
              </el-input>
            </el-form-item>
            
            <el-form-item label="上传资料" prop="fileUrl" required>
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
              @click="addOrUpdate"
            >
              保存
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
              textMap: {
                update: "编辑资料",
                create: "添加资料"
              },
              dialogStatus: "create",
              dialogFormVisible: false,
              ruleForm: {
                fileName: '',
                fileUrl: ''
              },
              loading:false,
              rules:{},
              fileList:[]
            }
        },
        mounted () {
            this.getList();
        },
        methods: {
            handleSuccess(response, file, fileList){
                console.log(response, file, fileList)
                this.ruleForm.fileUrl = response.data.fileUrl;
            },
             handleAdd(){
                this.dialogStatus = "create";
                this.dialogFormVisible = true;
                this.ruleForm = {
                    fileName: '',
                    fileUrl: ''
                };
                this.$nextTick(() => {
                    this.$refs["add_or_edit_Form"].clearValidate();
                });
            },
            handleClick(row) {
                // console.log(row)
                this.dialogStatus = "update";
                this.dialogFormVisible = true;
                this.ruleForm = Object.assign({},row);
                this.$nextTick(() => {
                    this.$refs["add_or_edit_Form"].clearValidate();
                });
            },
            handleDelete(row){
               console.log(row)
                this.$confirm("您确定删除此条数据吗?", "提示", {
                    cancelButtonText: "取消",
                    confirmButtonText: "确定",
                    customClass: "deleteDialog",
                    type: "warning"
                })
                    .then(() => {
                        this.getData(`/matchData/del?id=${row.id}`,"get").then(res=>{
                            if(res.data.code==200){
                                this.$message({type:"success",message:"删除成功",center:true})
                                this.getList()  
                            }
                        })
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消删除",
                            center:true
                        });
                    });
               
            },
            addOrUpdate(){
                console.log(this.ruleForm)
                this.$refs["add_or_edit_Form"].validate(valid => {
                    if (valid) {
                        this.loading = true;
                        if(this.dialogStatus=="create"){
                            this.getData("/matchData/add","post",this.ruleForm).then(res=>{
                                console.log("添加",res)
                                this.dialogFormVisible = false;
                                this.$message({
                                    message: "添加成功",
                                    type: "success",
                                    center: true
                                });
                                this.loading = false;
                                this.getList()
                            }).catch(() => {
                                this.loading = false;
                            });
                        }else{
                            this.getData("/matchData/update","post",this.ruleForm).then(res=>{
                                console.log("更新",res)
                            this.dialogFormVisible = false;
                                this.$message({
                                    message: "编辑成功",
                                    type: "success",
                                    center: true
                                });
                                this.loading = false;
                                this.getList()
                            }).catch(() => {
                                this.loading = false;
                            });
                        }
                    }
                })
            },
            getList(){
               this.getData("/matchData/pageList","get").then(res=>{
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
</style>