import React, { Component } from "react"
import Auth from "./Containers/Auth"
class MiniApp extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return <Auth />
	}
}

export default MiniApp
