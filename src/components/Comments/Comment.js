import React from 'react';
import Moment from 'react-moment';
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';


const Comment = ({ comment }) => {
    return(
        <div>
            <Card 
                bg='light'
            >
                <CardTitle class="card-header">
                    <b>{comment.u_name}</b>
                </CardTitle>
                <CardSubtitle><Moment fromNow>{comment.created_at}</Moment></CardSubtitle>
                <CardBody>
                    <CardText>{comment.content}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default Comment