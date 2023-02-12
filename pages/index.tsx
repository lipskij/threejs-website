import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Button from "../components/ContactButton";

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <section className={styles.home}>
          <div className={styles.homeText}>
            <h1 className={styles.homeText1}>Hi, I&apos;m Emil.</h1>
            <h2 className={styles.homeText1}>
              I&apos;m a front-end web developer.
            </h2>
            <p>I create websites and web applications</p>
            <Button />
          </div>

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
