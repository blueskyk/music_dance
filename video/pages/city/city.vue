<template>
	<view class="city">
		<top-nav></top-nav>
		<tab></tab>
		<city-content :currentCity="currentCity"></city-content>
	</view>
</template>

<script>
	import tab from "../../components/tab.vue"
	import topNav from "../../components/topNav.vue"
	import cityContent from "../../components/cityContent.vue"
	export default {
		data() {
			return {
				currentCity: "北京"
			}
		},
		components: {
			tab,
			topNav,
			cityContent
		},
		methods: {

		},
		onShow() {
			uni.getStorage({
				key: "city",
				success: (res) => {
					this.currentCity = res.data
				}
			})
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100px;
		background-color: #000;
	}
</style>
