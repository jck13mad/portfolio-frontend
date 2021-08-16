import React from 'react';
import BlogPost from './BlogPost';

const Blog = ({ blogPosts }) => {
    const blogList = blogPosts.map(blogPost => {
        return <BlogPost key={blogPost.id} blogPost={blogPost} />
    })

    return (
        <div>
            <h1>Blog</h1>
            <div>
                {blogList}
            </div>
        </div>
    )
}

export default Blog;