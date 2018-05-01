import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }
  render() {
    return(
      <div className='comment-list'>
        {this.props.comments.map(
          (cmt,i) => {
            return(
              <div key={i}>
                <Comment index={i} comment={cmt}
                  onDeleteComment={this.handleDeleteComment.bind(this)}
                />
              </div>
            );
          }
        )}
      </div>
    );
  }
}

export default CommentList
