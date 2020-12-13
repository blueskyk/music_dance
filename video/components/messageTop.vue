<template>
	<view>
		<view class="message-top">
			<view class="message">消息</view>
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
.message-top {
	width: 100%;
	height: 160rpx;
	background-color: #000;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	
	.message {
		font-size: 30rpx;
		color: #fff;
	}
}

.fit {
	width: 100%;
	height: 160rpx;
}
</style>
