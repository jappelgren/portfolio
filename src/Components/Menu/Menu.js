import React, { useEffect, useState } from 'react';
import ProjectItem from "../ProjectItem/ProjectItem";

export default function Menu() {
    class Project {
        constructor(name, link, photo, linkClassName) {
            this.name = name;
            this.link = link;
            this.photo = photo;
            this.linkClassName = linkClassName;
        }
    }
    const [imgUrl, setImgUrl] = useState({ url: '', inOrOut: 'out' });


    console.log('imAGE url', imgUrl);

    const grubGoblin = new Project('Grub Goblin', '/gg', 'images/gg-login.png', 'grub-goblin-img');
    const saga = new Project('SAGA', '/saga', 'images/download.png', 'saga-img');
    const feedback = new Project('Daily Feedback Form', '/dailyfeedback', 'images/download.png', 'feedback-img');
    const groupProject = new Project('SnowSwap', '/', 'images/download.png', 'group-project-img');
    const serverSideCalc = new Project('Server Side Calculator', '/calc', 'images/download.png', 'calc-img');
    const td = new Project('TD', '/td', 'images/download.png', 'td-img');

    const projects = [
        grubGoblin,
        saga,
        feedback,
        serverSideCalc,
        td,
        groupProject
    ];

    useEffect(() => {

    }, [imgUrl]);


    return (
        <section className="menu-container">
            <div className="link-container">
                <ul className="link-list">
                    {projects.map((project) => (
                        <li>
                            <ProjectItem project={project} setImgUrl={setImgUrl} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`project-preview-container ${imgUrl.inOrOut}`}>
                {projects.map((image) => {
                    return imgUrl.url === image.photo ? <img className={`project-preview-img img-in`} src={image.photo} /> : <img className={`project-preview-img img-out`} src={image.photo} />;
                }
                )}
                {/* <img className={`project-preview-img `} src={imgUrl.url} /> */}
            </div>
        </section>
    );
}
