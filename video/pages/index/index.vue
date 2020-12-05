<template>
	<view class="content">
		<top-nav></top-nav>
		<video-list :list="list"></video-list>
		<tab></tab>
	</view>
</template>

<script>
	import tab from "../../components/tab.vue"
	import topNav from "../../components/topNav.vue"
	import videoList from "../../components/videoList.vue"
	export default {
		data() {
			return {
				list: []
			}
		},
		components: {
			tab,
			topNav,
			videoList
		},
		onLoad() {
			this.getVideoList()
		},
		methods: {
			getVideoList() {
			 this.request({
				 url: "http://192.168.1.103:4000/videos.json"
			 }).then(res => {
				 this.list = res.data.list
			 })
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
	}
</style>
