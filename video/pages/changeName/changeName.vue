<template>
	<view>
		<view class="top">
			<navigator open-type="redirect" url="../changeUserInfo/changeUserInfo" class="back iconfont icon-fanhui"></navigator>
			<view class="title">{{title}}</view>
		</view>
		<view class="name-box">
			<view class="name">
				{{text}}
			</view>
			<view v-if="title === '修改昵称'" class="user-input">
				<view class="input-box">
					<input type="text" v-model="newName" maxlength="20" placeholder="请输入你的昵称" />
					<icon class="iconfont icon-shanchu" @click="clearAll"></icon>
				</view>
				<view class="user-number">{{newName.length}}/20</view>
				<view class="save" @click="save(newName)">保存</view>
			</view>
			
			<view v-if="title === '修改抖音号'" class="user-input">
				<view class="input-box">
					<input type="text" v-model="newId" maxlength="16"  />
					<icon class="iconfont icon-shanchu" @click="clearAll"></icon>
				</view>
				<view class="user-number">最多16个字符，只允许包含字母、数字、下划线和点，30天内只能修改一次。</view>
				<view class="save" @click="saveId(newId)">保存</view>
			</view>
			
			<view v-if="title === '修改简介'" class="user-input">
				<textarea v-model="intro" value="" placeholder="填写个人简介更容易获得别人关注哦" />
				<view class="save" @click="saveIntro(intro)">保存</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newName: "",
				newId: "",
				title: "",
				text: "",
				intro: ""
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
				uni.showToast({
					title:"修改成功!"
				})
			},
			saveId(id) {
				uni.setStorage({
					key:"userId",
					data:id,
					success: (res) => {
						console.log(res)
					}
				})
				uni.navigateTo({
					url:"/pages/changeUserInfo/changeUserInfo"
				})
				uni.showToast({
					title:"修改成功!"
				})
			},
			saveIntro(intro) {
				uni.setStorage({
					key:"userIntro",
					data: intro
				}),
				uni.navigateTo({
					url:"/pages/changeUserInfo/changeUserInfo"
				}),
				uni.showToast({
					title:"修改成功!"
				})
			}
		},
		onLoad(res) {
			switch (res.title){
				case "userName":
				this.title="修改昵称"
				this.text = "我的昵称"
					break;
					case "douId" :
					this.title = "修改抖音号"
					this.text = "我的抖音号"
						break;
						case "intro":
						this.title="修改简介"
						this.text = "个人简介"
							break;
				default:
					break;
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
			color: #fff;
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
			.save {
				margin: 0 auto;
				margin-top: 40rpx;
				width: 90%;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				background-color: #666;
				color: #fff;
				font-size: 30rpx;
			}
			textarea {
				width: 98%;
				margin: 0 auto;
				background-color: #333;
				color: #ccc;
			}
		}
	}
</style>
