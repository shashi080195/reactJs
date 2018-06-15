import React, { Component } from "react"
import { connect } from "react-redux"
import { getUserData } from "./saga"
import { Row, Col, Card } from "antd"
import { Text, LoginForm } from "../../Components"
class Auth extends Component {
	constructor(props) {
		super(props)
		this.state = {
			width: window.innerWidth,
			height: window.innerHeight,
			isError: false,
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
		this.handleLoginForm = this.handleLoginForm.bind(this)
	}
	componentWillMount() {
		this.props.dispatch(getUserData({}))
		this.updateWindowDimensions()
		window.addEventListener("resize", this.updateWindowDimensions)
	}

	updateWindowDimensions() {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}

	handleLoginForm(data) {
		console.log(data, this.props.user)
		let result =
			this.props.user.filter(
				row =>
					row.name === data.username && row.id.toString() === data.password,
			).length === 1
		if (result === true) {
			this.props.history.push("/dashboard")
		} else {
			this.setState({
				isError: true,
			})
		}
	}

	render() {
		const { width, height } = this.state
		return (
			<div>
				<Row
					type="flex"
					justify="center"
					align="middle"
					style={{
						width: width,
						height: height,
						backgroundColor: "#D6EAF8",
					}}>
					<Col span={6}>
						<Card
							bordered={true}
							title={
								<Text
									style={{
										fontSize: 25,
										color: "#85c1e9",
										fontFamily: "courier",
									}}>
									{"Login"}
								</Text>
							}>
							<LoginForm
								handleLoginForm={this.handleLoginForm}
								isError={this.state.isError}
							/>
						</Card>
					</Col>
				</Row>
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
