<template>
    <div class="university">
        <div class="block clearfix m_t" style="z-index: 100;">
            <div class="news-main">
                <table class="table-list">
                    <caption>已备案学校</caption>
                    <thead>
                    <tr>
                        <th>学校</th>
                        <th>所属赛区</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in schools" :key="item.id">
                            <td>{{item.schoolName}}</td>
                            <td>{{item.areaName}}</td>
                        </tr>
                    </tbody>
                </table>

                <!-- <div class="paging">
                    <el-pagination
                        background
                        prev-text="上一页"
                        next-text="下一页"
                        :total="count">
                    </el-pagination>
                </div> -->
            </div>

            <div class="news-sidebar">
                <ul class="sidenav">
                    <li>
                        <router-link to="/areainfo">省赛联系方式</router-link>
                    </li>
                    <li class="active">
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
                count: 0,
                schools:[]
            }
        },
        mounted () {
            this.getList()
        },
        methods: {
            getList() {
                this.getData("/matchSchool/all?id="+this.$route.query.id,"get").then(res=>{
                    console.log(res)
                    this.count = res.data.data.length
                    this.schools = res.data.data
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>