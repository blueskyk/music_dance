export default (params) => {
	return new Promise((resolve, reject) => {
		uni.request({
			...params,
			success: (res) => {
				resolve(res)
			},
			error: (err) => {
				reject(err)
			},
			complete() {}
		})
	})
}