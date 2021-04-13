<template>
    <div class="areainfo">
        <div class="block clearfix m_t" style="z-index: 100;">
            <div class="news-main">
                <table class="table-list">
                    <caption>省赛信息</caption>
                    <thead>
                        <tr>
                            <th>赛区</th>
                            <th>主办学校</th>
                            <th>联系人</th>
                            <th>邮箱</th>
                            <th>查看学校</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in infos" :key="item.id">
                            <td>{{item.matchArea}}</td>
                            <td>{{item.hostSchool}}</td>
                            <td>{{item.contact}}</td>
                            <td>{{item.email}}</td>
                            <td>
                                <router-link :to="`/university?id=${item.id}`">查看备案学校</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="news-sidebar">
                <ul class="sidenav">
                    <li class="active">
                        <router-link to="/areainfo">省赛联系方式</router-link>
                    </li>
                    <li>
                        <router-link to="/university">已备案学校</router-link>
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
               infos: []
            }
        },
        mounted () {
            //获取省赛信息
            this.getData("/matchAreaMessage/all", "get").then(res=>{
                console.log("获取省赛信息：", res);
                if(res.data.code===200){
                    this.infos = res.data.data;
                }
            });
        },
    }
</script>

<style lang="scss" scoped>
.news-main ul {
    margin-left: 20px;
}

.news-main ul li {
    display: inline-block;
    margin: 20px;
}


.news-main ul li a img {
    width: 160px;
    height: 200px;
}
</style>