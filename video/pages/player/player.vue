<template>
	<view class="player">
		<view class="back">
			<view @click="back" class="iconfont icon-fanhui"></view>
		</view>
		<video-list :list="list"></video-list>
		<view class="footer">
			留下你的精彩评论吧
		</view>
	</view>
</template>

<script>
	import videoList from "../../components/videoList.vue"
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta:1
				})
			}
		},
		components:{
			videoList
		},
		onLoad() {
			uni.getStorage({
				key: "videoList",
				success: (res) => {
					this.list = res.data
					console.log(this.list)
				}
			})
		}
	}
</script>

<style lang="scss">
.player {
	width: 100%;
	height: 100%;
	background-color: #000;
	position: relative;
	z-index: 21;
	.back {
		position: absolute;
		top: 30rpx;
		left: 10rpx;
		z-index: 21;
		color: #fff;
		.iconfont {
			font-size: 60rpx;
		}
	}
	.footer {
		position: absolute;
		left: 20rpx;
		color: #333;
		bottom: 20rpx;
		font-size: 32rpx;
		font-weight: 700;
	}
}
</style>
