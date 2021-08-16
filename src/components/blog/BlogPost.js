import React from 'react';
import Moment from 'react-moment';
import Card from 'react-bootstrap/card'

const BlogPost = ({ blogPost }) => {
    return (
        <div  className="blog">
            <Card>
                <Card.Body>
                    <Card.Title>{blogPost.title}</Card.Title>
                    <Card.Text>{blogPost.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Posted on <Moment format='MMM DD, YYYY'>{blogPost.published_timestamp}</Moment></small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default BlogPost