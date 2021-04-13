<template>
    <div class="ucenter"> 
         <div class="block m_t clearfix" >
            <div class="ucenter-main">
                <router-view></router-view>
            </div>
            <div class="ucenter-sidebar">
                <AdminSideBar></AdminSideBar>
            </div>
        </div>
    </div>
</template>

<script>
    import AdminSideBar from '@/components/AdminSideBar.vue';
    export default {
        components: {
            AdminSideBar,
        },
    }
</script>