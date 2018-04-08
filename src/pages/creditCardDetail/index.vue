<template>
	<div>
		<mt-header class="header" fixed title="YOUNG卡">
            <!-- <div class="location" slot="right" v-show="IS_HOME">
                <a rel="external" href="city-search.html">
                    <img :src="img" alt="">
                    <span>上海</span>
                </a>
            </div> -->
        </mt-header>
		<div class="has-head">
			<div class="caution">
				<img  src="/images/icon_04.png" alt=""> 
				<span>请查询该卡可申请城市</span>
			</div>
			<img :src="cardsList.zhognxin" class="bank-card-img" alt="">
			<div class="detail-con">
				<div class="detail-title clearfix">
					<span class="fl">信用卡介绍</span>
					<span class="fr">关注人数：1000</span>
				</div>
				<p>
					Young卡是招商银行推出的仅30岁以下的非学生客户可以办理的人民币信用卡。主要特点为预借现金额度为信用卡额度的100%；生日月当月双倍计算积分。
				</p>
				<p>
					招行Young卡（青年版）有白色和黑色两款卡面，卡面颜色在申请时可以选择，如果没有选择卡面，则随机发其中一个颜色。黑色卡面设计理念：酷感十足的你一定想拥有它！招商银行YOUNG卡给你耍酷的理由！黑色的深沉配合彩虹烫印的酷炫，完美组合让你一酷到底！
				</p>
				<p>赠送保险：否</p>
			</div>
			<a href="javascript:;" class="a-btn">立即申请</a>
		</div>
	</div>
</template>
<script>
const cardsList = {
    zhognxin: require('@assets/images/icon_06.png')
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
  .bank-card-img{
  	display: block;
  	width:500 / @baseRem;
  	margin:32 / @baseRem auto;
  }
  .detail-con{
  	background: #fff;
  	padding:20 / @baseRem 28 / @baseRem  32 / @baseRem;
  	p{
  		font-size:24 / @baseRem;
  		color:#999;
  		text-indent: 1.2rem;
  		margin: 30 / @baseRem 0 0 0;
  		line-height: 34 / @baseRem;
  	}
  }
  .detail-title{
  	span{
  		display: inline-block;
  		&:first-child{
  			font-size:28 / @baseRem;
  			color:#4a4a4a;
  			padding-left: 8 / @baseRem;
  			border-left:0.2rem solid #f9b92c;
  		}
  		&:last-child{
  			font-size:24 / @baseRem;
  			color:#999;
  		}
  	}
  }
  .a-btn{
  	display: block;
  	font-size:36 / @baseRem;
  	color:#fff;
  	margin:112 / @baseRem 24 / @baseRem;
  	height: 88 / @baseRem;
  	line-height: 88 / @baseRem;
  	background: #4f68ff;
  	border-radius:100 / @baseRem;
  	text-align: center;

  }
</style>