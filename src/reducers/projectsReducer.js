const projectsReducer = ( state = {
    allProjects: [],
    loading: false
}, action) => {
    switch (action.type) {
        case 'LOADING_PROJECTS':
            return {
                ...state,
                allProjects: [...state.allProjects],
                loading: true
            }

        case 'ADD_PROJECTS':
            return {
                ...state,
                allProjects: action.projects,
                loading: false
            }

        case 'ADD_COMMENT':
            let index = state.projects.findIndex(project => project.id === action.comment.project_id);
            let project = state.filteredProjects[index];
          
            return {
                ...state,
                filteredProjects: [
                    ...state.projects.slice(0, index),
                    { ...project, comments: project.comments.concat(action.comment) },
                    ...state.projects.slice(index + 1)
                ]
            }
         
        default:
            return state;
    }
}

export default projectsReducer;