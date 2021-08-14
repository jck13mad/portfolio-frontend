import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import CommentsContainer from '../../containers/CommentsContainer'

const ProjectDetails = ({ match, projects }) => {
    const project = projects.find(proj => proj.id.toString() === match.params.projectId)
    const renderProject = () => {

        let newLabels = project.label.split(" ")
        let labelList = [];
        newLabels.forEach((label, index) => {
            labelList.push(<li key={index}>| <b>{label}</b> |</li>)
        })

        return[
            <Container>
                <br />
                <br />
                <div className="project-head">
                    <h3>{project.name}</h3>
                    <ul class="label-list">
                        {labelList}
                    </ul>
                    <p>{project.description}</p>

                </div>
                {project.blog_url ? <button onClick={() => window.open(project.blog_url, "_blank")}>BLOG POST</button> : null}
                {project.github_url ? <button onClick={() => window.open(project.github_url, "_blank")}>GITHUB</button> : null}
                <hr />
                <CommentsContainer project={project} />
                <br />
                <Link to={'/projects'}>
                    Back to All Projects
                </Link>
                <br /><br /><br /><br /><br /><br /><br /><br />
            
            </Container>
        ]
    }

    return (
        < >
            {project ? renderProject() : <i>Sorry, but this project does not exist.</i>}
            {/* <Link to={'/projects'} id="back-bottom">
                Back to All Projects
            </Link> */}
        </>
    )
}

export default ProjectDetails