<template>
    <div class="content">
        <div class="swiper">
            <el-carousel trigger="click" height="554px">
                <el-carousel-item v-for="item in banners" :key="item">
                    <h3 class="small">
                        <img :src="item" alt="">
                    </h3>
                </el-carousel-item>
            </el-carousel>
        </div>
         <div class="index-news-box clearfix">
            <div class="block clearfix">
                <div class="index-news-list">
                    <h3>
                        <i class="fa fa-book"></i>
                        <router-link to="/news">新闻</router-link>
                    </h3>
                    <ul class="news">
                        <li v-for="item in news" :key="item.id">
                            <router-link :to="`/newsDetail/1/${item.id}`">{{item.title}}</router-link>
                        </li>
                    </ul>
                </div>

                <div class="index-news-list">
                    <h3>
                        <i class="fa fa-book"></i>
                        <router-link to="/notice">公告</router-link>
                    </h3>
                    <ul class="notice">
                         <li v-for="item in notices" :key="item.id">
                            <router-link :to="`/newsDetail/2/${item.id}`">{{item.title}}</router-link>
                        </li>
                    </ul>
                </div>

                <div class="index-news-list">
                    <h3>
                        <i class="fa fa-download"></i>
                        <router-link to="/download">资料下载</router-link>
                    </h3>
                    <ul class="download">
                         <li v-for="item in downloads" :key="item.id">
                            <a :href="`/newsDetail/${item.id}`" :download="`${item.fileUrl}`">{{item.title}}</a>
                        </li>
                        <!-- <li>
                            <a href="http://www.3chuang.net/file/88" target="_blank">校级赛计划书</a>
                        </li>-->
                    </ul>
                </div>

                <div class="index-news-list">
                    <h3>
                        <i class="fa fa-book"></i>
                        往届新闻
                    </h3>
                    <ul class="overNews">
                         <li v-for="item in overNews" :key="item.id">
                            <router-link :to="`/newsDetail/1/${item.id}`">{{item.title}}</router-link>
                        </li>
                        <!-- <li>
                            <a href="http://www.3chuang.net/news/209">第十届全国大学生电子商务“创新、创意及创业”挑战赛全国总决赛最终获奖名单...</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>

        <div class="banner">
            <img src="/assets/images/3chuang_banner.png" alt="">
        </div>

         <div class="index-about-us">
            <div class="block clearfix">
                <div class="f_l" style="width:437px;">
                    <img src="/assets/images/about_us.png">
                </div>
                <div class="f_l index-about-us-intro">
                    <h2>大赛简介</h2>
                    <div>
                        <p>全国大学生电子商务“创新、创意及创业”挑战赛(以下简称“三创赛”)是激发大学生 兴趣与潜能，培养大学生创新意识、创意思维、创业能力以及团队协同实战精神的学科性竞赛。“三创赛”为高等学校落实教育部、财政部《关于实施高等学校本科教学质量与教学改革工程的意见》、开展创新教育和实践教学改革、加强产学研之间联系起到积极示范作用。 </p>
                        <p>
                            从2009年至2019年，“三创赛”总决赛在杭州、西安、成都、武汉、太原等地举办，参赛团队从第一届的1500多支、第二届的3800多支，到第三届的4900多支，第四届的6300多支，第五届的14000多支，第六届的16000多支团队，第七届的20000多支，第八届的30000多支，第九届报名参赛团队达60000多支，第十届报名参赛团队达70000多支，影响力越来越强，规模越来越大。
                        </p>
                    </div>
                    <div>
                        <router-link class="btn" to="/introduce">查看详情</router-link>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="timeline-box">
            <div class="block">
                <h2>大赛时间表</h2>

                <div class="timeline">
                    <ul>
                        <li>
                            <h3>报名注册</h3>
                            <p>时间：2020年10月15日-2021年3月15日</p>
                            <p>各高校的参赛团队须在规定时间内进行报名注册，并按要求上传相关信息。校赛开始之日后注册信息不再修改</p>
                        </li>
                        <li>
                            <h3>校级选拔赛</h3>
                            <p>时间：2021年3月15日-2021年4月30日

                            </p>
                            <p>各注册高校在规定时间内组织进行校级选拔赛。</p>
                        </li>

                        <li>
                            <h3>省级选拔赛</h3>
                            <p>时间：2021年5月1日-2021年6月20日</p>
                            <p>
                                由各省（市、自治区）省级赛承办单位在规定时间内组织进行。
                            </p>
                        </li>

                        <li>
                            <h3>全国总决赛

                            </h3>
                            <p>时间：2021年7月20日-22日</p>
                            <p>地点：云南省昆明市云南工商学院</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="partner">
            <div class="block">
                    <div class="partnerbox">
                        <h3>赞助单位</h3>
                        <div>
                            <a href="http://m.sangbosichou.com/" target="_blank">旬阳县桑博蚕丝品有限公司</a>

                            <a href="http://www.zxwsjs.com/mobile/goods.php?u=146&amp;id=297" target="_blank">琪牌柑橘</a>

                        </div>
                    </div>
            </div>
        </div>

        <div class="banner">
            <img src="/assets/images/bottom_banner.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                banners:[
                    "/assets/images/login_wrap_bg.jpg"
                ],
                news:[],
                notices:[],
                downloads:[],
                overNews:[]
            }
        },
        mounted () {
            this.getData("/banner/all","get").then(res=>{
                console.log("hhh::",res)
            })
             //获取赛事新闻
            this.getData("/matchNews/all", "get").then(res=>{
                console.log("获取赛事新闻：", res);
                if(res.data.code===200){
                    this.news = res.data.data.splice(0,5);
                }
            })
            //获取往届赛事新闻
            this.getData("/matchNews/all", "get", "type=2").then(res=>{
                console.log("获取往届赛事新闻：", res);
                if(res.data.code===200){
                    this.overNews = res.data.data.splice(0,5);
                }
            })
            //获取赛事公告
            this.getData("/messageNotify/pageList", "get").then(res=>{
                console.log("获取赛事公告：", res);
                if(res.data.code===200){
                    this.notices = res.data.data.splice(0,5);
                }
            })
            //获取资料列表
            this.getData("/matchData/all", "get").then(res=>{
                console.log("获取资料列表：", res);
                if(res.data.code===200){
                    this.downloads = res.data.data.splice(0,5);
                }
            })
        },
    }
</script>

<style lang="scss" scoped>
    .swiper{
        width: 1200px;
        margin: 0 auto;
        margin-top: 10px;
    }
  .index-news-box {
    background: #E3E3E3;
    .index-news-list {
        width: 45%;
        height: 150px;
        float: left;
        padding: 15px;
        margin: 10px;
        background: #fff;
        border-radius: 5px;
        h3{
            font-size: 16px;
        }
        li{
            height: 1.8em;
            line-height: 1.8em;
            list-style-type: circle;
            margin-left: 15px;
        }
    }
  }
  .banner {
    width: 1200px;
    margin: 0 auto;
    padding: 0;
    img {
        position: relative;
        left:-360px;
        vertical-align:middle;
    } 
  }
  .index-about-us {
    background: #3d3d3f;
    height: 400px;
  }
.index-about-us-intro {
    width: 700px;
    margin-left: 25px;
    margin-top: 50px;
    color: #fff;
    h2 {
        margin-bottom: 5px;
    }
    p {
        line-height: 2em;
        text-indent: 2em;
        margin: 10px 0;
    } 
}
.timeline-box {
    height: 505px;
    background: url(/assets/images/timeline_box_bg.png) repeat-x;
    padding-top: 40px;
}
.timeline-box h2 {
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    font-size: 30px;
}
.timeline {
    background: url(/assets/images/timeline_bg.png) no-repeat;
    height: 390px;
    padding-top: 150px;
}
.timeline ul li {
    display: inline-block;
    width: 280px;
    padding: 20px;
    margin-right: 20px;
    color: #b6b6b6;
    vertical-align:top;
}
.timeline ul li:last-child {
    margin: 0;
}
.timeline ul li h3 {
    color: #fff;
    font-size: 22px;
    text-align: center;
    margin: 10px;
}
.timeline ul li p {
    
    margin: 10px;
}
.partner {
    background: #616161;
    margin-top: -15px;
    padding: 25px 0;
}
.partnerbox div {
    margin: 5px 0 15px 0;
}
.partnerbox h3 {
    color: #fff;
    font-size: 24px;
    margin: 10px;
}

.partnerbox a:link,.partnerbox a:visited {
    color: #b6b6b6;
    font-size: 18px;
    margin: 10px;
}
</style>