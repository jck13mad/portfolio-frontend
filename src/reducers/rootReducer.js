import { combineReducers } from "redux";
import projectsReducer from './projectsReducer'
import blogsReducer from "./blogsReducer";

const rootReducer = combineReducers({
    projects: projectsReducer,
    blog: blogsReducer
})

export default rootReducer;