<template>
	<view class="followList">
			<scroll-view style="height: 100%;" scroll-y="true" @scroll="scroll">
				<view class="item" v-for="item in list" :key="item.id">
					<view class="top">
						<view class="author-box">
							<view class="author-img">
								<image src="../static/imgs/author-icon.jpg"></image>
							</view>
							<view class="author-name">
								{{item.author}}
							</view>
						</view>
						<view class="share iconfont icon-gengduo"></view>
					</view>
					<view class="title">
						{{item.title}}
					</view>
					<view class="video-box">
						<video objectFit="cover" :src="`http://192.168.1.104:4000/video/${item.src}`" :controls="false"></video>
						<view class="music-box">
							<view class="music">
								didididididididididididididididi
							</view>
						</view>
					</view>
					<view class="share_box">
						<view class="date">
							03-11
						</view>
						<view class="share-items">
							<view class="item iconfont icon-zhuanfa"><text>分享</text></view>
							<view class="item iconfont icon-pinglun"><text>评论</text></view>
							<view class="item iconfont icon-aixin"><text>点赞</text></view>
						</view>
					</view>
					<view class="comment">
						<view class="number">
							11.7w评论过
						</view>
						<view class="comment_box">
							<view class="iconfont icon-pen"></view>
							<input type="text" placeholder="添加评论...">
						</view>
					</view>
				</view>
			</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			scroll(res) {
				console.log(res)
			}
		},
		props: {
			list: {
				type: Array
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
	}
	.followList {
		width: 100%;
		height: 100%;
		background-color: #000;
		padding-bottom: 100rpx;
		color: #fff;

		.item {
			height: 75vh;
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
				position: relative;


				video {
					width: 80%;
					height: 100%;
				}

				.music-box {
					position: absolute;
					left: 0rpx;
					bottom: 10rpx;
					width: 40%;
					height: 40rpx;
					overflow: hidden;

					.music {
						margin-left: 10rpx;
						color: #FFFFFF;
						font-size: 30rpx;
						width: 100%;
						animation: music 4s linear infinite;
					}
				}
			}

			.share_box {
				
				.date {
				
				}

				.share-items {
					display: flex;
					align-items: center;

					.item {
						align-items: center;
						margin-bottom: 20rpx;

						text {
							margin-left: 10rpx;
						}
					}
				}
			}

			.comment {
				width: 100%;

				.number {
					margin: 40rpx 0;
					width: 100%;
				}

				.comment_box {
					display: flex;
					align-items: center;

					input {
						width: 100%;
						margin-left: 20rpx;
						color: rgba(255, 255, 255, .6);
					}
				}
			}
		}
	}

	@keyframes music {
		0% {
			transform: translate3d(80%, 0, 0);
		}

		100% {
			transform: translate3d(-80%, 0, 0);
		}
	}
</style>
