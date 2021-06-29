const initialState = {
    allProjects: [],
    loading: false
}

export default function projectsReducer( state = 
    initialState, action) {
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
            let index = state.allProjects.findIndex(project => project.id === action.comment.project_id);
            let project = state.allProjects[index];
          
            return {
                ...state,
                allProjects: [
                    ...state.allProjects.slice(0, index),
                    { ...project, comments: project.comments.concat(action.comment) },
                    ...state.allProjects.slice(index + 1)
                ]
            }
         
        default:
            return state;
    }
}