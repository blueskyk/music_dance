<template>
	<view class="changeLetter">
		<view class="letterList" v-for="(item,index) in citys" :key="index">
			<view class="item" hover-class="hover" @click="initial(item.initial)" @touchstart="touchStart" @touchend="touchEnd"
			 @touchmove="touchMove">
				{{item.initial}}
			</view>
		</view>
	</view>
</template>

<script>
	let timer = null
	export default {
		data() {
			return {
				touch: false
			};
		},
		props: {
			citys: {
				type: Array
			}
		},
		methods: {
			initial(res) {
				this.$emit("change", res)
			},
			touchStart() {
				this.touch = true
			},
			touchEnd() {
				this.touch = false
			},
			touchMove(e) {
				clearTimeout(timer)
				timer = setTimeout(() => {
					if (this.touch) {
						const touchY = e.changedTouches[0].pageY - 150
						const index = Math.floor(touchY / 20)
						if (index >= 0 && index < this.citys.length) {
							this.$emit("change", this.citys[index].initial)
						} else {
							uni.showToast({
								title: "没有您想要添加的城市,往上翻翻看吧",
								icon: "none"
							})
						}
					}
				}, 30)
			}
		}
	}
</script>

<style lang="scss">
	.changeLetter {
		position: fixed;
		top: 300rpx;
		right: 0;
		z-index: 20;
		color: #fff;

		.letterList {
			width: 30rpx;

			.item {
				font-size: 24rpx;
				line-height: 30rpx;
				text-align: center;
				margin-bottom: 10rpx;
			}

			.hover {
				font-size: 40rpx;
				text-align: center;
			}
		}
	}
</style>
