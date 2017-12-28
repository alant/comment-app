import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    }
  }
  submitEventHandler(content) {
    this.state.comments.push(content);
    this.setState({comments:this.state.comments});
  }
  render() {
    return (
      <div className="appWrapper">
        <CommentInput onSubmit={this.submitEventHandler.bind(this)} />
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
