<template>
	<view class="tab">
		<navigator open-type="switchTab" url="/pages/index/index" class="tab-box">
			首页
		</navigator>
		<navigator open-type="switchTab" url="/pages/follow/follow" class="tab-box">
			关注
		</navigator>
		<view class="tab-box">
			<view class="iconfont icon-jiahao icon-box">
			</view>
		</view>
	
		<view class="tab-box">
			消息
		</view>
		<view class="tab-box">
			我的
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
.tab {
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100rpx;
	z-index: 20;
	.tab-box {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 40rpx;
		.icon-box {
			width: 70%;
			height: 70rpx;
			background-color: #fff;
			color: #000;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 20rpx;
			font-size: 30rpx;
		}
	}
}
</style>
