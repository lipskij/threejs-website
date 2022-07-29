import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import Link from "next/link";

const Home: NextPage = () => {
  const text = {
    hidden: {
      opacity: 0,
    },
    visible: {
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
              <Link href='/contacts'>Contacts</Link>
            </motion.button>
          </motion.div>
          <div className={styles.hexagons1}>
            <svg x='0px' y='0px' viewBox='0 0 790 790' fill='#5bf1f6'>
              <g>
                <motion.polygon points='0,186.26 107.264,247.871 214.529,186.26 214.529,63.04 107.264,1.429 0,63.04 	' />
                <motion.polygon points='275.471,63.04 275.471,186.26 382.735,247.871 490,186.26 490,63.04 382.735,1.429 	' />
                <motion.polygon points='137.954,303.74 137.954,426.96 245.219,488.571 352.484,426.96 352.484,303.74 245.219,242.13 	' />
              </g>
            </svg>
          </div>
          <div className={styles.hexagons2}>
            <svg x='0px' y='0px' viewBox='0 0 790 790' fill='#5bf1f6'>
              <g>
                <motion.polygon points='0,186.26 107.264,247.871 214.529,186.26 214.529,63.04 107.264,1.429 0,63.04 	' />
                <motion.polygon points='275.471,63.04 275.471,186.26 382.735,247.871 490,186.26 490,63.04 382.735,1.429 	' />
                <motion.polygon points='137.954,303.74 137.954,426.96 245.219,488.571 352.484,426.96 352.484,303.74 245.219,242.13 	' />
              </g>
            </svg>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
