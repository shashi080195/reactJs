class MiniAppApi {
	constructor() {
		console.log("MiniAppApi instantiated")
	}

	fetchUserData(params) {
		return new Promise(function(resolve, reject) {
			try {
				console.log("params in movies", params)
				fetch("http://localhost:3001/users", {
					method: "GET",
					header: {
						"Content-Type": "application/json",
						"Acess-Control-Allow-origin": true,
					},
				}).then(response => {
					response.json().then(res => {
						resolve(res)
					})
				})
			} catch (error) {
				console.log("ERROR: ", error)
				reject(error)
			}
		})
	}
}

export default new MiniAppApi()
