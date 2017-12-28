import React, { Component } from 'react';

class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      inputText: ''
    }
  }
  inputNameHandler(event) {
    this.setState({userName: event.target.value});
  }
  inputTextHandler(event) {
    this.setState({inputText: event.target.value});
  }
  submitHandler() {
    if (this.props.onSubmit) {
      const {userName, inputText} = this.state;
      this.props.onSubmit({userName, inputText});
      this.setState({inputText: ''});
    }
  }
  render() {
    return(
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.userName} onChange={this.inputNameHandler.bind(this)}/>
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
