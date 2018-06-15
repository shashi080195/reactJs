import React, { Component } from "react"

export default class Text extends Component {
	render() {
		return <p style={this.props.style}>{this.props.children}</p>
	}
}
