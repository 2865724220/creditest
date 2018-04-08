<template>
	<div>
		<mt-header class="header" fixed title="信用卡">
            <!-- <div class="location" slot="right" v-show="IS_HOME">
                <a rel="external" href="city-search.html">
                    <img :src="img" alt="">
                    <span>上海</span>
                </a>
            </div> -->
        </mt-header>
		<ul class="card-list has-head">
			<li>
				<dl class="clearfix">
					<dt>
		        		<img :src="cardsList.jiaohang"  class="card-img" alt="">
					</dt>
					<dd>
						<div class="card-title">
							<span class="card-name">交行YOUNG卡</span>
							<span class="bank-mark mark-orange">高额</span>
						</div>
						<div class="sub-info">
						这里是一句话简介或者标签
						</div>
						<div class="follow-num">
							关注人数：<span>92</span>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="clearfix">
					<dt>
		        		<img :src="cardsList.zhognxin"  class="card-img" alt="">
					</dt>
					<dd>
						<div class="card-title">
							<span class="card-name">交行火影忍者信用卡</span>
							<span class="bank-mark mark-blue">快速</span>
						</div>
						<div class="sub-info">
						这里是一句话简介或者标签
						</div>
						<div class="follow-num">
							关注人数：<span>92</span>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="clearfix">
					<dt>
		        		<img :src="cardsList.jiaohang"  class="card-img" alt="">
					</dt>
					<dd>
						<div class="card-title">
							<span class="card-name">HelloKitty粉丝信用卡</span>
							<span class="bank-mark mark-orange">高额</span>
						</div>
						<div class="sub-info">
						这里是一句话简介或者标签
						</div>
						<div class="follow-num">
							关注人数：<span>92</span>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="clearfix">
					<dt>
		        		<img :src="cardsList.jiaohang"  class="card-img" alt="">
					</dt>
					<dd>
						<div class="card-title">
							<span class="card-name">HelloKitty粉丝信用卡</span>
							<span class="bank-mark mark-orange">高额</span>
						</div>
						<div class="sub-info">
						这里是一句话简介或者标签
						</div>
						<div class="follow-num">
							关注人数：<span>92</span>
						</div>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>
<script>
const cardsList = {
    jiaohang: require('@assets/images/icon_05.png'),
    zhognxin: require('@assets/images/icon_06.png'),
    guangda: require('@assets/images/icon_06.png')
};
export default {
    data() {
        return {
        	cardsList
        };
    }
};
</script>
<style lang="less">
   @import '../../assets/less/variable.less';
</style>