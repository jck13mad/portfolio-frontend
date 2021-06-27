import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ProjectList from '../components/Projects/ProjectList'
import ProjectDetails from '../components/Projects/ProjectDetails'
import { fetchProjects } from "../actions/fetchProjects";
import Loading from '../images/loading.gif'

class ProjectsContainer extends Component {
    componentDidMount() {
        this.props.fetchProjects()
    }

    render() {
        const { loading } = this.props
        return(
            <div id='projects-container'>
                {
                    loading ?
                    //loading image
                    <img src={Loading} alt='loading' />
                    :
                    < >
                        <Route path='/projects/:projectId' render={routerProps => <ProjectDetails {...routerProps} />} />
                        <Route exact path='/projects' render={() =>
                            <div id='portfolio'>
                                <h1>PORTFOLIO</h1>
                                <h3>My Latest Projects</h3>
                                <ProjectList />
                            </div>
                        } />
                    </ >
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.projects.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch(fetchProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)