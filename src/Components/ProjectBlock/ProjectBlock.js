import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        border: 'none'
    }
};

export default function ProjectBlock({ body, projectName, photo, githubUrl, featuredImg, youtube }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <section className="project-container">
            <div className="blurb-container">
                <h2 className="project-title">
                    {projectName}
                </h2>
                <p className="project-blurb">
                    {body}
                </p>
                <div className="github-project-link link-list">
                    <p className="link-margin">
                        <a href={githubUrl}>
                            <div className="name-container link-block">
                                <h2 className="main-name external-link">GitHub</h2>
                                <div className="second-name-container">
                                    <h2 className="second-name external-link">GitHub</h2>
                                </div>
                            </div>
                        </a>
                    </p>
                    {youtube ?
                        (<p className="link-margin">
                            <a href={youtube} >
                                <div className="name-container link-block">
                                    <h2 className="main-name external-link">YouTube</h2>
                                    <div className="second-name-container">
                                        <h2 className="second-name external-link">YouTube</h2>
                                    </div>
                                </div>
                            </a>
                        </p>) : <></>
                    }
                </div>
            </div>
            <div className={"project-image-container"}>
                {featuredImg ?
                    <img onClick={openModal} src={featuredImg} alt={`screenshot of ${projectName}`} className={`project-img`} /> :
                    <img onClick={openModal} src={photo} alt={`screenshot of ${projectName}`} className={`project-img`} />
                }

            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {featuredImg ?
                    <img src={featuredImg} alt={`screenshot of ${projectName}`} className={`modal-img`} /> :
                    <img src={photo} alt={`screenshot of ${projectName}`} className={`modal-img`} />
                }
            </Modal>
        </section>
    );
}
