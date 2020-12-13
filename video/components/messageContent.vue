<template>
	<view>
		<view class="box">
			<view class="item">
				<image src="../static/imgs/fans.jpg" mode="aspectFit"></image>
				<text>粉丝</text>
			</view>
			<view class="item">
				<image src="../static/imgs/love.jpg" mode="aspectFit"></image>
				<text>点赞</text>
			</view>
			<view class="item">
				<image src="../static/imgs/comment.jpg" mode="aspectFit"></image>
				<text>评论和@</text>
			</view>
			<view class="item">
				<image src="../static/imgs/dong.jpg" mode="aspectFit"></image>
				<text>随拍互动</text>
			</view>
		</view>
		<view class="author-box" v-for="item in messageList" :key="item.id">
			<view class="author-left">
				<image src="../static/imgs/author-icon.jpg"></image>
			</view>
			<view class="author-right">
				<view class="author-info">
					<view class="name">{{item.name}}</view>
					<view class="time">{{item.time}}</view>
				</view>
				<view class="content">{{item.content}}</view>
			</view>
		</view>
		<view class="noMore">没有更多消息了</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messageList: [{
						id: 0,
						name: "AAA",
						time: "11-7",
						content: "你好，我是AAA。"
					},
					{
						id: 1,
						name: "BBB",
						time: "11-6",
						content: "你好，我是BBB。"
					},
					{
						id: 2,
						name: "CCC",
						time: "11-5",
						content: "你好，我是CCC。"
					},
					{
						id: 3,
						name: "DDD",
						time: "11-4",
						content: "你好，我是DDD"
					}
				],
			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
	}

	.box {
		display: flex;
		margin: 0 30rpx 40rpx;

		.item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 80rpx;
				height: 80rpx;
				border-radius: 20rpx;
			}

			text {
				font-size: 24rpx;
				margin-top: 20rpx;
			}
		}
	}

	.author-box {
		padding: 0rpx 30rpx;
		height: 180rpx;
		display: flex;
		align-items: center;

		.author-left {
			flex: 2;

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
		}

		.author-right {
			flex: 8;
			display: flex;
			flex-direction: column;

			.author-info {
				display: flex;
				justify-content: space-between;

				.name {
					font-size: 40rpx;
				}

				.time {
					font-size: 30rpx;
					color: #ccc;
				}
			}

			.content {
				margin-top: 10rpx;
				font-size: 30rpx;
				color: #ccc;
			}
		}
	}
	.noMore {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		margin: 0 auto;
		color: #aaa;
	}
</style>
