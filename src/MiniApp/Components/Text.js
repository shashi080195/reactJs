import React,{Component} from "react";

export default class Text extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <p style={this.props.style}>
                {this.props.children}
            </p>
        );

    }
}