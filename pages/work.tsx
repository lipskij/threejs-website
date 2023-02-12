import React from "react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Nav from "../components/Nav";
import Image from "next/image";
import GitButton from "../components/GitButton";

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
    href: "https://sendeuroto.me",
    src: "/images/send-euro.webp",
    text: "If you feel like sending some money to me you can use this website. I used  Stripe for payments.",
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
          margin: 5rem 0 3rem 0;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
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
        .github {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 30vh;
          margin-bottom: 7rem;
        }
        @media screen and (max-width: 480px) {
          .gallery {
            grid-template-columns: repeat(1, 1fr);
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 5rem;
            margin-bottom: 5rem;
            height: 100%;
          }
          .lines {
            display: flex;
            width: 100%;
            height: 3px;
            background-color: #dbf2fe;
          }
        }
      `}</style>
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
              className='link'
              whileHover={{ scale: 1.03 }}
              style={{
                color: "#dbf2fe",
                textDecoration: "none",
                height: "95%",
                margin: "0 auto",
              }}
              rel='noopener noreferrer'
              aria-label='skidoc'
              href={i.href}
              target='_blank'
            >
              <Image
                src={i.src}
                alt='project-images'
                width={450}
                height={250}
                layout='responsive'
              />
            </motion.a>
            <p>{i.text}</p>
            <div className='lines'></div>
          </div>
        ))}
        <div className='github'>
          <h2>You can find more projects on</h2>
          <GitButton />
        </div>
      </section>
    </div>
  );
};

export default Work;
