import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    
    let newLabels = project.label.split(" ")
    let labelList = [];
    newLabels.forEach((label, index) => {
        labelList.push(<li key={index}>| <b>{label}</b> |</li>)
    })

    return(
        <div id='project-list'>
            <Link key={project.id} to={`/projects/${project.id}`}>
                <h4><a>{project.name}</a></h4>
            </Link>
            <img alt={project.name} src={project.image_url}/>
            <hr />
            <ul class="label-list" >
                {labelList}
            </ul>
            <hr />
        </div>
    )

}

export default Project