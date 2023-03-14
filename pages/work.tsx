import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Work.module.css";
import { motion } from "framer-motion";

const projects = [
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
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className={styles.main}>
      <h2>WORK</h2>
      <section className={styles.work}>
        {projects.map((i) => (
          <div key={i.href} className={styles.gallery}>
            <motion.div
              animate={
                loaded
                  ? {
                      x: [-50, 0],
                      transition: { duration: 0.5 },
                      opacity: [0, 1],
                    }
                  : {}
              }
            >
              {!loaded ? (
                "Loading..."
              ) : (
                <Link href={i.href}>
                  <Image
                    src={i.src}
                    alt='project-images'
                    width={400}
                    height={200}
                    quality={100}
                    onLoadingComplete={() => setLoaded(true)}
                  />
                </Link>
              )}
            </motion.div>

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
    </div>
  );
};

export default Work;
