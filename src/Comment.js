import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return(
      <div className='comment'>
        <div className='comment-username'>
          <span>{this.props.comment.userName}: </span>
        </div>
          <p>{this.props.comment.inputText}</p>
      </div>
    );
  }
}

export default Comment
