import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Loader from "../components/Loader";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const container = document.querySelector<HTMLDivElement>(".container");
    if (container) {
      container.style.height = `${height}px`;
      container.style.width = `${width}px`;
    }

    if (container && width < 480) {
      container.style.height = `${height - 50}px`;
    }
  }, []);

  return (
    <div className='container'>
      <main className={styles.main}>
        <Loader />
        <Nav />
        <section className={styles.home}>
          <div className={styles.homeText}>
            <h1 className={styles.homeText1}>Hi, I&apos;m Emil.</h1>
            <h2 className={styles.homeText1}>
              I&apos;m a front-end web developer.
            </h2>
            <p>I create websites and web applications</p>
            <button className={styles.homeBtn}>
              <a href='#contacts'> Contact </a>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
