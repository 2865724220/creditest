<template>
	<div>
		<mt-header class="header" fixed title="代还服务">
            <!-- <div class="location" slot="right" v-show="IS_HOME">
                <a rel="external" href="city-search.html">
                    <img :src="img" alt="">
                    <span>上海</span>
                </a>
            </div> -->
        </mt-header>
		<div class="has-head">
			<img :src="img.insteadImg" class="instead-default" alt="">
			<p class="instead-default-text">即将上线，敬请期待~</p>
		</div>
	</div>
</template>
<script>
const img = {
    insteadImg: require('@assets/images/icon_15.png')
    
};
export default {
    data() {
        return {
        	img
        };
    }
};
</script>
<style lang="less">
  @import '../../assets/less/variable.less';
  .instead-default{
  	display:block;
  	width:240 / @baseRem;
  	margin:232 / @baseRem auto 0;
  }
  .instead-default-text{
  	font-size: 34 / @baseRem;
  	margin:1rem auto;
  	text-align: center;
  	color:#666;
  }
</style>