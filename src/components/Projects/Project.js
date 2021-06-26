import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    
    let newLabels = project.label.split(" ")
    let labelList = [];
    newLabels.forEach((label, index) => {
        labelList.push(<li key={index}>{label}</li>)
    })

    const img = project.image_url

    return(
        <div>
            <Link key={project.id} to={`/projects/${project.id}`}>
                <h4>{project.name}</h4>
            </Link>
            <img alt="project image" src={img} />
            <ul>
                {labelList}
            </ul>
            <hr />
        </div>
    )

}

export default Project