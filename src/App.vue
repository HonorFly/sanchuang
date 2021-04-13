<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,Footer
  },
}
</script>

<style>
#app {
  /* font-size:14px;
  font-family: Arial,Helvetica,Microsoft Yahei,Hiragino Sans GB,sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f6f6f6;
}
a:link, a:visited{color: #333;}
a:hover{color: #0d59a7;}
.block{
    width: 1200px;
    margin:0 auto;
    position: relative;
}
.f_l {float: left;}
.f_r {float: right;}
.m_t {margin-top:10px;}
.clearfix:after {
    content: '\0020';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.login-wrap {
    background: #fff url(/assets/images/login_wrap_bg.jpg) no-repeat center top;
    padding: 40px 0;
}

.login-box-outer {
    float: right;
    padding: 8px;
    background: rgba(255, 255, 255, .6);
}
.login-box {
    width: 330px;
    min-height: 334px;
    padding-bottom: 20px;
    background: #fff;
    
}
.login-box .head {
    width: 310px;
    padding-left: 20px;
    height: 46px;
    border-bottom: 1px solid #e7e7e7;
    position: relative;
}
.login-box .head h3 {
    color: #0d59a7;
    font-size: 14px;
    width: 60px;
    height: 45px;
    line-height: 46px;
    text-align: center;
    margin: 0 10px;
    border-bottom: 1px solid #0d59a7;
}
.login-body {
    padding: 5px 30px 0;
}
.register {
    background:#fff;
    margin-top:10px;
}
.reg_head {
    border-bottom: 2px solid #ededed;
    overflow: hidden;
}
.reg_head h2 {
    margin: 20px 0;
    padding-left: 20px;
    border-left: 5px solid #0d59a7;
}
.reg_form {
     width: 88%;
    float: left;
    padding: 20px;
    padding: 25px 0 50px 35px;
}

.article_detail {
    font-size: 16px;
    margin: 20px 0;
    line-height: 2em;
}

.article_detail p {
    margin: 10px 0;
     text-indent: 2em;
}
.btn, .btn:link, .btn:visited {
    font-weight: 500;
    border-radius: 2px;
    outline: 0!important;
    display: inline-block;
    padding: 10px 36px;
    font-size: 18px;
    line-height: 1.3;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    background: #0d59a7;
    color: #fff;
}
.btn:hover {
    background: #09427a;
    color: #fff;
}

.article-main {
    width: 850px;
    float: left;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
    padding: 30px;
}
.article-header {
    border-top: 2px solid #e6e6e6; 
    border-bottom: 2px solid #e6e6e6;
    padding: 3px 0 3px 20px;
}
.article-header h2 {
    font:30px/44px arial,Helvetica,Microsoft Yahei,Hiragino Sans GB,sans-serif;
    letter-spacing: 1px;
    padding: 5px 0 0px;
}
.article-header .article-header_tag  {
    margin-bottom: 3px;

}
.article-header span.date {
    color: #788087;
}
.article-main .article-header ul {
    margin-bottom: 10px;
    height: 20px;
}
.article-main .article-header ul li {
    float: left;
    margin-right: 20px;
    font-size: 14px;
    margin-bottom: 10px;
    color:#788087;
}

.news-sidebar {
    width: 340px;
    float: right;
}
.news-sidebar .sidenav li a:link, .news-sidebar .sidenav li a:visited {
    display: block;
    padding-left: 40px;
    padding-right: 20px;
    margin-top: 2px;
    background: #fff;
    height: 40px;
    line-height: 40px;
    /* width: 270px; */
    overflow: hidden;
    border-left: 5px solid #fff;
    border-right: 5px solid #fff;
}
.news-sidebar .sidenav li a:hover {
    background: #eee;
    color: #3e3e3e;
    border-left: 5px solid #0d59a7;
    border-right: 5px solid #0d59a7;
}
.news-sidebar .sidenav li.active a, .news-sidebar .sidenav li.active a:hover {
    border-left: 5px solid #0d59a7;
    border-right: 5px solid #0d59a7;
}
.news-sidebar h3 {
    font-size: 16px;
    border-top: 3px solid #0d59a7;
    background: #fff;
    padding: 10px;
}
.news-sidebar .hotnews {
    padding: 0 10px 10px;
    background: #fff;
}

.news-sidebar .hotnews li {
    margin-bottom: 5px;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
}

.news-main {
    width: 850px;
    float: left;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
}
.news-main .list-cate {
    
    border-bottom: 2px solid #f4f4f4;
}
.news-main .list-cate h2 {
    margin: 20px 0;
    padding-left: 20px;
    border-left: 5px solid #0d59a7;
}
.news-main dl {
    border-bottom: 1px solid #f4f4f4;
    padding: 20px;
}
.news-main dl dd h2 {
    font-size: 18px;
    color: #2c3033;
    font-weight: bold;
    margin-bottom: 12px;
    line-height: 28px;
}
.news-main dl dd .summary {
    font-size: 14px;
    color: #8e959a;
    line-height: 24px;
    -ms-word-break: break-all;
    word-break: break-all;
    white-space: normal !important;
}
.news-main dl dd ul li {
    float: left;
    margin-right: 20px;
    font-size: 14px;
    margin-top: 10px;
    color:#ccc;
}
.table-list {
    margin: 20px;
    width: 95%;
}
.table-list caption{
    font-size: 18px;
    text-align: center;
    padding: 5px;
}
/* Border styles */
.table-list thead, .table-list tr {
border-top-width: 1px;
border-top-style: solid;
border-top-color: rgb(211, 202, 221);
}
.table-list {
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: rgb(211, 202, 221);
}

/* Padding and font style */
.table-list td, .table-list th {
padding: 5px 10px;
/* font-size: 16px; */
font-family: Verdana;
/* color: rgb(95, 74, 121); */
}

/* Alternating background colors */
.table-list tr:nth-child(even) {
background: #c2dbf3;
}
.table-list tr:nth-child(odd) {
background: #FFF
}

/* 用户中心 */
.ucenter-main {
    float: right;
    width: 950px;
    background: #fff;
}
.ucenter-sidebar {
    float: left;
    width: 240px;
    background: #fff;
}
.ucenter-sidebar .sidenav li a {
    display: block;
    position: relative;
    padding: 0 0 0 54px;
    height: 48px;
    line-height: 48px;
    transition: background-color .3s ease;
}
.ucenter-sidebar .sidenav li a span.arr {
    position: absolute;
    right: 25px;
    top: 0;
    color: #b5b9bc;
}

.ucenter-sidebar .sidenav li:hover a {
    background: #eee;
    color: #0d59a7;
}
.ucenter-sidebar .sidenav li:hover a span.arr {
    color: #0d59a7;
}
.ucenter-sidebar .sidenav li.active a {
    background: #0d59a7;
    color: #fff;
}
.ucenter-sidebar .sidenav li.active a span.arr {
    color: #fff;
}
.ucenter-sidebar .teaminfo {
    text-align: center;
    padding: 20px;
    margin: 0 20px 20px;
    border-bottom: 2px solid #ccc;
}
.ucenter-main .head {
    border-bottom: 2px solid #f4f4f4;
}
.ucenter-main .head h2 {
    margin: 20px 0;
    padding-left: 20px;
    border-left: 5px solid #0d59a7;
    font-weight: 700;
}
.ucenter-main .head h2 a {
    font-weight: 400;
    padding-right: 10px;
    font-size: 14px;
}

.ucenter-main .table-list {
    margin: 20px;
    width: 95%;
}

/* Border styles */
.ucenter-main  .table-list thead, .table-list tr {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: rgb(211, 202, 221);
    background: #fff;
}
.ucenter-main  .table-list {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(211, 202, 221);
}

/* Padding and font style */
.ucenter-main .table-list td, .ucenter-main .table-list th {
    padding: 10px 10px;
    /* font-size: 16px; */
    font-family: Verdana;
    background: #fff;
    /* color: rgb(95, 74, 121); */
}
.ucenter-main .table-list th {
    padding: 10px 10px;
    /* font-size: 16px; */
    font-family: Verdana;
    background: #ddd;
    font-weight: 800;
    /* color: rgb(95, 74, 121); */
}

/* Alternating background colors */
.ucenter-main .table-list tr:hover td {
    background: #c2dbf3;
}

.ucenter-main .form input, .ucenter-main .form select {
    display: block;
    width: 300px;
    height: 36px;
    border: 1px solid #d9dde1;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 12px;
    color: #4d555d;
    transition: all .3s linear;
    -moz-transition: all .3s linear;
    -webkit-transition: all .3s linear;
    -o-transition: all .3s linear;
    background: #fff;
    border-radius: 2px;
}
.ucenter-main .form {
    width: 48%;
    float: left;
    padding: 20px;

}
.ucenter-main .form .form-group {
    margin-top: 24px;
    margin-left: 30px;
    position: relative;
}
.ucenter-main .form label {
    width: 80px;
    float: left;
    font-weight: 700;
    height: 36px;
    line-height: 36px;
}
.ucenter-main .form .has-error input {
    border-color: #f01414;
}
.ucenter-main .form .form-group .error {
    position: absolute;
    top: 36px;
    left: 80px;
    right: 0;
    line-height: 24px;
    height: 24px;
    color: #f01414;
    font-size: 12px;
}
.ucenter-main .form .form-group button {
    width: 300px;
    border: 0;
    background: #0d59a7;
    color: #fff;
    height: 40px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    margin: 20px 0;
    outline:none;
}

.ucenter-main .notice {
    width: 48%;
    float: left;
}

.ucenter-main .form input.checkbox {
    width: 20px;
    height: 36px;

}

.ucenter-main .form label.upload-label {
    display: inline-block;
    border: 1px solid #ccc;
    border-left:none;
    padding: 6px 12px;
    width: 90px;
    text-align: center;
    float: none;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(90, 90, 90, 0.1);
    cursor: pointer;
    height: auto;
    line-height: 22px;
    font-size: 14px;
    color: #000;
}
.ucenter-main .form label.upload-label:hover {
    background: #eee;
} 
</style>
