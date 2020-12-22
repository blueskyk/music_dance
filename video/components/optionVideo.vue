<template>
	<view class="video-list">
		<view class="item">
			<video objectFit="cover" :loop="true" src="http://192.168.0.103:4000/video/1-1.mp4" :controls="false"></video>
			<view class="iconfont icon-aixin">
				11.7w
			</view>
		</view>
		<view class="item">
			<video objectFit="cover" :loop="true" src="http://192.168.0.103:4000/video/1-1.mp4" :controls="false"></video>
			<view class="iconfont icon-aixin">
				11.7w
			</view>
		</view>
		<view class="item">
			<video objectFit="cover" :loop="true" src="http://192.168.0.103:4000/video/1-1.mp4" :controls="false"></video>
			<view class="iconfont icon-aixin">
				11.7w
			</view>
		</view>
		<view class="item">
			<video objectFit="cover" :loop="true" src="http://192.168.0.103:4000/video/1-1.mp4" :controls="false"></video>
			<view class="iconfont icon-aixin">
				11.7w
			</view>
		</view>
		<view class="ground"></view>
		<view class="no-more">没有更多了</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
page {
	width: 100%;
	height: 100%;
}

.video-list {
	padding: 40rpx 0;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	.item {
		width: 33.33%;
		position: relative;
		video {
			width: 100%;
			height: 240rpx;
		}
		.icon-aixin {
			position: absolute;
			bottom: 10rpx;
			left: 10rpx;
			font-size: 30rpx;
		}
	}
}

.no-more {
	text-align: center;
	color: #999;
	width: 100%;
	height: 120rpx;
	text-align: center;
	font-size: 30rpx;
}

.ground {
	width: 100%;
	height: 20rpx;
	background-color: #000;
}

</style>
