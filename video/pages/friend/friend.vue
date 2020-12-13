<template>
	<view>
		<follow-top :page="page"></follow-top>
		<follow-list :list="list"></follow-list>
		<tab></tab>
	</view>
</template>

<script>
	import followTop from "../../components/followTop.vue"
	import tab from "../../components/tab.vue"
	import followList from "../../components/followList.vue"
	export default {
		data() {
			return {
				page: "friend",
				list: []
			}
		},
		components: {
			followTop,
			tab,
			followList
		},
		methods: {
			getList() {
				this.request({
					url: "http://192.168.0.104:4000/videos.json"
				}).then(res => {
					this.list = res.data.list.slice(3,8)
				})
			}
		},
		created() {
			this.getList()
		}
	}
</script>

<style lang="scss">
 page {
	 width: 100%;
	 height: 100%;
	 background-color: #000;
 }
</style>
