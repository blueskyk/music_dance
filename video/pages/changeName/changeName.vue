<template>
	<view>
		<view class="top">
			<navigator open-type="redirect" url="../changeUserInfo/changeUserInfo" class="back iconfont icon-fanhui"></navigator>
			<view class="title">修改昵称</view>
		</view>
		<view class="name-box">
			<view class="name">
				我的昵称
			</view>
			<view class="user-input">
				<view class="input-box">
					<input type="text" v-model="newName" maxlength="20" placeholder="请输入你的昵称" />
					<icon class="iconfont icon-shanchu" @click="clearAll"></icon>
				</view>
				<view class="user-number">{{newName.length}}/20</view>
			</view>
			<view class="save" @click="save(newName)">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newName: ""
			}
		},
		methods: {
			clearAll() {
				this.newName = ''
			},
			save(name) {
				uni.setStorage({
					key:'userName',
					data:name
				}),
				uni.navigateTo({
					url:"/pages/changeUserInfo/changeUserInfo"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #000;
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

	.name-box {
		padding: 0 30rpx;

		.name {
			color: #ccc;
			font-size: 30rpx;
			margin: 20rpx 0;
		}

		.user-input {
			.input-box {
				margin: 20rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;

				input {
					width: 90%;
					color: #fff;
				}

				icon {
					color: #ccc;
				}
			}

			.user-number {
				color: #999;
				font-size: 24rpx;
			}
		}
		.save {
			margin-top: 40rpx;
			width: 90%;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background-color: #999;
			color: #fff;
			font-size: 30rpx;
		}
	}
</style>
