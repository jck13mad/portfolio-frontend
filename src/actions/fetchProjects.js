export const fetchProjects = () => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_PROJECTS' })
        fetch('http://localhost:3000/api/v1/projects')
        .then(resp => resp.json())
        .then(respJSON => dispatch({ type: 'ADD_PROJECTS', projects: respJSON }))
    }
}