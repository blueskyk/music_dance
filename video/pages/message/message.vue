<template>
	<view>
		<message-top></message-top>
		<tab></tab>
	</view>
</template>

<script>
	import messageTop from "../../components/messageTop.vue"
	import tab from "../../components/tab.vue"
	export default {
		data() {
			return {
				
			}
		},
		components:{
			messageTop,
			tab
		},
		methods: {
			
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #000;
	}
</style>
