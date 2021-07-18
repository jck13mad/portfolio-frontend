import React from 'react';
import Project from './Project'

const ProjectList = ({ projects }) => {
    // debugger
    const renderProjects = projects.map(project => 
        <Project key={project.id} project={project} />
    )
    return(
            <div>
                    {( projects.length > 0) ?
                        renderProjects
                        :
                        <i>There are no results.</i>
                    } 
            </div>
    )
}

export default ProjectList