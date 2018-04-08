<template>
    <div class="title clearfix">
        <h2>热门银行</h2>
        <a rel="external" href="javascript:;">查看更多</a>
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
.discover-page .module .title{
    height: 1.9rem;
    line-height: 1.9rem;
    padding: 0 0.6rem;
    font-size: 0.6rem;
    color: #4a4a4a;
    border-bottom: 1px solid #d8d8d8;
}
.discover-page .module .title h2{
    float: left;
    width: 75%;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 0.55rem;
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.35rem;
    border-left: 0.2rem solid #f7c963;
}
.discover-page .module .title a{
    float: right;
    color: #4990e2;
}
</style>