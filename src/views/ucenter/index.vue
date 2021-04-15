<template>
    <div class="ucenter"> 
         <div class="block m_t clearfix" >
            <div class="ucenter-main">
                <router-view></router-view>
            </div>
            <div class="ucenter-sidebar">
                <sideBar></sideBar>
            </div>
        </div>
    </div>
</template>

<script>
import sideBar from '@/components/SideBar.vue';
    export default {
        components: {
            sideBar,
        },
    }
</script>