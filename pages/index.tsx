import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import BackToTop from "../components/BackToTop";
import { useEffect } from "react";

const Home: NextPage = () => {
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  useEffect(() => {
    if (hash === "#about") {
      const about = document.getElementById("about");
      about?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

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

          <div className={styles.image}>
            <Image
              src='/images/image.svg'
              alt='hero'
              width={400}
              height={400}
            />
            <div className={styles.line} />
          </div>
          <div>
            <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
              <line
                x1='50'
                y1='80'
                x2='50'
                y2='1'
                stroke='#abbbc7'
                strokeWidth={0.5}
              />
            </svg>
          </div>
        </section>

        <section className={styles.about} id='about'>
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
