import { NextPage } from "next";
import React from "react";
import Nav from "../components/Nav";
import about from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <div className={about.main}>
      <Nav />
      <section className={about.about}>
        <div>
          <h2>ABOUT</h2>
          <div className={about.aboutText}>
            <p>
              I&apos;m a self tought Developer from Vilnius Lithuania.
              <br />
              Finished Front End Masters online courses.
              <br />
              I enjoy creating responsive,fast-loading, dynamic user
              experiences.
              <br />
              Previously worked with circus troupe as an acrobat and juggler.
              Eager to learn new technologies and to create new things.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
