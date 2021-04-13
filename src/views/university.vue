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
                    <tbody></tbody>
                </table>

                <div class="paging">
                <!-- <li class="disabled"><span>&laquo;</span></li> -->
            <span class="on">1</span>
   <a href="http://www.3chuang.net/beian/university?page=2">2</a>                                                                             <a href="http://www.3chuang.net/beian/university?page=3">3</a>                 <a href="http://www.3chuang.net/beian/university?page=4">4</a>                 <a href="http://www.3chuang.net/beian/university?page=5">5</a>
   <a href="http://www.3chuang.net/beian/university?page=6">6</a>
   <a href="http://www.3chuang.net/beian/university?page=7">7</a>
   <a href="http://www.3chuang.net/beian/university?page=8">8</a>
   <span>...</span>
    <a href="http://www.3chuang.net/beian/university?page=36">36</a>
   <a href="http://www.3chuang.net/beian/university?page=37">37</a>
    <a href="http://www.3chuang.net/beian/university?page=2" rel="next">下一页</a>
                </div>
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
        
    }
</script>

<style lang="scss" scoped>

</style>