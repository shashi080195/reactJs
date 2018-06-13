import React, { Component } from "react"
import { connect } from "react-redux"
import { getUserData } from "./saga"
class Auth extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentWillMount() {
		this.props.dispatch(getUserData({}))
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
	}
	render() {
		return (
			<div>
				<p>{"Hello auth"}</p>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		user: state.auth.user,
	}
}
export default connect(mapStateToProps)(Auth)
