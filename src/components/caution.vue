<template>
    <div class="caution">
        <img :src="icon" alt="">
        <span>信用卡申请不需要任何费用，核批情况以银行为准</span>
    </div>
</template>
<script>
const icon = require('@assets/images/icon_04.png');

export default {
    data() {
        return {
            icon
        };
    }
};
</script>
<style>
    /**/
</style>