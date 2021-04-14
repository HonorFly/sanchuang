<template>
  <div class="certificate">
    <div class="head">
      <h2>我的证书</h2>
    </div>
    <el-table :data="tableData" @row-click="handleClick">
      <el-table-column
          prop="matchType"
          label="类型"
          width="180">
      </el-table-column>
      <el-table-column
          prop="prize"
          label="奖项"
          width="180">
      </el-table-column>
      <el-table-column
          prop="certificateNumber"
          label="证书编号"
          width="280">
      </el-table-column>
      <el-table-column
          prop="address"
          label="下载证书">
        <template slot-scope="scope">
          <a :href="`${scope.fileUrl}`" target="_blank" :download="`${scope.fileUrl}`">{{scope.fileName}}</a>
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
  mounted() {
    this.getData("/matchCertificate/list", "get").then(res => {
      if (res.data.code == 200) {
        res.data.data.forEach((item) =>{
              item.address = {"fileUrl":item.fileUrl,"fileName":item.fileName}
        } )
        this.tableData = res.data.data
        console.log(this.tableData)
      }
    });
  },
  methods: {
    handleClick(row, column, event) {
      console.log(row, column, event)
    },
    handleDownload(row) {
      console.log(row)
    }
  },
}
</script>

<style lang="scss" scoped>
.el-table {
  width: 100%;
  padding: 0 20px;

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