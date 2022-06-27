import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Loader from "../components/Loader";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Loader data-aos-once='true' />
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
