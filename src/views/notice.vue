<template>
    <div class="notice">
        <div class="block m_t clearfix" style="z-index: 100;">
            <div class="news-main">
                <div class="list-cate">
                    <h2> 公告  列表</h2>
                </div>
                <dl class="clearfix csdn-tracking-statistics" v-for="item in notices" :key="item.id">
                    <dd>
                        <h2>
                            <router-link :to="`/newsDetails?id=${item.id}`">
                            {{item.title}}</router-link>
                        </h2>
                        <div class="summary">
                            {{item.content}}
                        </div>
                        <ul>
                            <li class="category">
                                <i class="fa fa-folder"></i>
                                <a href="http://www.3chuang.net/news/a0" target="_blank">总赛区</a></li>
                            <li class="time">
                                <i class="fa fa-calendar"></i>
                                {{item.createTime&&item.createTime.substring(0,10)}}
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>

            <div class="news-sidebar">
                <ul class="sidenav">
                    <li>
                        <router-link to="/news">所有新闻</router-link>
                    </li>
                    <li class="active">
                        <router-link to="/notice">所有公告</router-link>
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
               notices: []
            }
        },
        mounted () {
            //获取赛事公告
            this.getData("/messageNotify/pageList", "get").then(res=>{
                console.log("获取赛事公告：", res);
                if(res.data.code===200){
                    this.notices = res.data.data;
                }
            });
        },
    }
</script>

<style lang="scss" scoped>

</style>