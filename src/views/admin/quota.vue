<template>
    <div class="quota">
        <div class="head">
            <h2>
                赛事名额分配
                <div class="f_r" @click="handleAdd"  style="font-size:16px;margin-right:20px;cursor: pointer;">
                    <i class="el-icon-edit-outline"></i>
                    添加
                </div>
            </h2>
        </div>
        <el-table :data="tableData">
            <el-table-column
                prop="areaName"
                label="赛区名称"
                width="210">
            </el-table-column>
            <el-table-column
                prop="schoolName"
                label="赛区学校名称"
                width="250"
            >
            </el-table-column>
            <el-table-column
                prop="num"
                label="分配名额"
                width="120">
            </el-table-column>
            <el-table-column
                prop="aleadyNum"
                label="已晋级名额"
                width="120">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
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
            
            <el-form-item
              label="所在赛区"
              prop="areaId"
              required
            >
              <el-select v-model="ruleForm.areaId" placeholder="请选择" @change="getAreaId">
                    <el-option
                        v-for="item in areas"
                        :key="item.id"
                        :label="item.matchArea"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item
              label="所在学校"
              prop="schoolId"
              required
            >
              <el-select v-model="ruleForm.schoolId" placeholder="请选择">
                    <el-option
                        v-for="item in schools"
                        :key="item.id"
                        :label="item.schoolName"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="分配名额数" prop="num" required>
              <el-input v-model="ruleForm.num">
              </el-input>
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
                update: "编辑分配名额",
                create: "添加分配名额"
              },
              dialogStatus: "create",
              dialogFormVisible: false,
              ruleForm: {
                num: "",
                quotaType:"",
                schoolId: "",
                areaId: ""
              },
              loading:false,
              rules:{},
              areas:[],
              schools:[]
            }
        },
        mounted () {
            this.getList();
            this.getData(`/matchAreaMessage/all`,"get").then(res=>{
                console.log("：：：",res)
                if(res.data.code==200){
                    this.areas = res.data.data
                }
            });
        },
        methods: {
            getAreaId(){
                console.log(this.ruleForm.areaId)
                this.getData(`/matchSchool/all?areaId=${this.ruleForm.areaId}`,"get").then(res=>{
                   if(res.data.code==200){
                       this.schools = res.data.data;
                   }
                })
            },
             handleAdd(){
                this.dialogStatus = "create";
                this.dialogFormVisible = true;
                this.ruleForm = {
                    num: "",
                    quotaType:"",
                    schoolId: "",
                    areaId: ""
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
                this.getData(`/matchSchool/all?areaId=${this.ruleForm.areaId}`,"get").then(res=>{
                   if(res.data.code==200){
                       this.schools = res.data.data;
                   }
                })
                this.$nextTick(() => {
                    this.$refs["add_or_edit_Form"].clearValidate();
                });
            },
            handleDelete(row){
               console.log(row)
               this.$confirm("您确定删除此条数据吗?", "提示", {
                    cancelButtonText: "取消",
                    confirmButtonText: "确定",
                    type: "warning"
                })
                    .then(() => {
                        this.getData(`/quota/del?id=${row.id}`,"get").then(res=>{
                            if(res.data.code==200){
                                this.$message({type:"success",message:"删除成功",center: true})
                                this.getList()  
                            }
                        })
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消删除",
                            center: true
                        });
                    });
            },
            addOrUpdate(){
                console.log(this.ruleForm)
                this.$refs["add_or_edit_Form"].validate(valid => {
                    if (valid) {
                        this.loading = true;
                        if(this.dialogStatus=="create"){
                            this.getData("/quota/add","post",this.ruleForm).then(res=>{
                                console.log("添加",res)
                                this.loading = false;
                                if(res.data.code==200){
                                    this.dialogFormVisible = false;
                                    this.$message({
                                        message: "添加成功",
                                        type: "success",
                                        center: true
                                    });
                                    this.getList()
                                }
                            }).catch(() => {
                                this.loading = false;
                            });
                        }else{
                            this.getData("/quota/update","post",this.ruleForm).then(res=>{
                                console.log("更新",res)
                                this.loading = false;
                                if(res.data.code==200){
                                    this.dialogFormVisible = false;
                                    this.$message({
                                        message: "编辑成功",
                                        type: "success",
                                        center: true
                                    });
                                    this.getList()
                                }
                            }).catch(() => {
                                this.loading = false;
                            });
                        }
                    }
                })
            },
            getList(){
               this.getData("/quota/pageList","get").then(res=>{
                    console.log("赛事名额：：：",res)
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