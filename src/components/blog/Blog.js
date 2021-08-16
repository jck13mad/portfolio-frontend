import React from 'react';
import BlogPost from './BlogPost';

const Blog = ({ blogPosts }) => {
    const blogList = blogPosts.map(blogPost => {
        return <BlogPost key={blogPost.id} blogPost={blogPost} />
    })

    return (
        <div className="blog">
                {blogList}
        </div>
    )
}

export default Blog;