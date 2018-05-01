import React, { Component } from 'react';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      timeString: ''
    }
  }
  componentWillMount() {
    this._computeTimeString();
    this._timer = setInterval(this._computeTimeString.bind(this), 5000);
  }
  componentWillUnmount() {
    clearInterval(this._timer);
  }
  deleteHandler() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }

  _computeTimeString() {
    const secLapsed = (+new Date() - this.props.comment.creationTime) / 1000;
    if (secLapsed > 3600) {
      this.setState(
        {timeString: `${Math.round(secLapsed / 3600)} 小时前`}
      );
    } else if (secLapsed >  60){
      this.setState(
        {timeString: `${Math.round(secLapsed / 60)} 分前`}
      );
    } else {
      this.setState(
        {timeString: `${Math.max(secLapsed, 1)} 秒前`}
      );
    }
  }
  render() {
    return(
      <div className='comment'>
        <div className='comment-username'>
          <span>{this.props.comment.userName}: </span>
        </div>
        <p>{this.props.comment.inputText}</p>
        <div className='comment-time'>
          <span>{this.state.timeString}</span>
        </div>
        <span onClick={this.deleteHandler.bind(this)} className='comment-delete'>删除</span>
      </div>
    );
  }
}

export default Comment
