<template>
	<view>
		<view class="bg">
			<image src="../static/imgs/background.jpg" mode="widthFix"></image>
		</view>
		<view class="top">
			<view class="user-box">
				<image src="../static/imgs/author-icon.jpg" mode=""></image>
			</view>
			<view v-if="pages === 'user'" class="edit-box">
				<view class="edit" @click="changeUserInfo">编辑资料</view>
			</view>
			<view v-else class="edit-box">
				<view :style="style4" @click="changeFollow"  class="edit">
					<text style="margin-right: 10rpx;" v-show="follwText==='关注'" class="iconfont icon-jiahao"></text>
				{{follwText}}
				</view>
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
			<view :style="style1" @click="change('作品')" class="option-item">
				<text >作品</text>
			</view>
			<view :style="style2" @click="change('动态')" class="option-item">
				<text>动态</text>
			</view>
			<view :style="style3" @click="change('喜欢')" class="option-item">
				<text>喜欢</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			style1: "border-bottom: 3rpx solid #F0AD4E; padding-bottom:20rpx;",
			style2: '',
			style3: '',
			style4: 'background-color: red;',
			follwText: '关注'
			}
		},
		methods: {
			change(name) {
				if(name === '作品') {
					this.style1 = "border-bottom: 3rpx solid #F0AD4E; padding-bottom:20rpx;"
					this.style2 = ''
					this.style3 = ''
					this.$emit('change',name)
				} else if (name === '动态') {
					this.style2 = "border-bottom: 3rpx solid #F0AD4E; padding-bottom:20rpx;"
					this.style1 = ''
					this.style3 = ''
					this.$emit('change',name)
				} else {
					this.style3 = "border-bottom: 3rpx solid #F0AD4E; padding-bottom:20rpx;"
					this.style1 = ''
					this.style2 = ''
					this.$emit('change',name)
				}
			},
			changeUserInfo() {
				uni.navigateTo({
					url:"/pages/changeUserInfo/changeUserInfo"
				})
			},
			// 关注按钮的切换
			changeFollow() {
				this.style4 = this.style4 === ''? 'background-color: red;': ''
				this.follwText = this.style4 === ''?"取消关注": "关注"
			}
		},
		props: {
			pages: {
				type: String
			}
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
				width: 460rpx;
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
