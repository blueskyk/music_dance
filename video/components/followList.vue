<template>
	<view class="followList">
		<view class="item">
			<view class="top">
				<view class="author-box">
					<view class="author-img">
						<image src="../static/imgs/author-icon.jpg" mode=""></image>
					</view>
					<view class="author-name">
						张三
					</view>
				</view>
				<view class="share iconfont icon-gengduo"></view>
			</view>
			<view class="title">
				我是标题
			</view>
			<view class="video-box">
				<video objectFit="cover" src="http://192.168.1.105:4000/video/3-1.mp4" controls></video>
			</view>
			<view class="share_box">

			</view>
			<view class="comment">

			</view>
		</view>
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

<style lang="scss">
	.followList {
		width: 100%;
		background-color: #000;
		padding-bottom: 100rpx;
		color: #fff;

		.item {
			padding: 0 30rpx;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100rpx;

				.author-box {
					display: flex;
					align-items: center;
					.author-img {
						width: 70rpx;
						height: 70rpx;
						overflow: hidden;
						border-radius: 50%;

						image {
							width: 100%;
							height: 100%;
						}
					}
					.author-name {
						margin-left: 20rpx;
					}

				}
				.share {
					font-size: 60rpx;
				}
			}
			.title {
				width: 100%;
				font-size: 30rpx;
				margin-top: 30rpx;
				height: 50rpx;
				line-height: 50rpx;
				
			}
			.video-box {
				width: 100%;
				height: 700rpx;
				video {
					width: 80%;
					height: 100%;
				}
			}
		}
	}
</style>
