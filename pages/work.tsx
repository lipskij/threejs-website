import React from "react";
import work from "../styles/Work.module.css";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Nav from "../components/Nav";
import Image from "next/image";

const Work: NextPage = () => {
  return (
    <div className='main'>
      <style jsx>{`
        .main {
          background-color: #141b1e;
        }

        .work {
          display: flex;
          flex-direction: column;
          text-align: left;
          width: 80%;
          height: 100%;
          margin: 0 auto;
          color: #dbf2fe;
          line-height: 2.2;
        }

        .work h2 {
          font-size: 3rem;
          text-align: center;
          margin: 5rem 0;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin: 0 auto;
          width: 100%;
          height: 100vh;
        }

        .gallery p {
          font-size: 1.5rem;
        }

        .github a {
          text-decoration: none;
          color: #dbf2fe;
          transition: 0.3s;
        }

        .github a:hover {
          color: #81f5af;
          transition: 0.3s;
        }

        .lines {
          display: none;
        }
        .footer p {
          display: flex;
          justify-content: center;
          color: #dbf2fe;
          margin: 0 auto;
        }
        @media screen and (max-width: 480px) {
          .gallery {
            grid-template-columns: repeat(1, 1fr);
            text-align: center;
            gap: 5rem;
            margin-bottom: 5rem;
            height: 100%;
          }
          .github {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50vh;
          }

          .github h2 {
            align-items: center;
          }
          .lines {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 3px;
            background-color: #dbf2fe;
          }
        }
      `}</style>
      <Nav />
      <section className='work'>
        <h2>WORK</h2>
        <div className='gallery'>
          <motion.a
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            rel='noopener noreferrer'
            aria-label='skidoc'
            href='https://skidoc.fr/'
            target='_blank'
          >
            <Image src='/images/ski.webp' alt='ski' width={450} height={250} />
          </motion.a>
          <p>
            Creating internal stock management system using NoSQL, MeteorJs and
            React. Using AWS and working with CI/CD.
          </p>
          <div className='lines'></div>
          <motion.a
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            rel='noopener noreferrer'
            aria-label='rps'
            href='https://vaskichi.eu.meteorapp.com/'
            target='_blank'
          >
            <Image
              src='/images/vaskichi.webp'
              alt='rock-paper-siccors'
              width={450}
              height={250}
            />
          </motion.a>
          <p>
            Online rock paper scissors game using MeteorJs, React, MongoDB. This
            was just a learning project,but ended up being quite fun.
          </p>
        </div>
        <div className='github'>
          <h2>
            More on
            <a
              rel='noopener noreferrer'
              aria-label='github-link'
              href='https://github.com/lipskij'
              target='_blank'
            >
              <i> GitHub</i>
            </a>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Work;
