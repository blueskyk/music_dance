<template>
	<view class="listright">
		<view class="author-img" @click="toPersonal">
			<view class="author-wrap">
				<image src="../static/imgs/author-icon.jpg" mode="aspectFill"></image>
			</view>
			<view  @click="hideIcon" v-show="isHide">
				<view class="iconfont icon-jiahao"></view>
			</view>
		</view>
		<view class="iconfont icon-aixin right-box" @click="changeColor" :style="color">

		</view>
		<view class="number">
			{{item.loveNumber}}
		</view>
		<view class="right-box iconfont icon-pinglun">
		
		</view>
		<view class="number">
			{{item.commentNumber}}
		</view>
		<view class="right-box iconfont icon-zhuanfa">
		</view>
		<view class="number">
			{{item.shareNumber}}
		</view>
		<view class="around">
			<image src="../static/imgs/2-1.jpg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isHide: true,
				color: ''
			}
		},
		props: {
			item: {
				type: Object
			}
		},
		methods: {
			hideIcon() {
				this.isHide = false
			},
			changeColor() {
				this.color = this.color ==='' ? "color:red;" :''
			},
			change() {
				this.color = "color: red;"
			},
			toPersonal() {
				uni.navigateTo({
					url: "/pages/followUser/followUser"
				})
			}
		}
	}
</script>

<style lang="scss">
	.listright {
		width: 100rpx;
		margin: 0 auto;
		.right-box {
			width: 100rpx;
			margin-top: 26rpx;
			text-align: center;
			color: #fff;
			font-size: 60rpx;
		}
		.author-img {
			position: relative;
			width: 100rpx;
			height: 100rpx;
			border: 3rpx solid #fff;
			border-radius: 50%;
			.author-wrap {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				z-index: 30;
				border-radius: 50%;
				overflow: hidden;
			}
			.icon-jiahao {
				position: absolute;
				z-index: 30;
				left: 50%;
				bottom: -18rpx;
				transform: translateX(-50%);
				width: 36rpx;
				height: 36rpx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #fff;
				background-color: red;
				font-size: 20rpx;
			}
		}
		.around {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			margin-top: 30rpx;
			overflow: hidden;
			animation: rotate 1.5s  infinite linear;
		}
		image {
			width: 100%;
			height: 100%;
		}
		.number {
			font-size: 20rpx;
			text-align: center;
			color: #fff;
		}
		@keyframes rotate {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
	
</style>
