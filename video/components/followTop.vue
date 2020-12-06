<template>
	<view>
		<view class="followNav">
			<view class="iconfont icon-xiangji"><text style="margin-left: 10rpx;">随手拍</text></view>
			<view class="middle">
				<navigator :style="follow" open-type="switchTab" url="/pages/follow/follow" class="text">关注</navigator>
				<navigator :style="friend" open-type="switchTab" url="/pages/friend/friend" class="text">好友</navigator>
			</view>
		</view>
		<view class="fit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				follow: "",
				friend: ""
			};
		},
		props:{
			page: {
				type: String
			}
		},
		mounted() {
			if(this.page === "follow") {
				this.follow = "border-bottom: 2rpx solid #DD524D;"
			} else {
				this.friend = "border-bottom: 2rpx solid #DD524D;"
			}
		}
	}
</script>

<style lang="scss">
.followNav {
		width: 100%;
		z-index: 10;
		position: fixed;
		top: 50rpx;
		left: 0;
		height: 70rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		text-align: center;

		.icon-xiangji {
			position: absolute;
			left: 0;
			width: 20%;
			text-align: center;
			font-size: 30rpx;
		}

		.middle {
			display: flex;
			justify-content: center;
			align-items: center;

			.text {
				margin: 0 10rpx;
			}
		}
	}
	.fit {
		width: 100%;
		height: 120rpx;
	}
</style>
