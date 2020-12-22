<template>
	<view>
		<user-bg></user-bg>
		<option-video></option-video>
		<tab></tab>
	</view>
</template>

<script>
	import tab from "../../components/tab.vue"
	import userBg from "../../components/userBG.vue"
	import optionVideo from "../../components/optionVideo.vue"
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			tab,
			userBg,
			optionVideo
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
