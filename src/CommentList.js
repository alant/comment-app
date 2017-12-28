import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render() {
    return(
      <div className='comment-list'>
        {this.props.comments.map(
          (cmt,i) => {
            return(
              <div key={i}>
                <Comment comment={cmt} />
              </div>
            );
          }
        )}
      </div>
    );
  }
}

export default CommentList
