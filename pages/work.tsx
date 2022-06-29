import React from "react";
import work from "../styles/Work.module.css";
import about from "../styles/About.module.css";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Nav from "../components/Nav";
import Image from "next/image";

const Work: NextPage = () => {
  return (
    <div className={work.main}>
      <Nav />
      <section className={work.work}>
        <h2>WORK</h2>
        <div className={work.gallery}>
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
          <div className={work.lines}></div>
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
        <div className={work.github}>
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
