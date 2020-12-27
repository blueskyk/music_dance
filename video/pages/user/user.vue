<template>
	<view>
		<user-bg :pages="pages" @change="change"></user-bg>
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
		<tab></tab>
	</view>
</template>

<script>
	import tab from "../../components/tab.vue"
	import userBg from "../../components/userBG.vue"
	import optionVideo from "../../components/optionVideo.vue"
	import followList from "../../components/followList.vue"
	export default {
		data() {
			return {
				list: [],
				show: '作品',
				pages: 'user'
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
			}
		},
		components: {
			tab,
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
		width: 100%;
		height: 100%;
		background-color: #000;
		color: #fff;
	}
</style>
