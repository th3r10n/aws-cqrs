import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
        <div className='Post'>{this.props.title}</div>
        );
    };
}

export default Post;