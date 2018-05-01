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
  componentWillMount() {
    this._loadComments();
  }
  _loadComments() {
    const storedComments = localStorage.getItem('comments');
    this.setState({comments: JSON.parse(storedComments)});
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
  }
  submitEventHandler(content) {
    const prevComments = this.state.comments;
    prevComments.push(content);
    this.setState({comments:prevComments});
    this._saveComments(prevComments);
  }
  handleDeleteComment(index) {
    console.log('app:handleDeleteComment: ', index);
    const comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({ comments });
    this._saveComments(comments);
  }
  render() {
    return (
      <div className="appWrapper">
        <CommentInput onSubmit={this.submitEventHandler.bind(this)} />
        <CommentList comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    );
  }
}

export default App;
