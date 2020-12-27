<template>
	<view class="followList">
			<scroll-view style="height: 90vh;" scroll-y="true" @scroll="scroll">
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
						<video @click="goPlayer(list)" objectFit="cover" :loop="true" :src="`http://192.168.0.101:4000/video/${item.src}`" :controls="false"></video>
						<view class="music-box">
							<view class="music">
								didididididididididididididididi
							</view>
						</view>
					</view>
					<view class="box">
						<view class="date">11-7</view>
						<view class="share-box">
							<view class="iconfont icon-zhuanfa">分享</view>
							<view class="iconfont icon-pinglun">评论</view>
							<view class="iconfont icon-aixin">赞</view>
						</view>
					</view>
					<view class="comment-box">
						<view class="number">
							11.7w已观看
						</view>
						<view class="comment">
							<view class="iconfont icon-pen"></view>
							<input type="text" placeholder="添加评论..." />
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
		components: {
			
		},
		methods:{
			scroll(res) {
				const index = Math.floor((res.detail.scrollTop + 150)/550);
				console.log(index)
			},
			goPlayer(res) {
				uni.setStorage({
					key: "videoList",
					data: res
				})
				uni.navigateTo({
					url:"/pages/player/player"
				})
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
		height: 100vh;
	}
	.followList {
		width: 100%;
		height: 100%;
		background-color: #000;
		padding-bottom: 100rpx;
		color: #fff;

		.item {
			height: 100%;
			padding: 0rpx 30rpx;
			position: relative;
			
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
				margin: 30rpx 0;
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
			.box {
				display: flex;
				justify-content: space-between;
				margin: 40rpx 0;
				.date {
					color: #ccc;
					font-size: 36rpx;
				}
				.share-box {
					display: flex;
					align-items: center;
					.iconfont {
						margin: 0 10rpx;
						font-size: 30rpx;
					}
				}
			}
			.comment-box {
				.number {
					margin: 30rpx 0;
				}
				.comment {
					display: flex;
					align-items: center;
					input {
						margin-left: 30rpx;
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
