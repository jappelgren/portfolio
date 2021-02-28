import React, { useState } from 'react';
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


    const grubGoblin = new Project('Grub Goblin', '/gg', 'images/gg-login.png', 'grub-goblin-img');
    const saga = new Project('SAGA', '/saga', 'images/saga-screen.png', 'saga-img');
    const gallery = new Project('Photo Gallery', '/gallery', 'images/gallery.png', 'gallery-img');
    const groupProject = new Project('SnowSwap', '/', 'images/snowswap.jpg', 'group-project-img');
    const serverSideCalc = new Project('Server Side Calculator', '/calc', 'images/calc.png', 'calc-img');
    const td = new Project('TD', '/td', 'images/td.png', 'td-img');

    const projects = [
        grubGoblin,
        saga,
        gallery,
        td,
        serverSideCalc,
        groupProject

    ];


    return (
        <section className="menu-container">
            <div className="link-container">
                <ul className="link-list">
                    {projects.map((project) => (
                        <li key={project.linkClassName}>
                            <ProjectItem project={project} setImgUrl={setImgUrl} />
                        </li>
                    ))}
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
