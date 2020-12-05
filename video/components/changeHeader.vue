<template>
	<view>
		<view class="change-header">
			<navigator open-type="navigateBack" class="iconfont icon-chahao">
				
			</navigator>
			<view class="title">切换城市</view>
		</view>
		<view class="fit"></view>
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
	.change-header {
		width: 100%;
		height: 160rpx;
		line-height: 160rpx;;
		color: #eee;
		background-color: #000;
		position: fixed;
		left: 0;
		top: 0;
		text-align: center;
		.icon-chahao {
			position: absolute;
			top: 50%;
			left: 20rpx;
			transform: translateY(-50%);
			font-size: 60rpx;
			color: #666;
		}
	}
	
	.fit {
		width: 100%;
		height: 160rpx;
	}
</style>
