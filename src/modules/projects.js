import { descriptions } from './descriptions.js';

class Project {
    constructor(name, link, photo, linkClassName, body, githubUrl, featuredImg, youtube) {
        this.name = name;
        this.link = link;
        this.photo = photo;
        this.linkClassName = linkClassName;
        this.body = body;
        this.githubUrl = githubUrl;
        this.featuredImg = featuredImg;
        this.youtube = youtube;
    }
}

const grubGoblin = new Project('Grub Goblin', '/gg', 'images/gg-login.png', 'grub-goblin-img', descriptions.gg, 'https://github.com/jappelgren/grub-goblin', 'images/gg-dashboard.png', 'https://youtu.be/hHvcLQsFrpw');
const saga = new Project('SAGA', '/saga', 'images/saga-screen.png', 'saga-img', descriptions.saga, 'https://github.com/jappelgren/movie-sagas');
const gallery = new Project('Photo Gallery', '/gallery', 'images/gallery.png', 'gallery-img', descriptions.gallery, 'https://github.com/jappelgren/react-gallery');
const groupProject = new Project('SnowSwaps', '/snowswap', 'images/snowswaps.png', 'group-project-img', descriptions.snowSwaps, 'https://github.com/jappelgren/snow-swaps');
const serverSideCalc = new Project('MI-108 Calculator', '/calc', 'images/calc.png', 'calc-img', descriptions.calc, 'https://github.com/jappelgren/jquery-server-side-calculator');
const td = new Project('TD', '/td', 'images/td.png', 'td-img', descriptions.td, 'https://github.com/jappelgren/weekend-sql-to-do-list');

const projects = [
    grubGoblin,
    saga,
    gallery,
    td,
    serverSideCalc,
    groupProject
];

export default projects;