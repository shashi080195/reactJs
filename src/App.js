import React, { Component } from 'react';
import { 
  Button,
  Grid,
  List,
  Form
} from "semantic-ui-react";
import { connect } from "react-redux";
import {createTodo} from "../src/todos/actions/todoAction";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      todos:this.props.todos,
      isAdding: false
    };
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("nextProps is", nextProps);
    if(this.state.isAdding === true){
      this.setState({
        isAdding: false,
        todos:nextProps.todos
      })
    }
    return this.state.isAdding === false ? true : false ;
  }
  render() {
    console.log("state are", this.state);
    let formdata = {};
    return (
      <div className="App">
         <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
               {
                 this.state.todos.map((child) => {
                    return(
                      <List.Item
                        key={child.id}
                      >
                        {child.name}
                      </List.Item>
                    );
                 })
               }
            </Grid.Column>
            <Grid.Column>
               <Form
               onSubmit={() => {
                  let todoList = this.state.todos;
                  todoList.push(formdata);
                  this.setState({
                    isAdding: true
                  })
                  //this.props.dispatch(createTodo(todoList));
                  this.props.createTodo(todoList);
               }}
               >
                  <Form.Input label="name" name="name" type="text"
                    onChange={(e) => {
                      formdata.name = e.target.value;
                    }}
                  />
                  <Form.Input label="id" name="id" type="text"
                    onChange={(e) => {
                      formdata.id = e.target.value;
                    }}
                  />
                  <Button type='submit'>Submit</Button>
                </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    todos:state.todos.todo
  };
}

function mapDispatchToProps(){
  return{
    createTodo: createTodo
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
