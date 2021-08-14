import React, { Component } from 'react'
import Comments from '../components/Comments/Comments'
import CommentForm from '../components/Comments/CommentForm.js'
import { addComment } from "../actions/addComment";
import { connect } from 'react-redux';

class CommentsContainer extends Component {
    render() {
        return (
            <div id='comments-container'>
                <CommentForm
                    addComment={this.props.addComment}
                    projectId={this.props.project.id}
                />
                <br />
                {this.props.project.comments.length > 0 ?
                    <Comments
                        projectComments={this.props.project.comments}
                    />
                    :
                    <div></div>
                }
                <br />
            </div>
        )
    }
}

export default connect(null, { addComment })(CommentsContainer);