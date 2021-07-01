const initialState = {
    allProjects: [],
    projects: [],
    loading: false
}

const projectsReducer = ( state = initialState, action) => {
    // let projects = []

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
                projects: action.projects,
                loading: false
            }

        case 'ADD_COMMENT':
            debugger
            let index = state.projects.findIndex(project => project.id === action.comment.project_id);
            let project = state.projects[index];
          
            return {
                ...state,
                projects: [
                    ...state.projects.slice(0, index),
                    { ...project, comments: project.comments.concat(action.comment) },
                    ...state.projects.slice(index + 1)
                ]
            }
         
        default:
            return state;
    }
}

export default projectsReducer