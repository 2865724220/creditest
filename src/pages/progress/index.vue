<template>
	<div class="bank-progress">
		<div class="progress-title">
			<span class="text-bold">进度查询：</span>
			<span>建议申请资料递交7个工作日后查询</span>
		</div>
         <ul class="bank-prior clearfix" v-if="listInfo.length>0">
              <li v-for="bankInfo in listInfo">
                <a rel="external" href="javascript:;">
                  <img :src="bankInfo.img" alt="">
                  <div class="bank-info">
                    <h3><span>{{bankInfo.bankName}} </span></h3>
                    <p>{{bankInfo.bankSub}} </p>
                  </div>
                </a>
              </li>
             
        </ul>
	</div>
</template>
<script>
import xStrategyList from '@components/strategy-list';

const bank ={
    bankIcon: require('@assets/images/icon_12.png')
};

const listInfo =[
    {
        img:require('@assets/images/icon_12.png'),
        bankName:'交通银行',
        bankSub:'首刷即送50元红包'
    },
    {
        img:require('@assets/images/icon_12.png'),
        bankName:'中信银行',
        bankSub:'首刷即送50元红包'
    },
    {
        img:require('@assets/images/icon_12.png'),
        bankName:'中信银行',
        bankSub:'新户满额送好礼'
    }
];
export default {
    components: {
        xStrategyList
    },
    data() {
        return {
            bank,
            listInfo:listInfo
        };
    }
};
</script>
<style lang="less">
@import '../../assets/less/variable.less';
.progress-title{
    margin:-0.4rem 0;
    transition: all 0.5s;
    span{
        font-size: 24 / @baseRem;
        color:#4a4a4a;
    }
    .text-bold{
        font-weight: bold;
        font-size:28 / @baseRem;
    }
}
.bank-progress{
    .bank-prior{
        background: #fff;
        margin: 36 / @baseRem 0;
        position:relative;
        li{
            border-bottom: 1px solid #d8d8d8;
        }
    }
}
</style>