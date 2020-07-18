import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';

class Blog extends Component {
    state = { 
        posts: []
     };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            const posts = response.data.slice(0, 9);
            const updatedPosts = posts.map(post => {
                return {
                    ...post, author: 'elver'
                }
            });
            console.log(updatedPosts);
            this.setState({ posts: updatedPosts });
        });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post title={post.title}/>
        });
        return (
            <div className='Blog'>
                {posts}
            </div>
        );
    };
}

export default Blog;