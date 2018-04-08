<template>
    <div class="main-wrap">
        <router-view class="app-top-content"></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // spanLeft: 1,//默认是300px
        };
    }
};
</script>
<style>
    .app-top-content{
        width: 100%;
        height: 100%;
        position: relative;
    }
    
</style>