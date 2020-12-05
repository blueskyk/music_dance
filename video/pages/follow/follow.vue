<template>
	<view>
		<follow-top></follow-top>
		<follow-list></follow-list>
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
				
			}
		},
		components: {
			followTop,
			tab,
			followList
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
