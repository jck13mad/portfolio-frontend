import React from 'react';
import Moment from 'react-moment';
import Card from 'react-bootstrap/card'

const BlogPost = ({ blogPost }) => {
    return (
        <div  className="blog-sing">
            <a href={blogPost.url}>
                <Card className="blog-card">
                    <Card.Body>
                        <Card.Title>{blogPost.title}</Card.Title>
                        <Card.Text>{blogPost.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Posted on <Moment format='MMM DD, YYYY'>{blogPost.published}</Moment></small>
                    </Card.Footer>
                </Card>
            </a>
        </div>
    )
}

export default BlogPost