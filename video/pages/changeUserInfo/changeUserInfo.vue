<template>
	<view>
		<view class="top">
			<view class="back iconfont icon-fanhui" @click="back"></view>
			<view class="title">编辑个人资料</view>
		</view>
		<view class="user">
			<view class="user-box">
				<view class="user-img" @click="chooseImg">
					<image :src="img" mode=""></image>
				</view>
				<view class="change">点击修改头像</view>
			</view>
			<view class="item">
				<view class="item-left">昵称</view>
				<navigator open-type="redirect" url="../changeName/changeName" class="item-right">
					<view class="right-text">{{user.userName}}</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
				</navigator>
			</view>
			<view class="item">
				<view class="item-left">抖音号</view>
				<view class="item-right">
					<view class="right-text">111111</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
				</view>
			</view>
			<view class="item">
				<view class="item-left">简介</view>
				<view class="item-right">
					<view class="right-text">我爱写代码</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
				</view>
			</view>
			<view class="item">
				<view class="item-left">学校</view>
				<view class="item-right">
					<view class="iconfont icon-iconfontjiantou5"></view>
				</view>
			</view>
			<view class="item">
				<view class="item-left">性别</view>
				<view class="item-right">
					<view class="right-text">点击选择性别</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
				</view>
			</view>
			<view class="item">
				<view class="item-left">生日</view>
				<view class="item-right">
					<view class="right-text">2000-11-07</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
				</view>
			</view>
			<view class="item">
				<view class="item-left">地区</view>
				<view class="item-right">
					<view class="right-text">江苏省徐州市</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: "../../static/imgs/author-icon.jpg",
				user: {
					userName: '滴滴'
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			chooseImg(res) {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: (res) => {
						this.img = res.tempFilePaths
					}
				})
			}
		},
		onLoad() {
			uni.getStorage({
				key:'userName',
				success: (res) => {
					this.user.userName = res.data
				}
			})
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #000;
		width: 100%;
		height: 100%;
		color: #fff;
	}

	.top {
		position: relative;
		height: 160rpx;
		line-height: 160rpx;
		text-align: center;

		.back {
			position: absolute;
			top: 50%;
			left: 40rpx;
			transform: translateY(-50%);
			font-size: 50rpx;
			color: #eee;
		}

		.title {
			font-size: 30rpx;
		}
	}

	.user {
		.user-box {
			margin-bottom: 20rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 280rpx;
			border-bottom: 1rpx solid rgba(0, 0, 0, .5);

			.user-img {
				width: 140rpx;
				height: 140rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.change {
				color: #666;
				margin-top: 30rpx;
			}
		}

		.item {
			margin: 15rpx 30rpx;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.item-left {
				font-size: 28rpx;
				color: #fff;
			}

			.item-right {
				display: flex;
				align-items: center;
				color: #999;

				.right-text {
					font-size: 30rpx;
					margin-right: 10rpx;
				}
			}
		}
	}
</style>
