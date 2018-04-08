<template>
	<ul class="strategy-list">
		<li>
			<a href="javascript:;" rel="external">
				<div class="strategy-list-l">
					<h3>【信用卡】有房有稳定收入，为何不能申请信用卡？</h3>
					<div class="desc">随着信用卡的普及，先消费后还款的观念深入人心。前段时间有位66随着信用卡的普及，先消费后还款的观念深入人心。前段时间有位66</div>
				</div>
				<img :src="imgs.img">
			</a>
		</li>
		<li>
			<a href="javascript:;" rel="external">
				<div class="strategy-list-l">
					<h3>【信用卡】有房有稳定收入，为何不能申请信用卡？</h3>
					<div class="desc">随着信用卡的普及，先消费后还款的观念深入人心。前段时间有位66随着信用卡的普及，先消费后还款的观念深入人心。前段时间有位66</div>
				</div>
				<img :src="imgs.img">
			</a>
		</li>
		<li>
			<a href="javascript:;" rel="external">
				<div class="strategy-list-l">
					<h3>【信用卡】有房有稳定收入，为何不能申请信用卡？</h3>
					<div class="desc">随着信用卡的普及，先消费后还款的观念深入人心。前段时间有位66随着信用卡的普及，先消费后还款的观念深入人心。前段时间有位66</div>
				</div>
				<img :src="imgs.img">
			</a>
		</li>
	</ul>
</template>
<script>
const imgs = {
    img: require('@assets/images/icon_07.png')
};
export default {
	
    // props: {
    //     list: {
    //         type: Array,
    //         default: []
    //     }
    // },
    data() {
        return {
        	imgs
        };
    },
    mounted() {
        // 
    }
};
</script>
<style>
.strategy-list{
	overflow: hidden;
    background: #fff;
    margin: 0.6rem 0;
    box-shadow: 0 0 4px 0 rgba(230, 230, 230, 0.5);
}
.strategy-list li{
	padding: 0.65rem 0.6rem;
	border-bottom: 1px solid #d8d8d8;
}
.strategy-list li a{
	display: block;
	overflow: hidden;
}
.strategy-list li .strategy-list-l{
	float: left;
	width: 65%;
  	font-size: 0.6rem;
  	line-height: 1rem;
  	color: #999;
}

.strategy-list li h3{
	font-size: 0.7rem;
	line-height: 1rem;
	color: #4a4a4a;
	overflow: hidden;
	-ms-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
	vertical-align: middle;
	margin-bottom: 0.5rem;
}
.strategy-list li .desc{
	width: 100%;
	font-size: 0.6rem;
  	line-height: 1rem;
  	height: 2rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: box;
    line-clamp: 2;
    box-orient: vertical;
}
.strategy-list li img{
	float: right;
	width: 5.35rem;
	height: 4rem;
}
.strategy-list li:last-child{
	border: none;
}
</style>