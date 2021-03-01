import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectItem({ project, handleEnter, handleLeave }) {

    return (
        <div>
            <Link to={project.link} >
                <div className="name-container link-block" onMouseEnter={() => handleEnter(project.photo)} onMouseLeave={() => handleLeave(project.photo)}>
                    <h2 className="main-name project-link">{project.name}</h2>
                    <div className="second-name-container">
                        <h2 className="second-name project-link">{project.name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
}
