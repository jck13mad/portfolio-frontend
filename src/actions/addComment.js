export const addComment = comment => {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/projects/${comment.project_id}/comments`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(comment)
        })
        .then(resp => resp.json())
        .then(newComment => dispatch({type: 'ADD_COMMENT', comment: newComment}))
    }
}