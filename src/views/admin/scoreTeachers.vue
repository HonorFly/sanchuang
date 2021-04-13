<template>
  <div class="quota">
    <div class="head">
      <h2>
        评分老师
        <div class="f_r" @click="handleAdd" style="font-size:16px;margin-right:20px;cursor: pointer;">
          <i class="el-icon-edit-outline"></i>
          添加评分老师
        </div>
      </h2>
    </div>
    <el-table :data="tableData">
      <el-table-column
          prop="teacherName"
          label="老师名称"
          width="168">
      </el-table-column>
      <el-table-column
          prop="topicName"
          label="赛事主题"
          width="318">
      </el-table-column>
      <el-table-column
          prop="email"
          label="邮箱"
          width="218">
      </el-table-column>
      <el-table-column
          label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
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
            label="赛事主题"
            prop="topicId"
        >
          <el-select v-model="ruleForm.topicId" placeholder="请选择赛事主题">
            <el-option
                v-for="item in topics"
                :key="item.id"
                :label="item.topicName"
                :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
            label="教师名称"
            prop="teacherName"
        >
          <el-input v-model="ruleForm.teacherName" placeholder="请输入教师名称">
          </el-input>
        </el-form-item>
        <el-form-item
            label="邮箱"
            prop="email"
        >
          <el-input v-model="ruleForm.email" placeholder="请输入邮箱">
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
        update: "编辑老师",
        create: "添加老师"
      },
      dialogStatus: "create",
      dialogFormVisible: false,
      ruleForm: {
        type: "",
        title: "",
        content: ""
      },
      loading: false,
      rules: {},
      topics: [],
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    handleAdd() {
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.ruleForm = {
        title: "",
        content: ""
      };
      this.getData("/matchTopic/all", "get").then(res => {
        console.log("获取赛事主题：", res)
        if (res.data.code == 200) {
          this.topics = res.data.data;
        }
      })
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
    handleDelete(row) {
      console.log(row)
      this.$confirm("您确定删除此条数据吗?", "提示", {
        cancelButtonText: "取消",
        confirmButtonText: "确定",
        type: "warning"
      })
          .then(() => {
            this.getData(`/teacher/del?id=${row.id}`,"get").then(res=>{
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
    getList() {
      this.getData("/teacher/list", "get").then(res => {
        console.log("评分老师列表", res)
        if (res.data.code == 200) {
          this.tableData = res.data.data.list
        }
      });
    },
    addOrUpdate() {
      console.log(this.ruleForm)
      this.$refs["add_or_edit_Form"].validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.dialogStatus == "create") {
            this.getData("/teacher/add", "post", this.ruleForm).then(res => {
              console.log("添加教师成功", res.data)
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
          }
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.el-table {
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;

  /deep/ .el-table__header-wrapper {
    .el-table__header {
      thead {
        tr {
          th {
            background-color: #ddd;
            color: #2c3e50;
            font-weight: 800;
          }
        }
      }

    }
  }

  /deep/ .el-table__body-wrapper {
    .el-table__body {
      tbody {
        tr {
          &:hover {
            td {
              background-color: #c2dbf3;
            }
          }
        }
      }
    }
  }
}
</style>