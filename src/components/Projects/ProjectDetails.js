import React from 'react';
import { Link } from 'react-router-dom'
import { Markup } from 'interweave';

const ProjectDetails = ({projects}) => {
    const renderProject = () => {
        const img = project.image_url

        let newLabels = project.label.split(" ")
        let labelList = [];
        newLabels.forEach((label, index) => {
            labelList.push(<li key={index}>{label}</li>)
        })

        return[
            <Container>
                <Link to={'/projects'}>
                    Back to All Projects
                </Link>

                <div>
                    <h3>{project.name}</h3>
                    <img alt="{project.name}" src="{img}" />
                    <ul>
                        {labelList}
                    </ul>
                    <p>{project.description}</p>

                </div>
                {project.blog_url ? <button onClick={() => window.open(project.blog_url, "_blank")}>BLOG POST</button> : null}
                {project.github_url ? <button onClick={() => window.open(project.github_url, "_blank")}>GITHUB</button> : null}
                <hr />
                <CommentsContainer project={project} />
            </Container>
        ]
    }

    return (
        < >
            {project ? renderProject() : <i>Sorry, but this project does not exist.</i>}
            <Link to={'/projects'}>
                Back to All Projects
            </Link>
        </>
    )
}