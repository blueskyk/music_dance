<template>
	<view class="cityContent">
		<!-- 定位栏 -->
		<view class="location">
			<view class="location-left iconfont icon-dingwei">
				自动定位: {{currentCity}}
			</view>
			<navigator open-type="navigate" url="/pages/chooseCity/chooseCity" class="location-right">
				切换<text class="iconfont icon-iconfontjiantou5"></text>
			</navigator>
		</view>
		<!-- 列表信息 -->
		<view class="video-list">
			<view class="item">
				<view class="video-wrap">
					<video src="http://192.168.0.103:4000/video/1-1.mp4"></video>
				</view>
				<view class="img-wrap">
					<image src="../static/imgs/author-icon.jpg"></image>
				</view>
			</view>

			<view class="item">
				<view class="video-wrap">
					<video src="http://192.168.0.103:4000/video/1-1.mp4"></video>
				</view>
				<view class="img-wrap">
					<image src="../static/imgs/author-icon.jpg"></image>
				</view>
			</view>
			<view class="item">
				<view class="video-wrap">
					<video src="http://192.168.0.103:4000/video/1-1.mp4"></video>
				</view>
				<view class="img-wrap">
					<image src="../static/imgs/author-icon.jpg"></image>
				</view>
			</view>

			<view class="item">
				<view class="video-wrap">
					<video src="http://192.168.0.103:4000/video/1-1.mp4"></video>
				</view>
				<view class="img-wrap">
					<image src="../static/imgs/author-icon.jpg"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			currentCity: {
				type: String
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.cityContent {
		width: 100%;
		background-color: 000;
		z-index: 18;

		.location {
			width: 100%;
			height: 80rpx;
			margin-top: 140rpx;
			overflow: hidden;
			color: rgba(255, 255, 255, .6);
			display: flex;
			align-items: center;
			justify-content: space-between;

			.location-left {
				font-size: 30rpx;
				margin-left: 30rpx;
			}

			.location-right {
				display: flex;
				align-items: center;
				font-size: 30rpx;
				margin-right: 30rpx;
			}
		}

		.video-list {
			width: 100%;
			margin: 0 20rpx;
			display: flex;
			flex-wrap: wrap;
			background-color: #000;

			.item {
				margin-top: 30rpx;
				width: 50%;
				height: 600rpx;
				position: relative;

				.video-wrap {
					width: 100%;
					height: 100%;

					video {
						width: 90%;
						height: 100%;
					}
				}

				.img-wrap {
					width: 60rpx;
					height: 60rpx;
					overflow: hidden;
					position: absolute;
					bottom: 16rpx;
					right: 48rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
			}

		}
	}
</style>
