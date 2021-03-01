import React from 'react';
import LoveCss from '../LoveCss/LoveCss';
import Pipe from '../Pipe/Pipe';

export default function About() {
    return (
        <section className="about-container">
            <div className="about-text-container">
                <p className="about-text">
                    Hi, my name is Justin Appelgren.  I am a full stack software engineer with a passion for building memorable front end user
                        experiences <LoveCss />. I have over 15 years of experience leading teams, from small groups to entire organizations.
                        I love finding elegant solutions to difficult problems.
                </p>

                <br />
                <p className="about-text">
                    When I'm not slinging divs I co-host/edit/run social media for a podcast about video games called <span className="css-fan">█████ ████ ████████</span>. I make the show with my life long friend and
                    celebrity scrum master, JJ.  In addition to that I am a huge professional wrestling fan, please don't hold that against me. I did briefly train
                    to become a pro wrestler and am happy to show you how to do one of 3 moves.
                </p>
                <br />
                <p className="about-text">
                    Projects featured on this page were built with the following:
                </p>
                <p className="about-text">JavaScript <Pipe /> HTML <Pipe /> JSX <Pipe /> CSS <Pipe />Node.js <Pipe /> Express.js <Pipe /> React <Pipe /> Material-UI <Pipe /> React-Spring <Pipe /> Redux <Pipe /> Redux-Saga <Pipe /> PostgreSQL <Pipe /> jQuery <Pipe /> Git <Pipe /> GitHub <Pipe /> REST APIs <Pipe />  Puppeteer</p>
            </div>
            <div className="justin-photo-container">
                <div className="photo-container">
                    <img className="photo" src="images/gabeme.png" alt="A very charismatic and highly employable software engineer and his french bulldog, Gabe" />
                </div>
            </div>
        </section>
    );
}
