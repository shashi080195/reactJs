import React from "react"
import { Form, Icon, Input, Button, Checkbox } from "antd"
import PropTypes from "prop-types"
const FormItem = Form.Item

class NormalLoginForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.handleLoginForm(values)
			}
		})
	}

	render() {
		const { getFieldDecorator } = this.props.form
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator("username", {
						rules: [{ required: true, message: "Please input your username!" }],
					})(
						<Input
							prefix={<Icon type="user" style={{ fontSize: 13 }} />}
							placeholder="Username"
						/>,
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator("password", {
						rules: [{ required: true, message: "Please input your Password!" }],
					})(
						<Input
							prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
							type="password"
							placeholder="Password"
						/>,
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator("remember", {
						valuePropName: "checked",
						initialValue: true,
					})(<Checkbox>Remember me</Checkbox>)}
					{this.props.isError === true && (
						<p
							style={{
								color: "#ff0000",
							}}>
							{"Incorrect username or password"}
						</p>
					)}
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button">
						Log in
					</Button>
				</FormItem>
			</Form>
		)
	}
}

const LoginForm = Form.create()(NormalLoginForm)
LoginForm.propTypes = {
	handleLoginForm: PropTypes.func.isRequired,
}
export default LoginForm
