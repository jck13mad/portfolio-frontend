import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    
    let newLabels = project.label.split(" ")
    let labelList = [];
    newLabels.forEach((label, index) => {
        labelList.push(<li key={index}>| <b>{label}</b> |</li>)
    })

    let img = './images/' + project.image_url

    return(
        <div>
            <Link key={project.id} to={`/projects/${project.id}`}>
                <h4>{project.name}</h4>
            </Link>
            <img alt={project.name} src={img} />
            <ul class="label-list" >
                {labelList}
            </ul>
            <hr />
        </div>
    )

}

export default Project