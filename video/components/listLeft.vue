<template>
	<view class="listLeft">
		<view class="author">
			{{item.author}}
		</view>
		<view class="title">
			{{item.title}}
		</view>
		<view class="music-box">
			<view class="music">
				鸡你太美sdas dsadsa dasdas d  asd
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props:{
			item: {
				type: Object
			}
		}
	}
</script>

<style lang="scss">
	.listLeft {
		width: 300rpx;
		height: 300rpx;
		margin-left: 20rpx;
		color: #fff;

		.author {
			height: 70rpx;
			line-height: 70rpx;
			font-size: 30rpx;
		}

		.title {
			height: 70rpx;
			line-height: 40rpx;
			font-size: 24rpx;
			width: 100%;
			word-break: break-word;
		}
		.music-box {
			width: 200rpx;
			overflow: hidden;
		}
		.music {
			width: 300rpx;
			height: 70rpx;
			font-size: 24rpx;
			animation: music 4s linear infinite;
		}
		@keyframes music {
			0% {
				transform: translate3d(80%,0,0);
			}
			100% {
				transform: translate3d(-80%,0,0);
			}
		}
	}
</style>
