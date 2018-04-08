<template>
	<div>
		<mt-header class="header" fixed title="银行列表">
            <!-- <div class="location" slot="right" v-show="IS_HOME">
                <a rel="external" href="city-search.html">
                    <img :src="img" alt="">
                    <span>上海</span>
                </a>
            </div> -->
        </mt-header>
        <ul class="bank-list has-head">
            <li>
               <a href="javascript:;">
                <dl class="clearfix">
                    <dt>
                        <img :src="bankCardsList.jiaohang"  class="card-img" alt="">
                    </dt>
                    <dd>
                        <div class="card-title">
                            <span class="bank-name">交通银行</span>
                            <span class="bank-tips mark-orange">高额</span>
                        </div>
                        <div class="sub-info">
                        新户满额送好礼满额送好礼
                        </div>
                        <div class="arrow-right"></div>
                    </dd>
                </dl>
               </a>
            </li>
             <li>
               <a href="javascript:;">
                <dl class="clearfix">
                    <dt>
                        <img :src="bankCardsList.jiaohang"  class="card-img" alt="">
                    </dt>
                    <dd>
                        <div class="card-title">
                            <span class="bank-name">中信银行</span>
                            <span class="bank-tips mark-blue">快速</span>
                        </div>
                        <div class="sub-info">
                        新户满额送好礼满额送好礼
                        </div>
                        <div class="arrow-right"></div>
                    </dd>
                </dl>
               </a>
            </li>
            <li>
               <a href="javascript:;">
                <dl class="clearfix">
                    <dt>
                        <img :src="bankCardsList.jiaohang"  class="card-img" alt="">
                    </dt>
                    <dd>
                        <div class="card-title">
                            <span class="bank-name">交通银行</span>
                            <span class="bank-tips mark-orange">高额</span>
                        </div>
                        <div class="sub-info">
                        新户满额送好礼满额送好礼
                        </div>
                        <div class="arrow-right"></div>
                    </dd>
                </dl>
               </a>
            </li>

        </ul>
	</div>
</template>
<script>
const bankCardsList = {
    jiaohang: require('@assets/images/icon_12.png'),
};

export default {
    data() {
        return {
            bankCardsList
        };
    }
};
</script>
<style lang="less">
  @import '../../assets/less/variable.less';
  @import '../../assets/less/list-common.less';

/* 银行列表 */
    .bank-list{
        background: #fff;
        box-shadow: 0 0 4px 0 rgba(230, 230, 230, 0.5);
        a{
            display:block;
        }
        li{
            &:last-child{
                dl{
                    border-bottom: 0;
                }
            }
        }
        dl{
            position:relative;
            margin:0 0.7rem;
            padding: 32 / @baseRem 0;
            border-bottom: 1px solid #d8d8d8;
        }
        dt{
            float: left;
            width:88 / @baseRem;
            height:88 / @baseRem;

        }
        dd{
            float: left;
            margin-left:20 / @baseRem;
            width: calc(~'100% - 2.7rem');
            height:88 / @baseRem;
            position: relative;

        }
        .card-img{
            width:88 / @baseRem;
            height:88 / @baseRem;
        }
        .bank-name{
            font-size:32 / @baseRem;
            color:#4a4a4a;
            height:45 / @baseRem;
            display:inline-block;
            }
            .bank-tips{
            font-size:20 / @baseRem;
            padding:0.05rem  0.35rem;
            color:#fff;
            text-align: center;
            border-top-left-radius: 20 / @baseRem;
            border-bottom-right-radius: 20 / @baseRem;
            display:inline-block;
        }
        .sub-info{
            width: calc(~'100% - 1rem');
        }
        .arrow-right{
            position:absolute;
            width:22 / @baseRem;
            height:32 / @baseRem;
            background:url(../../assets/images/arrow_right.png) no-repeat center center;
            background-size: cover;
            top:0.7rem;
            right:0;
        }
    }

</style>