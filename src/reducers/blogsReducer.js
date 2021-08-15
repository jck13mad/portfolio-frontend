const blogsReducer = (state = {
    blogs: [],
    loadingBlog: false 
}, action) => {
    switch (action.type) {
        case 'LOADING_BLOG':
            return {
                ...state,
                blogs: [...state.blogs],
                loadingBlog: true
            }

        case 'ADD_BLOG':
            return {
                ...state,
                blogs: action.blog,
                loadingBlog: false
            }

        default:
            return state    
    }
}

export default blogsReducer;