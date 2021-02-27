import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectItem({ project, setImgUrl, imgUrl }) {
    const handleEnter = () => {
        setImgUrl({ url: project.photo, inOrOut: 'in' });
    };

    const handleLeave = () => {
        setImgUrl({ url: '', inOrOut: 'out' });
    };
    return (
        <div>
            <Link to={project.link} >
                <div class="name-container link-block" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    <h2 className="main-name project-link">{project.name}</h2>
                    <div className="second-name-container">
                        <h2 className="second-name project-link">{project.name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
}
