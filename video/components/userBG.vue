<template>
	<view>
		<view class="bg">
			<image src="../static/imgs/background.jpg" mode="widthFix"></image>
		</view>
		<view class="top">
			<view class="user-box">
				<image src="../static/imgs/author-icon.jpg" mode=""></image>
			</view>
			<view class="edit-box">
				<navigator class="edit">编辑资料</navigator>
				<view class="add"><text class="iconfont icon-tianjiayonghu"></text></view>
			</view>
		</view>
		<view class="fit"></view>
		<view class="name-box">
			<view class="name">
				张三
			</view>
			<view class="douId">
				抖音号:1111111111
			</view>
		</view>
		<view class="info-box">
			<view class="info">
				我爱代码
			</view>
			<view class="tags">
				<view class="tag-item">
					江苏徐州
				</view>
				<view class="tag-item">
					江苏徐州
				</view>
			</view>
		</view>
		<view class="number-box">
			<view class="number-item">
				<text class="number">1111</text>
				<text class="numbers">获赞</text>
			</view>

			<view class="number-item">
				<text class="number">1111</text>
				<text class="numbers">关注</text>
			</view>

			<view class="number-item">
				<text class="number">1111</text>
				<text class="numbers">粉丝</text>
			</view>
		</view>
		<view class="add-box">
			<view class="iconfont icon-xiangji">
				<text style="margin-left: 5rpx;">添加视频</text>
			</view>
		</view>
		<view class="option-box">
			<view class="option-item">
				作品
			</view>
			<view class="option-item">
				动态
			</view>
			<view class="option-item">
				喜欢
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
	page {
		width: 100%;
		height: 100%;
	}

	.bg {
		position: relative;
		width: 100%;

		image {
			width: 100%;
		}
	}

	.top {
		width: 90%;
		padding: 0 30rpx;
		position: absolute;
		top: 290rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.user-box {
			image {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
			}
		}

		.edit-box {
			display: flex;
			text-align: right;
			align-items: center;

			.edit {
				margin-right: 10rpx;
				font-size: 32rpx;
				width: 400rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				background-color: #3b3945;
			}

			.add {
				width: 70rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				background-color: #3b3945;
			}
		}

	}

	.fit {
		width: 100%;
		height: 100rpx;
	}

	.name-box {
		margin-top: 20rpx;
		padding: 0 30rpx;

		.name {
			font-size: 64rpx;
			height: 100rpx;
			color: #fff;
		}

		.douId {
			font-size: 30rpx;
			color: #fff;
		}
	}

	.info-box {
		margin: 30rpx 30rpx 0;

		.info {}

		.tags {
			margin-top: 30rpx;
			display: flex;

			.tag-item {
				font-size: 30rpx;
				color: #eee;
				padding: 10rpx;
				background-color: #333;
				margin-right: 20rpx;
			}
		}
	}

	.number-box {
		padding: 0 30rpx;
		display: flex;
		margin-top: 40rpx;

		.number-item {
			margin-right: 20rpx;

			.number {
				color: #fff;
				font-size: 28rpx;
			}

			.numbers {
				color: #999;
				font-size: 26rpx;
			}
		}
	}
	.add-box {
		width: 90%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-color: #666;
		margin: 0 auto;
		margin-top: 20rpx;
		font-size: 100rpx;
	}
	.option-box {
		margin: 20rpx 0;
		display: flex;
		.option-item {
			font-size: 30rpx;
			text-align: center;
			flex: 1;
			color: #999;
		}
	}
</style>
