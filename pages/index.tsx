import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const text = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: [0, 1, 1, 1],
    },
  };
  return (
    <div>
      <main className={styles.main}>
        <Nav />
        <Loader />
        <section className={styles.home}>
          <motion.div
            variants={text}
            initial='hidden'
            animate='visible'
            transition={{
              default: { duration: 1.5, ease: "easeInOut", delay: 1.2 },
            }}
            className={styles.homeText}
          >
            <h1 className={styles.homeText1}>Hi, I&apos;m Emil.</h1>
            <h2 className={styles.homeText1}>
              I&apos;m a front-end web developer.
            </h2>
            <p>I create websites and web applications</p>
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
              className={styles.homeBtn}
            >
              <a href='#contacts'> Contact </a>
            </motion.button>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Home;
