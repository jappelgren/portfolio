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

export default function ProjectBlock({ body, projectName, photo, githubUrl }) {
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
                    <a href={githubUrl} >
                        <div className="name-container link-block">
                            <h2 className="main-name project-link">GitHub</h2>
                            <div className="second-name-container">
                                <h2 className="second-name project-link">GitHub</h2>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className={"project-image-container"}>
                <img onClick={openModal} src={photo} alt={`screenshot of ${projectName}`} className={`project-img`} />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img src={photo} alt="" className="modal-img" />
            </Modal>
        </section>
    );
}
