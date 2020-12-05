<template>
	<view class="cityList">
		<scroll-view class="scroll" scroll-y="true" :scroll-into-view="viewId">
			<view class="cityBoxs">
				<view class="box">
					<view class="cityName">
						<icon class="iconfont icon-dingwei" style="color: skyblue;"></icon>
						当前城市
					</view>
					<view class="currentCity">
						<text style="border: 1rpx solid #eee; padding: 10rpx;">{{currentCity}}</text>
					</view>
				</view>
				<view class="box">
					<view class="title" style="color: #ccc;">
						热门城市
					</view>
					<view class="hotList">
						<view class="hotItem" v-for="(item,index) in list" :key="index">
							{{item}}
						</view>
					</view>
				</view>
				<view class="boxWrap" v-for="(cties,index) in citys" :key="index">
					<view class="font" :id="cties.initial">
						{{cties.initial}}
					</view>
					<view @click="changeCity(item.name)" class="citys" v-for="item in cties.list" :key="item.code">{{item.name}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			list: ["北京","上海","广州","深圳","成都","南京","武汉","厦门","天津","徐州","重庆","西安"],
			viewId: '',
			currentCity: "北京"
			};
		},
		props: {
			citys: {
				type: Array
			},
			letter: {
				type: String
			}
		},
		methods: {
			changeCity(res) {
				uni.setStorage({
					key:"city",
					data:res,
				}),
				uni.getStorage({
					key:"city",
					success:(res)=> {
						this.currentCity = res.data
					}
				}),
				uni.redirectTo({
					url:'/pages/city/city'
				})
			}
		},
		watch:{
			letter() {
				this.viewId = this.letter
			}
		}
	}
</script>

<style lang="scss">
.cityList {
	width: 100%;
	height: 100%;
	background-color: #000;
	.box {
		background-color: #222;
		margin-top: 20rpx;
		padding: 0 10rpx 40rpx 10rpx;
	}
	.cityName {
		height: 80rpx;
		margin-left: 30rpx;
		color: #fff;
		font-size: 28rpx;
	}
	.currentCity {
		color: #ccc;
		font-size: 30rpx;
		margin-left: 30rpx;
		height: 60rpx;
		line-height: 60rpx;
	}
	.hotList {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 40rpx;
		.hotItem {
			width: 30%;
			height: 50rpx;
			font-size: 30rpx;
			color: #ccc;
			background-color: #333;
			margin-left: 2.5%;
			margin-bottom: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.boxWrap {
		padding: 16rpx 10rpx;
		.font {
			height: 50rpx;
			line-height: 50rpx;
			background-color: #000;
			padding-left: 20rpx;
			color: #ccc;
			font-size: 24rpx;
		}
		.citys {
			background-color: #222;
			height: 80rpx;
			line-height: 80rpx;
			padding-left: 20rpx;
			color: #eee;
			font-size: 30rpx;
		}
	}
	.scroll {
		height: 100vh;
	}
}
</style>
