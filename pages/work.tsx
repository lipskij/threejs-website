import React from "react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Nav from "../components/Nav";
import Image from "next/image";
import about from "../styles/Home.module.css";

const projects = [
  {
    href: "https://skidoc.fr/",
    src: "/images/ski.webp",
    text: "Creating internal stock management system using NoSQL, MeteorJs and React. Using AWS and working with CI/CD.",
  },
  {
    href: "https://easyproduction.org",
    src: "/images/easy.webp",
    text: "Film maker and producer personal website to showcase work and projects. For this website I used Nextjs,Framer motion for animations and page transitions.",
  },
  {
    href: "https://jankenpon.org",
    src: "/images/vaskichi.webp",
    text: "Online rock paper scissors game using MeteorJs, React, MongoDB. This  was just a learning project,but ended up being quite fun.",
  },
];

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

          width: 100%;
          height: 100%;
          margin-bottom: 10rem;
        }

        .gallery p {
          font-size: 1.5rem;
        }

        .hexagon {
          position: absolute;
          width: 150px;
          height: 150px;
          top: 65%;
          right: 120px;
          opacity: 30%;
        }
        @media screen and (max-width: 480px) {
          .gallery {
            grid-template-columns: repeat(1, 1fr);
            text-align: center;
            gap: 5rem;
            margin-bottom: 5rem;
            height: 100%;
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
        <div className='hexagon'>
          <svg x='0px' y='0px' viewBox='0 0 790 790' fill='#5bf1f6'>
            <g>
              <polygon points='0,186.26 107.264,247.871 214.529,186.26 214.529,63.04 107.264,1.429 0,63.04 	' />
              <polygon points='275.471,63.04 275.471,186.26 382.735,247.871 490,186.26 490,63.04 382.735,1.429 	' />
              <polygon points='137.954,303.74 137.954,426.96 245.219,488.571 352.484,426.96 352.484,303.74 245.219,242.13 	' />
            </g>
          </svg>
        </div>
        {projects.map((i) => (
          <div key={i.href} className='gallery'>
            <motion.a
              key={i.href}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              style={{ color: "#dbf2fe", textDecoration: "none" }}
              rel='noopener noreferrer'
              aria-label='skidoc'
              href={i.href}
              target='_blank'
            >
              <Image src={i.src} alt='project-images' width={450} height={250} />
            </motion.a>
            <p>{i.text}</p>
            <div className='lines'></div>
          </div>
        ))}
        <div className='github'>
          <h2>
            More on
            <motion.div
              animate={{
                rotate: [0, -5, 0, 5, 0, -5, 0],
                scale: [1, 1.05, 1, 0.95, 1],
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  loop: Infinity,
                  repeatDelay: 1,
                  delay: 1,
                },
              }}
            >
              <motion.button
                animate={{
                  rotate: [0, -20, 0, 20, 0, -20, 0],
                  scale: [1, 1.2, 1, 0.8, 1],
                  boxShadow: "2px 2px 10px 2px #5bf1f6",
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    loop: Infinity,
                    repeatDelay: 1,
                    delay: 1,
                  },
                }}
                className={about.homeBtn}
              >
                <a
                  rel='noopener noreferrer'
                  aria-label='github-link'
                  href='https://github.com/lipskij'
                  target='_blank'
                >
                  <i> GitHub</i>
                </a>
              </motion.button>
            </motion.div>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Work;
