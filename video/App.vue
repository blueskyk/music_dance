<script>
	export default {
		onLaunch: function() {
			uni.hideTabBar()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 引入iconfont字体图标 */
	@import url("./static/iconfont.css");
	page {
		width: 100%;
		height: 100%;
	}
	
</style>
