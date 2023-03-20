import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Work.module.css";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    href: "https://balthaus.eu/en/",
    src: "/images/balthaus.webp",
    text: "Creating new features, managing client turnover, invoices and payments. Using GraphQL and React.",
  },
  {
    href: "https://experimentica.com/",
    src: "/images/experimentica.webp",
    text: "React and Canvas are utilized in medical technology to identify early stages of eye illness, enabling medical professionals to visualize and analyze digital images of the eye more effectively for quicker and more accurate diagnoses.",
  },
  {
    href: "https://skidoc.fr/",
    src: "/images/skidoc.webp",
    text: "Creating internal stock management system using NoSQL, MeteorJs and React. Using AWS and working with CI/CD.",
  },
  {
    href: "https://easyproduction.org",
    src: "/images/easy2.webp",
    text: "Film maker and producer personal website to showcase work and projects. For this website I used Nextjs,Framer motion for animations and page transitions.",
  },
  {
    href: "https://sendeuroto.me",
    src: "/images/send-euro.webp",
    text: "If you feel like sending some money to me you can use this website. I used  Stripe for payments.",
  },
];

// add work from past job

const Work: NextPage = () => {
  return (
    <div className={styles.main}>
      <AnimatePresence>
        <motion.div
          key='contacts'
          initial='pageInitial'
          animate='pageAnimate'
          exit='pageExit'
          variants={{
            pageInitial: {
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            },
            pageExit: {
              opacity: 0,
              transition: {
                duration: 0.2,
              },
            },
          }}
        >
          <h2>WORK</h2>
          <section className={styles.work}>
            {projects.map((i) => (
              <div key={i.href} className={styles.gallery}>
                <Link
                  href={i.href}
                  target='_blank'
                  style={{ width: "400px", height: "200px" }}
                >
                  <Image
                    src={i.src}
                    alt='project-images'
                    width={400}
                    height={200}
                    quality={100}
                  />
                </Link>

                <p>{i.text}</p>
                <div className={styles.lines}></div>
              </div>
            ))}
            <div className={styles.github}>
              <h2>To find more projects visit</h2>
              <Link
                rel='noopener noreferrer'
                aria-label='github-link'
                href='https://github.com/lipskij'
                target='_blank'
                className={styles.gitBtn}
              >
                GitHub
              </Link>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Work;
