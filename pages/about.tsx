import { NextPage } from "next";
import React from "react";
import Nav from "../components/Nav";
// import about from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <div className='main'>
      <style jsx>{`
        .main {
          background-color: #141b1e;
        }
        .about {
          display: flex;
          flex-direction: column;
          text-align: left;
          width: 80%;
          height: 100vh;
          margin: 0 auto;
          color: #dbf2fe;
          line-height: 2.2;
        }
        .about h2 {
          font-size: 3rem;
          margin: 5rem 0 2rem 0;
        }

        .about p {
          font-size: 1.5rem;
        }

        .footer p {
          display: flex;
          justify-content: center;
          color: #dbf2fe;
          margin: 0 auto;
        }
      `}</style>
      <Nav />
      <section className='about'>
        <div>
          <h2>ABOUT</h2>
          <div>
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
