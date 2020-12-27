<template>
	<view class="followUser">
		<view class="back">
			<view @click="back" class="iconfont icon-fanhui"></view>
		</view>
		<user-bg @change="change" :pages="pages"></user-bg>
		<!-- 作品 -->
		<view v-show="show === '作品'">
			<option-video></option-video>
		</view>
		<!-- 动态 -->
		<view v-show="show === '动态'">
			<follow-list :list="list"></follow-list>
		</view>

		<!-- 喜欢 -->
		<view v-show="show === '喜欢'">
			<option-video></option-video>
		</view>
	</view>
</template>

<script>
	import userBg from "../../components/userBG.vue"
	import optionVideo from "../../components/optionVideo.vue"
	import followList from "../../components/followList.vue"
	export default {
		data() {
			return {
				list: [],
				show: '作品',
				pages: 'personal'
			}
		},
		methods: {
			getVideoList() {
				this.request({
					url: "http://192.168.0.103:4000/videos.json"
				}).then(res => {
					this.list = res.data.list
				})
			},
			change(name) {
				this.show = name
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		components: {
			userBg,
			optionVideo,
			followList
		},
		created() {
			this.getVideoList()
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #000;
	}

	.followUser {
		width: 100%;
		height: 100%;
		background-color: #000;
		color: #fff;

		.back {
			position: absolute;
			top: 30rpx;
			left: 10rpx;
			z-index: 21;
			color: #fff;

			.iconfont {
				font-size: 60rpx;
			}
		}
	}
</style>
