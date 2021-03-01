import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectItem from "../ProjectItem/ProjectItem";

export default function Menu() {

    const projects = useSelector(state => state.projectReducer);

    const [imgUrl, setImgUrl] = useState({ url: '', inOrOut: 'out' });

    const handleEnter = (url) => {
        setImgUrl({ url: url, inOrOut: 'in' });
    };

    const handleLeave = () => {
        setImgUrl({ url: '', inOrOut: 'out' });
    };


    return (
        <section className="menu-container">
            <div className="link-container">
                <ul className="link-list">
                    {projects.map((project) => (
                        <li key={project.linkClassName}>
                            <ProjectItem
                                handleEnter={handleEnter}
                                handleLeave={handleLeave}
                                project={project}
                                setImgUrl={setImgUrl} />
                        </li>
                    ))}
                    <li>
                        <Link to="/about">
                            <div className="name-container link-block" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                                <h2 className="main-name project-link">About</h2>
                                <div className="second-name-container">
                                    <h2 className="second-name project-link">About</h2>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`project-preview-container ${imgUrl.inOrOut}`}>
                {projects.map((image) => {
                    return imgUrl.url === image.photo ?
                        <img key={image.linkClassName} className={`project-preview-img img-in`} src={image.photo} alt={`${image.name} screen shot`} /> :
                        <img key={image.linkClassName} className={`project-preview-img img-out`} src={image.photo} alt={`${image.name} screen shot`} />;
                }
                )}
                {/* <img className={`project-preview-img `} src={imgUrl.url} /> */}
            </div>
        </section>
    );
}
