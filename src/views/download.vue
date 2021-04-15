<template>
  <div class="download">
    <div class="block m_t clearfix" style="z-index: 100;">
      <div class="news-main">
        <div class="list-cate">
          <h2>资料下载</h2>
        </div>
        <dl class="clearfix csdn-tracking-statistics" v-for="item in downloads" :key="item.id">
          <dd>
            <h2>
              <a :href="`${item.fileUrl}`" target="_blank" :download="`http://106.12.177.23:8081${item.fileUrl}`">{{ item.fileName }}</a>
            </h2>
            <div class="summary"></div>
          </dd>
        </dl>
      </div>

      <div class="news-sidebar">
        <ul class="sidenav">
          <li class="active">
            <router-link to="/download">文件下载</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      downloads: []
    }
  },
  mounted() {
    //获取下载资料
    this.getData("/matchData/all", "get").then(res => {
      console.log("获取下载资料：", res);
      if (res.data.code === 200) {

        // eslint-disable-next-line no-unused-vars
        this.downloads = res.data.data.forEach((item) => {
          console.log(item)
          item.fileUrl = "http://106.12.177.23:8081" + item.fileUrl
        });
        this.downloads = res.data.data
        console.log(this.downloads)
      }
    });
  },
}
</script>

<style lang="scss" scoped>

</style>