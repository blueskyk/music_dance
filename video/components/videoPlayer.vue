<template>
	<view class="videoplayer">
		<video :controls="false" :autoplay="autoplay" @click="played" loop id="myVideo"  objectFit="cover" :src="`http://192.168.1.104:4000/video/${video.src}`"></video>
	</view>
</template>

<script>
	let timer = null
	export default {
		props: {
			video: {
				type: Object
			},
			index: {
				type: Number
			}
		},
		data() {
			return {
				play: false,
				dbClick: false,
				autoplay: false
			};
		},
		onReady() {
			this.videoContent = uni.createVideoContext("myVideo",this)
		},
		methods: {
			played() {
				clearTimeout(timer)
				this.dbClick = !this.dbClick
				setTimeout(() => {
					if(this.dbClick) {
						if(this.play === false) {
							this.playing()
						} else {
							this.pause()
						}
					} else {
						this.$emit("changeClick")
					}
					this.dbClick = false
				},300)
				
			},
			player() {
				if(this.play === false) {
					this.videoContent.seek(0)
					this.videoContent.play()
					this.play = true
				}
			},
			pause() {
				if(this.play === true) {
					this.videoContent.pause()
					this.play = false
				}
				
			},
			playing() {
				if(this.play === false) {
					this.videoContent.play()
					this.play = true
				}
			},
			auto() {
				if(this.index === 0) {
					this.autoplay = true
				}
			}
		},
		created() {
			this.auto()
		},
	}
</script>

<style lang="scss">
.videoplayer {
	width: 100%;
	height: 100%;
	video {
		width: 100%;
		height: 100%;
	}
}
</style>
