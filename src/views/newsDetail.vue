<template>
    <div class="newsDetail">
        <div class="block clearfix m_t" style="z-index: 100;">
            <div class="article-main">
                <div class="article-header">
                    <h2>{{title}}</h2>
                    <div class="category">
                        <span style="margin-right:16px">
                            <i class="el-icon-folder" style="margin-right:6px"></i>总赛区</span>
                        <span>
                            <i class="el-icon-date" style="margin-right:2px"></i>
                            {{createTime&&createTime.substring(0,10)}}
                        </span>
                    </div>
                </div>
                <div class="article_detail" style="padding:10px">{{content}}</div>
            </div>

            <div class="news-sidebar">
                <h3>最新新闻</h3>
                <ul class="hotnews">
                    <li v-for="item in news" :key="item.id">
                        <router-link :to="`/newsDetail/1/${item.id}`">{{item.title}}</router-link>
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
                title: '',
                content:'',
                createTime:'',
                news:[]
            }
        },
        mounted () {
            //获取赛事新闻
            console.log(111)
            this.getData(`/matchNews/selectOne?type=${this.$route.params.type}&id=${this.$route.params.id}`, "get").then(res=>{
                console.log("获取赛事新闻：", res);
                if(res.data.code===200){
                    this.title = res.data.data.title;
                    this.content = res.data.data.content;
                    this.createTime = res.data.data.createTime;
                }
            });
            this.getData("/matchNews/all", "get").then(res=>{
                console.log("获取赛事新闻：", res);
                if(res.data.code===200){
                    this.news = res.data.data.splice(0,10);
                }
            })
        },
        watch:{
            $route(){
                this.getData(`/matchNews/selectOne?type=${this.$route.params.type}&id=${this.$route.params.id}`, "get").then(res=>{
                    console.log("获取赛事新闻：", res);
                    if(res.data.code===200){
                        this.title = res.data.data.title;
                        this.content = res.data.data.content;
                        this.createTime = res.data.data.createTime;
                    }
                });
                this.getData("/matchNews/all", "get").then(res=>{
                    console.log("获取赛事新闻：", res);
                    if(res.data.code===200){
                        this.news = res.data.data.splice(0,10);
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>