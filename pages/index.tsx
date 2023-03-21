import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import BackToTop from "../components/BackToTop";
import { useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const aboutRef = React.useRef<HTMLElement>(null);
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  useEffect(() => {
    if (hash === "#about") {
      const about = document.getElementById("about");
      about?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  // intersection observer for about section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(aboutRef.current as Element);
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <section className={styles.home}>
          <div className={styles.homeText}>
            <h1>
              Hi, I&apos;m <span className={styles.name}>Emil</span>.
            </h1>
            <h2>I&apos;m a front-end web developer from Vilnius, Lithuania.</h2>
            <Link className={styles.button} href='/contacts'>
              Contacts
            </Link>
          </div>
          <div className={styles.lineDiv}>
            {Array.from(Array(50).keys()).map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 1],
                  transition: { duration: 1 },
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                  boxShadow: "0px 0px 20px #aa3bff",
                }}
                className={styles.line}
              />
            ))}
          </div>
        </section>

        <section className={styles.about} id='about' ref={aboutRef}>
          <div>
            <p className={styles.aboutTitle}>ABOUT</p>
            <div className={styles.aboutText}>
              <p>
                I&apos;m a self tought Developer from Vilnius Lithuania.
                <br />
                Finished Front End Masters online courses.
                <br />
                I enjoy creating responsive, fast-loading, dynamic user
                experiences.
                <br />
                Previously worked with circus troupe as an acrobat and juggler.
                Eager to learn new technologies and to create new things.
              </p>
            </div>
          </div>
        </section>
        <BackToTop />
      </main>
    </div>
  );
};

export default Home;
