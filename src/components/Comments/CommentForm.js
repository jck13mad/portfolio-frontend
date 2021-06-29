import React, { Component } from 'react';
import { Button, Card, Col, Form } from 'reactstrap';

class CommentForm extends Component {
    state = {
        u_name: '',
        content: '',
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()

        const comment = {
            ...this.state,
            project_id: this.props.projectId,
        }

        this.props.addComment(comment)

        this.setState({
            u_name: '',
            content: '',
        })
    }

    render(){
        return(
            <div>
                <Card>
                    <Form role="form" onSubmit={this.handleOnSubmit}>
                        <h5>Comment Here:</h5>
                        <Col>
                            <Form.Group controlId="formUser">
                                <Form.Control
                                    name="u_name"
                                    type="text"
                                    placeholer="Your Name"
                                    value={this.state.u_name}
                                    required
                                    onChange={this.handleOnChange}
                                />
                            </Form.Group>
                        </Col> 
                            <Form.Group controlId="formContent">
                                <Form.Control
                                    name="content"
                                    as="textarea"
                                    rows="3"
                                    placeholer="Enter Comment"
                                    value={this.state.value}
                                    required
                                    onChange={this.handleOnChange}
                                />
                            </Form.Group>
                            <Button type="submit">Submit Comment</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default CommentForm