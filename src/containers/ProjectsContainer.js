import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ProjectList from '../components/Projects/ProjectList'
import ProjectDetails from '../components/Projects/ProjectDetails'
import { fetchProjects } from "../actions/fetchProjects";
import Loading from '../components/Loading'

class ProjectsContainer extends Component {
    componentDidMount() {
        this.props.fetchProjects()
    }

    render() {
        const { projects, loading } = this.props
        return(
            <div id='projects-container'>
                {
                    loading ?
                    <Loading />
                    :
                    < >
                        <Route path='/projects/:projectId' render={routerProps => <ProjectDetails {...routerProps} projects={projects} />} />
                        <Route exact path='/projects' render={() =>
                            <div id='portfolio'>
                                <h1>PORTFOLIO</h1>
                                <br /><br />
                                <ProjectList projects={projects}/>
                                <br /><br /><br /><br />
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
        projects: state.projects.projects,
        loading: state.projects.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch(fetchProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)