import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from "react-lazyload";

const Project = ({ project }) => {
    
    let newLabels = project.label.split(" ")
    let labelList = [];
    newLabels.forEach((label, index) => {
        labelList.push(<li key={index}>| <b>{label}</b> |</li>)
    })

    return(
        <div id='project-list'>
            <Link key={project.id} to={`/projects/${project.id}`}>
                <h4><a href={`/projects/${project.id}`}>{project.name}</a></h4>
                <LazyLoad height={250} once>
                    <img alt={project.name} src={project.image_url}/>
                </LazyLoad>
            </Link>
            <hr />
            <ul class="label-list" >
                {labelList}
            </ul>
            <hr />
        </div>
    )

}

export default Project