import React, { Component } from "react"
import Auth from "./Containers/Auth"
import { ConnectedRouter } from "connected-react-router"
import routes from "./Routes"
class MiniApp extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<ConnectedRouter history={this.props.history}>{routes}</ConnectedRouter>
		)
	}
}

export default MiniApp
