import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetchBlogPosts';
import Blog from '../components/blog/Blog'
import Loading from '../components/Loading';

class BlogsContainer extends Component {
    componentDidMount() {
        this.props.fetchBlogPosts()
    }

    render() {
        return (
            <div id='blogs-container'>
                {
                    this.props.loadingBlog ? 
                    <img src={Loading} alt='loading' />
                    :
                    < >
                        <a href="https://www.blogger.com/blog/posts/7154752201469865972"><h1>Blog</h1></a>
                        <Blog blogPosts={this.props.blogPosts} />
                    </ >
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogPosts: state.blog.blogPosts,
        loadingBlog: state.blog.loadingBlog
    }
}

export default connect(mapStateToProps, { fetchBlogPosts })(BlogsContainer)
