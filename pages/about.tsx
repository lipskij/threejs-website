import { NextPage } from "next";
import React from "react";
import Nav from "../components/Nav";
import about from "../styles/Home.module.css";

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
        @media screen and (max-width: 480px) {
          .about {
            width: 80%;
            text-align: center;
            margin-bottom: 5rem;
            height: 100%;
          }
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
        <div className={about.hexagons1}>
          <svg x='0px' y='0px' viewBox='0 0 490 490' fill='#5bf1f6'>
            <g>
              <polygon points='0,186.26 107.264,247.871 214.529,186.26 214.529,63.04 107.264,1.429 0,63.04 	' />
              <polygon points='275.471,63.04 275.471,186.26 382.735,247.871 490,186.26 490,63.04 382.735,1.429 	' />
              <polygon points='137.954,303.74 137.954,426.96 245.219,488.571 352.484,426.96 352.484,303.74 245.219,242.13 	' />
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default About;
