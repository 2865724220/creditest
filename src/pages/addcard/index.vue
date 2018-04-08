<template>
	<div>
		<ul class="related-links clearfix">
		    <li>
		      <a href="javascript:;" @click="goPage('progress')">
		        <img :src="imgs.search" alt="">
		        <p>办卡查询</p>
		      </a>
		    </li>
		    <li>
		      <a href="javascript:;" @click="goPage('/strategy')">
		        <img :src="imgs.api" alt="">
		        <p>办卡攻略</p>
		      </a>
		    </li>
		    <li>
		      <a href="javascript:;" @click="goPage('/insteadBack')">
		        <img :src="imgs.service" alt="">
		        <p>代还服务</p>
		      </a>
		    </li>
		</ul>
		<div class="module creditCard-recommend">
            <div class="title clearfix">
              <h2>主题推荐</h2>
              <a rel="external" href="javascript:;" @click="goPage('creditCardList')">查看更多</a>
            </div>
            <dl class="creditCard-prior clearfix">
              <dt>
                <div class="creditCard-info">
                  <h3>交行YPower卡</h3>
                  <p>周五买一送一</p>
                </div>
                <img :src="cards.jiaohang" alt="">
              </dt>
              <dd>
                <div class="creditCard-info">
                  <h3>中信猫眼白金卡</h3>
                  <p>边刷边赚<em>电影券</em></p>
                </div>
                <img :src="cards.zhognxin" alt="">
              </dd>
              <dd class="nobd">
                <div class="creditCard-info">
                  <h3>光大炎黄金卡</h3>
                  <p>首刷满88<em>送50</em></p>
                </div>
                <img :src="cards.guangda" alt="">
              </dd>
            </dl>
        </div>

        <div class="module hot-bank">
            <div class="title clearfix">
              <h2>热门银行</h2>
              <a rel="external" href="javascript:;" @click="goPage('cardList')">查看更多</a>
            </div>
            <ul class="bank-prior clearfix">
              <li>
                <a rel="external" href="javascript:;">
                  <img :src="bank.bankIcon" alt="">
                  <div class="bank-info">
                    <h3><span>交通银行 </span><em class="icon-trait bg-orange">快速</em></h3>
                    <p>新户满额送好礼</p>
                  </div>
                </a>
              </li>
              <li>
                <a rel="external" href="javascript:;">
                  <img :src="bank.bankIcon" alt="">
                  <div class="bank-info">
                    <h3><span>交通银行 </span><em class="icon-trait bg-blue">高额</em></h3>
                    <p>新户满额送好礼</p>
                  </div>
                </a>
              </li>
              <li>
                <a rel="external" href="javascript:;">
                  <img :src="bank.bankIcon" alt="">
                  <div class="bank-info">
                    <h3><span>交通银行 </span><em class="icon-trait bg-orange">快速</em></h3>
                    <p>新户满额送好礼</p>
                  </div>
                </a>
              </li>
              <li>
                <a rel="external" href="javascript:;">
                  <img :src="bank.bankIcon" alt="">
                  <div class="bank-info">
                    <h3><span>交通银行 </span><em class="icon-trait bg-blue">高额</em></h3>
                    <p>新户满额送好礼</p>
                  </div>
                </a>
              </li>
            </ul>
        </div>

        <div class="module strategy">
			<div class="title clearfix">
				<h2>办卡攻略</h2>
				<a rel="external" href="javascript:;" @click="goPage('strategy')">查看更多</a>
			</div>
			<x-strategy-list :list="[]"/>
        </div>
	</div>
    
</template>
<script>
import xStrategyList from '@components/strategy-list';

const imgs = {
    search: require('@assets/images/icon_01.png'),
    api: require('@assets/images/icon_02.png'),
    service: require('@assets/images/icon_03.png')
};

const cards = {
    jiaohang: require('@assets/images/icon_05.png'),
    zhognxin: require('@assets/images/icon_06.png'),
    guangda: require('@assets/images/icon_06.png')
};
const bank ={
    bankIcon: require('@assets/images/icon_12.png')
};

export default {
    components: {
        xStrategyList
    },
    data() {
        return {
            imgs,
            cards,
            bank
        };
    },
    methods: {
    	goPage(path) {
    		console.log(this.$router);
    		this.$router.push(path); 
    	}
    }
};
</script>
<style>
	.related-links li{
		float: left;
		width: 33.33%;
		text-align: center;
	}
	.related-links li img{
		display: inline-block;
		width: 2.55rem;
		margin-bottom: 0.35rem;
	}
	.related-links li p{
	  font-size: 0.7rem;
	  line-height: 1rem;
	  color: #4a4a4a;
	}

/**/
.module{
	background-color: #fff;
	margin-top: 0.7rem;
	box-shadow: 0 0 4px 0 rgba(230, 230, 230, 0.5);
}
 .module .title{
	height: 1.9rem;
	line-height: 1.9rem;
	padding: 0 0.6rem;
	font-size: 0.6rem;
	color: #4a4a4a;
	border-bottom: 1px solid #d8d8d8;
}
 .module .title h2{
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
 .module .title a{
	float: right;
	color: #4990e2;
}
 .creditCard-prior dl{
	overflow: hidden;
	height: 5.85rem;
}
 .creditCard-prior dt,
 .creditCard-prior dd{
	float: left;
	width: 42%;
	padding: 0.5rem 0.6rem;
	overflow: hidden;
	box-sizing:border-box;
}
 .creditCard-prior dt{
	height: 5.85rem;
	border-right: 1px solid #d8d8d8;
}
 .creditCard-prior dd{
	border-bottom: 1px solid #d8d8d8;
}
 .creditCard-prior h3{
	font-size: 0.7rem;
	line-height: 1rem;
    text-align: left;
    color: #4a4a4a;
    overflow: hidden;
	-ms-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
}
 .creditCard-prior p{
	font-size: 0.5rem;
	line-height: 1rem;
    color: #999;
    margin-bottom:0.2rem;
    overflow: hidden;
	-ms-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
}
 .creditCard-prior p em{
    color: #f6a623;
}
 .creditCard-prior dt img{
	width: 4.5rem;
	height: 2.75rem;
}
 .creditCard-prior dd img{
	width: 3.05rem;
	height: 1.9rem;
	float: right;
}
 .creditCard-prior dd{
	width: 58%;
	height: 2.95rem;
}
 .creditCard-prior dd .creditCard-info{
	float: left;
	width: 65%;
}
 .creditCard-prior dd.nobd{
	border: 0;
}

/**/
.bank-prior{
	overflow: hidden;
	box-shadow: 0 0 4px 0 rgba(230, 230, 230, 0.5);
}
.bank-prior li{
	float: left;
	width: 50%;
	height: 2.95rem;
	box-sizing:border-box;
}
.bank-prior li:nth-child(odd){
	border-right: 1px solid #d8d8d8;
}
.bank-prior li:nth-child(1),
.bank-prior li:nth-child(2){
	border-bottom: 1px solid #d8d8d8;
}
.bank-prior li img{
	width: 1.7rem;
	height:1.7rem;
	float: left;
	margin: 0.6rem 0.4rem 0 0.8rem;
}
.bank-prior li .bank-info{
	float: left;
	width: 65%;
	font-size: 0.5rem;
	line-height: 1rem;
    color: #999;
    margin-top: 0.4rem;
}
.bank-prior li .bank-info h3{
	font-size: 0.7rem;
    color: #4a4a4a;
}
.dtext{
    overflow: hidden;
	-ms-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
	vertical-align: middle;
}
.bank-prior li a{
	display: block;
}
.bank-prior li .bank-info h3 span{
	display: inline-block;
	width: 60%;
	overflow: hidden;
	-ms-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
	vertical-align: middle;
}
.bank-prior .bank-info p{
	overflow: hidden;
	-ms-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
}

</style>