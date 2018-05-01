import React, { Component } from 'react';

class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      inputText: ''
    }
  }
  componentWillMount() {
    this._loadUserName();
  }
  _loadUserName() {
    const usrName = localStorage.getItem('userName');
    if (usrName) {
      this.setState({userName: usrName});
    }
  }
  _saveUserName(userName) {
    localStorage.setItem('userName', userName);
  }

  inputNameHandler(event) {
    this.setState({userName: event.target.value});
  }
  usernameBlurHandler(event) {
    this._saveUserName(event.target.value);
  }
  inputTextHandler(event) {
    this.setState({inputText: event.target.value});
  }
  submitHandler() {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        userName: this.state.userName,
        inputText: this.state.inputText,
        creationTime: +new Date()
      });
      this.setState({inputText: ''});
    }
  }
  render() {
    return(
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.userName}
              onChange={this.inputNameHandler.bind(this)}
              onBlur={this.usernameBlurHandler.bind(this)}/>
          </div>
        </div>

        <div className='comment-field'>
          <span className='comment-field-name'>评论：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.inputText} onChange={this.inputTextHandler.bind(this)}/>
          </div>
        </div>

        <div className='comment-field-button'>
          <button onClick={this.submitHandler.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput
