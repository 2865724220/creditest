<template>
    <div>
        <mt-header class="header" fixed title="办卡">
            <div class="location" slot="right" v-show="IS_HOME">
                <a rel="external" href="javascript:;" @click="goPage('/cityLocation')">
                    <img :src="img" alt="">
                    <span>上海</span>
                </a>
            </div>
        </mt-header>
        <!-- main start -->
        <div class="wrapper discover-page">
            <x-caution/>
            <mt-swipe :auto="4000" class="swiper-wrap">
                <mt-swipe-item v-for="item in banners">
                    <img :src="item" class="banner-img">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="router-wrap">
            <router-view></router-view>
        </div>
        <!-- main end -->
    </div>
</template>
<script>
const img = require('@assets/images/icon_11.png');
const banners = [
    require('@assets/images/banner.png'),
    require('@assets/images/banner_02.png'),
    require('@assets/images/banner_03.png')
];

import XCaution from '@components/caution';

export default {
    components: {
        XCaution
    },
    data() {
        return {
            img,
            banners
        };
    },
    computed: {
        IS_HOME: function () {
            return this.$router.currentRoute.path === '/';
        }
    },
    methods: {
        goPage(path) {
            console.log(this.$router);
            this.$router.push(path); 
        }
    },
    updated() {
        // this.activeName(this.$router.currentRoute.path)
    },
    mounted() {
        console.log(this.$router.currentRoute.path, this.$router);
    }
};
</script>
<style>
    .swiper-wrap{
        height: 8.5rem;
    }
    .banner-img{
        width: 100%;
        height: 100%;
    }
    .router-wrap{
        padding: 1.1rem 0.6rem 1rem;
    }
</style>