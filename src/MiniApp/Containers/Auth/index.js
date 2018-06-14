import React, { 
	Component,
} from "react"
import { connect } from "react-redux"
import { getUserData } from "./saga"
import { Button,
	Row,
	Col,
	Layout,
	Menu,
	Avatar,
	Breadcrumb,
	Card
	} from "antd"
import {Text} from "../../Components"
const {Content, Header, Footer} = Layout

let width = window.innerWidth

class Auth extends Component {
	constructor(props) {
		super(props)
		this.state = {
			width: window.innerWidth,
			height: window.innerHeight,
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.cardTitlle = this.cardTitlle.bind(this);
	}
	componentWillMount() {
		this.props.dispatch(getUserData({}))
		this.updateWindowDimensions();
  		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		this.setState({
			width:window.innerWidth,
			height: window.innerHeight
		})
		width: window.innerWidth
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
	}
	cardTitlle () {
		return (
			<p style={{fontSize: 20}}>{"Login"}</p>
		);
	}
	render() {
		const {width, height} = this.state
		return (
			<div>
				<Row
					type="flex"
					justify="center"
					align="middle" 
					style={{width: width, height: height}}
				>
					<Card
						style={Styles.login}
						bordered={true}
					>
						<Card.Meta
							avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							title = {
								<Text style={{
									fontSize: 25,
									color: "#ff0000"
								}}>{"Login"}</Text>
							}
							
						/>
					</Card>
				</Row>
			</div>
		)
	}
}

const Styles = {
	 login:{
		width: "35%",
		height: "50%",
		elevation: 15
	},
	container:{
		width: "100%",
		height: "100%"
	}
};

function mapStateToProps(state) {
	return {
		user: state.auth.user,
	}
}
export default connect(mapStateToProps)(Auth)
