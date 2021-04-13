<template>
    <div id="footer">
        <div class="block">
                <div class="links">
                    <h3>友情链接:</h3>
                    <a href="https://www.nefu.edu.cn/" class="first">东北林业大学</a>
                </div>

                <div class="footer-nav">
                    <router-link to="/" class="first">网站首页</router-link>
                    <router-link to="/introduce">大赛简介</router-link>
                    <router-link to="/rule" >竞赛规则</router-link>
                    <router-link to="/contact">联系我们</router-link>
                    <router-link to="/download" class="last">资料下载</router-link>
                </div>

                <div class="contact">
                    <p>联系地址：陕西省西安市雁塔区雁塔西路74号陕西省西安市雁塔西路74号西安交通大学经济与金融学院 （710061）</p>
                    <p>联系邮箱：3chuang@xjtu.edu.cn  &nbsp;&nbsp; 联系电话：029-82656919-801
                        &nbsp;&nbsp; <a target="_blank" href="http://www.beian.miit.gov.cn/">陕ICP备16018382号</a>
                    </p>
                </div>
            </div>
            <div class="footer_copyright">
                Copyright @ 西安福生网络技术有限公司 2010 - 2019 All Rights Reserved
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #footer{
        box-shadow: 0 0 20px 1px rgba(0,0,0,0.2);
        background: #000 url(/assets/images/footer-bg.png) repeat;
        color: #b7b7b7;
        .block{
            width: 1200px;
            margin: 0 auto;
            position: relative;
        }
        .links {
            margin-bottom: 10px;
            padding: 20px 0 10px;
            border-bottom: 1px solid #e0e0e0; 
            clear: both;
            overflow: hidden;
            h3 {
                float: left;
                display: inline-block;
                height: 14px;
                line-height: 14px;
                padding: 0 10px;
                font-size: 14px;
                color: #b7b7b7;
                outline: 0;
            }
            a {
                float: left;
                display: inline-block;
                height: 14px;
                line-height: 14px;
                padding: 0 10px;
                border-left: 2px solid #e0e0e0;
                /*border-right: 1px solid #e0e0e0; */
                font-size: 14px;
                color: #b7b7b7;
                outline: 0;
                &.first {
                border-left: none;
                padding-left: 0;
            }
            }
        }

        .footer_copyright {
            background: #1d1d1d;
            text-align: center;
            color: #707070;
            height: 60px;
            line-height: 60px;
        }
        .footer-nav ,.contact{
            text-align: center;
            padding: 5px 0;
            clear: both;
            overflow: hidden;
        }
        .footer-nav a {
            display: inline-block;
            height: 14px;
            line-height: 14px;
            padding: 0 10px;
            border-left: 2px solid #e0e0e0;
            font-size: 14px;
            color: #b7b7b7;
            outline: 0;
        }
        .footer-nav a.first {
            border-left: none;
            padding-left: 0;
        }
        .footer-nav a:hover{
            color: #0d59a7;
        }
        .contact a:link, .contact a:visited {
            color: #b7b7b7;
        }
    }
</style>