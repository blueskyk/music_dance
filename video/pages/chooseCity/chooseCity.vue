<template>
	<view>
		<change-header></change-header>
		<city-list :letter="letter" :citys="citys"></city-list>
		<letter-list @change="change" :citys="citys"></letter-list>
	</view>
</template>

<script>
	import changeHeader from "../../components/changeHeader.vue"
	import cityList from "../../components/cityList.vue"
	import letterList from "../../components/letterList.vue"
	export default {
		data() {
			return {
				citys: [],
				letter: [],
			}
		},
		components: {
			changeHeader,
			cityList,
			letterList
		},
		methods: {
			getCityList() {
				this.request({
					url: "http://192.168.0.103:4000/city.json"
				}).then(res => {
					this.citys  = res.data.city
				})
			},
			change(res) {
				this.letter = res
			}
		},
		onLoad() {
			this.getCityList()
		}
	}
</script>

<style>
page {
	width: 100%;
	height: 100vh;
	background-color: #000;
}
</style>
