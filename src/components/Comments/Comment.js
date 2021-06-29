import React from 'react';
import Moment from 'react-moment';
import { Card } from 'reactstrap';

const Comment = ({ comment }) => {
    return(
        <div>
            <Card 
                bg='light'
                style={{ width: '100%' }}
            >
                <Card.Header>
                    <b>{comment.u_name}</b>
                    <br />
                    <Moment fromNow>{comment.created_at}</Moment>
                </Card.Header>

                <Card.Body>
                    <Card.Text>{comment.content}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Comment