import React, { Component } from 'react';
import { Form } from 'reactstrap';

class CommentForm extends Component {
    state = {
        u_name: '',
        content: '',
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
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
                <h5>Comment Here:</h5>
                <div class="form-group">
                    <Form role="form" onSubmit={this.handleOnSubmit}>
                        <input 
                            class="form-control"
                            name="u_name" 
                            type="text" 
                            placeholder="Your Name Please" 
                            value={this.state.u_name} 
                            required 
                            onChange={this.handleOnChange} />
                        <input  
                            class="form-control"
                            name="content" 
                            type="textarea"
                            placeholder="Enter Comment" 
                            value={this.state.content}
                            required
                            onChange={this.handleOnChange}/>
                        <button type="submit">Submit</button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default CommentForm;