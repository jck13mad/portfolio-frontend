import React from 'react';
import Project from './Project'

const ProjectList = ({ projects }) => {
    const renderProjects = projects.map(project => 
        <Project key={project.id} project={project} />
    )

    return(
        < >
            {( projects.length > 0) ?
                renderProjects
                :
                <i>There are no results.</i>
            } 
        </ >
    )
}

export default ProjectList