<template>
	<view class="topNav">
		<view class="iconfont icon-sousuo"></view>
		<view class="middle">
			<navigator open-type="switchTab" url="/pages/index/index" class="text">推荐</navigator>
			<navigator open-type="navigate" url="/pages/city/city" class="text">同城</navigator>
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
	.topNav {
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

		.icon-sousuo {
			position: absolute;
			left: 0;
			width: 20%;
			text-align: center;
			font-size: 40rpx;
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
</style>
