<template>
	<div>
		<mt-header class="header" fixed title="城市列表">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
        </mt-header>
		<div class="city-wrap" style="padding-top:2.2rem;">
			<div class="p-text">
				当前定位城市
			</div>
			<div class="white-block">
				<span class="city-border city-active city-current"><i class="location-icon"></i>{{localCity.cityName}}</span>
			</div>
			<div class="p-text">
				热门城市
			</div>
			<div class="white-block">
                <span v-for="item in hotCitys" class="city-border"  v-bind:class="{'city-active':item.checked}"  @click="selectCity(item)">{{item.cityName}}</span>
				<!-- <span class="city-border">北京</span>
				<span class="city-border">深圳</span>
				<span class="city-border">广州</span>
				<span class="city-border">杭州</span>
				<span class="city-border">苏州</span>
				<span class="city-border">无锡</span>
				<span class="city-border">昆山</span> -->
			</div>
			<div class="p-text">
				其他城市
			</div>
			<ul class="city-list">
                <li v-for="item in cityList" :key="item.id" @click="selectCity(item)">{{item.cityName}}</li>
				<!-- <li>
					武汉市
				</li>
				<li>
					郑州市
				</li>
				<li>
					西安市
				</li>
				<li>
					兰州市
				</li>
				<li>
					咸阳市
				</li>
				<li>
					成都市
				</li>
				<li>
					宁波市
				</li> -->
			</ul>
		</div>
	</div>
</template>
<script>

export default {
    data() {
        return {
            localCity: {},
            hotCitys: [
                {id:1, cityName:'上海',checked:false},
                {id:2, cityName:'北京',checked:false},
                {id:3, cityName:'广州',checked:false},
                {id:4, cityName:'深圳',checked:false},
                {id:5, cityName:'苏州',checked:false}
            ],
            cityList: []
        };
    },
    methods:{
        //        getCityList() {
        //            $http.get('/front/cities')
        //                .then(r => {
        //                    if (r.success) {
        //                        this.cityList = r.data;
        //                    }
        //                });
        //        },
        getCityList() {
            var _this=this;
            $http.get('/front/cities').then(function (r) {
                if (r.success) {
                    _this.cityList = r.data;
                }

            });
        },
        selectCity(item) {
            //            this.hotCitys.forEach(v => {
            //                v.checked=false;
            //                if (v.id==item.id) {
            //                    v.checked=true;
            //                }
            //            });
            this.hotCitys.forEach(function (v) {
			    v.checked=false;
			    if (v.id==item.id) {
			        v.checked=true;
                }

            });
            this.localCity = {
                id:item.id,
                cityName: item.cityName,
            };
        }
    },
    mounted() {
        this.getCityList();
    }
};
</script>
<style lang="less">
  @import '../../assets/less/variable.less';
  /*.city-wrap{
  	padding:0 26 / @baseRem;
  }*/
  .p-text{
  	font-size:28 / @baseRem;
  	color:#4a4a4a;
  	padding: 12 / @baseRem 26 / @baseRem;
  }
  .white-block{
  	background: #fff;
  	padding:36 / @baseRem 26 / @baseRem 16 / @baseRem;
  }
  .city-border{
  	font-size:30 / @baseRem;
  	display:inline-block;
  	height:70 / @baseRem;
  	width:148 / @baseRem;
  	text-align: center;
  	line-height: 70 / @baseRem;
  	border:1px solid #cbcbcb;
  	color:#999;
  	border-radius:4px;
  	margin:0 5px 20 / @baseRem 0;
  	box-sizing: border-box;
  }
  .city-active{
  	border-color:#4990e2;
  }
  .city-current{
  	position:relative;
  	text-align: left;
  	padding-left:60 / @baseRem;
  }
  .location-icon{
  	position:absolute;
  	display:block;
  	width:30 / @baseRem;
  	height:42 / @baseRem;
  	background: url('../../assets/images/icon_10.png') no-repeat center center;
  	background-size:cover;
  	top: 10 / @baseRem;
  	left:20 / @baseRem;
  }
  .city-list{
  	background: #fff;
  	margin:0 0 1rem;
  	box-shadow: 0 0 4px 0 rgba(230, 230, 230, 0.5);
  	li{
  		font-size:30 / @baseRem;
  		color:#999;
  		padding: 30 / @baseRem 0 26 / @baseRem;
  		border-bottom: 1px solid #d8d8d8;
  		margin:0 26 / @baseRem;
  		&:last-child{
  			border-bottom: 0;
  		}
  	}
  }
</style>