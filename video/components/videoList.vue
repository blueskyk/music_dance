<template>
	<view class="videoList">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true" @change="change" @touchstart="touchStart" @touchend="touchEnd">
				<swiper-item v-for="(item,index) in list" :key="item.id">
					<view class="swiper-item">
						<video-player :index=index @changeClick="changeClick" ref="player" :video="item"></video-player>
					</view>
					<view class="left-box">
						<list-left :item="item"></list-left>
					</view>
					<view class="right-box">
						<list-right :item="item" ref="right"></list-right>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import videoPlayer from "./videoPlayer.vue"
	import listLeft from "./listLeft.vue"
	import listRight from "./listRight.vue"
	let timer = null
	export default {
		data() {
			return {
				pageStartY: 0,
				pageEndY: 0,
				page: 0
			};
		},
		methods: {
			changeClick() {
				// 调用子组件中的change方法改变爱心颜色
				this.$refs.right[this.page].change()
			},
			change(res) {
				clearTimeout(timer) 
				this.page = res.detail.current
				timer = setTimeout(()=> {
					if(this.pageStartY < this.pageEndY) {
						this.$refs.player[this.page].player()
						this.$refs.player[this.page+1].pause()
						this.pageStartY = 0
						this.pageEndY = 0
					} else {
						this.$refs.player[this.page].player()
						this.$refs.player[this.page-1].pause()
						this.pageStartY = 0
						this.pageEndY = 0
					}
				},1)
			},
			touchStart(res) {
				this.pageStartY = res.changedTouches[0].pageY
			},
			touchEnd(res) {
				this.pageEndY = res.changedTouches[0].pageY
			}
		},
		props: {
			list: {
				type: Array
			}
		},
		components: {
			videoPlayer,
			listLeft,
			listRight
		}
	}
</script>

<style lang="scss">
	.videoList {
		width: 100%;
		height: 100%;

		.swiper-box {
			width: 100%;
			height: 100%;
		}

		.swiper {
			width: 100%;
			height: 100%;
		}

		.swiper-item {
			width: 100%;
			height: 100%;
		}

		.left-box {
			z-index: 20;
			position: absolute;
			bottom: 100rpx;
			left: 20rpx;
		}

		.right-box {
			z-index: 20;
			position: absolute;
			bottom: 100rpx;
			right: 20rpx;
		}
	}
</style>
