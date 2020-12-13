<template>
	<view>
		<message-top></message-top>
		<message-content></message-content>
		<tab></tab>
	</view>
</template>

<script>
	import messageTop from "../../components/messageTop.vue"
	import messageContent from "../../components/messageContent.vue"
	import tab from "../../components/tab.vue"
	export default {
		data() {
			return {
				
			}
		},
		components:{
			messageTop,
			messageContent,
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
		color: #FFFFFF;
	}
</style>
