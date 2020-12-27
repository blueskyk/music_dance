<template>
	<view>
		<view class="top">
			<view class="back iconfont icon-fanhui" @click="back"></view>
			<view class="title">编辑个人资料</view>
		</view>
		<view class="user">
			<view class="user-box">
				<view class="user-img" @click="chooseImg">
					<image :src="img"></image>
				</view>
				<view class="change">点击修改头像</view>
			</view>
			<view class="item">
				<view class="item-left">昵称</view>
				<navigator open-type="redirect" url="../changeName/changeName?title=userName" class="item-right">
					<view class="right-text">{{user.userName}}</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
				</navigator>
			</view>
			<view class="item">
				<view class="item-left">抖音号</view>
				<navigator open-type="redirect" url="../changeName/changeName?title=douId" class="item-right">
					<view class="right-text">{{user.userId}}</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
				</navigator>
			</view>
			<view class="item">
				<view class="item-left">简介</view>
				<navigator open-type="redirect" url="../changeName/changeName?title=intro" class="item-right">
					<view class="right-text">{{user.userIntro}}</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
				</navigator>
			</view>
			<picker :range="school" @change="changeSchool">
				<view class="item">

					<view class="item-left">学校</view>
					<view class="item-right">
						<view class="right-text">{{user.school}}</view>
						<view class="iconfont icon-iconfontjiantou5"></view>
					</view>

				</view>
			</picker>

			<picker :range="sex" @change="changeSex">
				<view class="item">
					<view class="item-left">性别</view>
					<view class="item-right">
						<view class="right-text">{{user.sex}}</view>
						<view class="iconfont icon-iconfontjiantou5"></view>
					</view>
				</view>
			</picker>
			<picker mode="date" :value="birthday" @change="changeBirthday">
				<view class="item">
					<view class="item-left">生日</view>
					<view class="item-right">
						<view class="right-text">{{user.birthday}}</view>
						<view class="iconfont icon-iconfontjiantou5"></view>
					</view>
				</view>
			</picker>
			<picker mode="region"  @change="changeCity">
				<view class="item">
					<view class="item-left">地区</view>
					<view class="item-right">
						<view class="right-text">{{user.city}}</view>
						<view class="iconfont icon-iconfontjiantou5"></view>
					</view>
				</view>
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: "../../static/imgs/author-icon.jpg",
				user: {
					userName: '滴滴',
					userId: "11111111",
					userIntro: "我爱写代码",
					school: "",
					sex: "请选择性别",
					birthday: "",
					city: ""
				},
				school: ["清华大学", "北京大学", "复旦大学", "南京大学", "浙江大学", "武汉大学"],
				sex: ["男", "女"]
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 修改头像
			chooseImg(res) {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: (res) => {
						this.img = res.tempFilePaths
					}
				})
			},
			// 修改学校
			changeSchool(e) {
				this.user.school = this.school[e.target.value]
				uni.setStorage({
					key: "school",
					data: this.school[e.target.value]
				})
			},
			// 修改性别
			changeSex(e) {
				this.user.sex = this.sex[e.target.value]
				uni.setStorage({
					key: "sex",
					data: this.user.sex = this.sex[e.target.value]
				})
			},
			// 修改生日
			changeBirthday(e) {
				this.user.birthday = e.target.value,
					uni.setStorage({
						key: "birthday",
						data: e.target.value
					})
			},
			// 修改城市
			changeCity(e) {
				console.log(e)
				const data = e.target.value[0]+"-" +e.target.value[1]+ "-" +e.target.value[2]
				this.user.city = data
				uni.setStorage({
					key: "city",
					data
				})
			}
		},
		onLoad() {
			// 读取存储中的用户昵称
			uni.getStorage({
					key: 'userName',
					success: (res) => {
						this.user.userName = res.data
					}
				}),
				// 读取存储中的抖音id
				uni.getStorage({
					key: "userId",
					success: (res) => {
						this.user.userId = res.data
					}
				}),
				// 读取存储中的用户简介
				uni.getStorage({
					key: "userIntro",
					success: (res) => {
						this.user.userIntro = res.data
					}
				}),
				// 读取存储中的用户学校信息
				uni.getStorage({
					key: "school",
					success: (res) => {
						this.user.school = res.data
					}
				}),
				// 读取存储中的用户性别选项
				uni.getStorage({
					key: "sex",
					success: (res) => {
						this.user.sex = res.data
					}
				}),
				// 读取存储中用户生日选项
				uni.getStorage({
					key: "birthday",
					success: (res) => {
						this.user.birthday = res.data
					}
				})
				// 读取存储中用户所在的城市
				uni.getStorage({
					key: "city",
					success: (res) => {
						this.user.city = res.data
					}
				})
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #000;
		width: 100%;
		height: 100%;
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

	.user {
		.user-box {
			margin-bottom: 20rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 280rpx;
			border-bottom: 1rpx solid rgba(0, 0, 0, .5);

			.user-img {
				width: 140rpx;
				height: 140rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.change {
				color: #666;
				margin-top: 30rpx;
			}
		}

		.item {
			margin: 15rpx 30rpx;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.item-left {
				font-size: 28rpx;
				color: #fff;
			}

			.item-right {
				display: flex;
				align-items: center;
				color: #999;

				.right-text {
					font-size: 30rpx;
					margin-right: 10rpx;
				}
			}
		}
	}
</style>
