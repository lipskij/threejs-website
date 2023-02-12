import "../styles/globals.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `http://localhost:3000${router.route}`;

  return (
    <div style={{ backgroundColor: "#141b1e" }}>
      <Head>
        <title>Emil Lipskij</title>
        <meta
          name='description'
          content='Personal website of Emil Lipskij front end developer'
        />
        <link rel='icon' href='/favicon2.ico' />
      </Head>
      <Nav />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={router.route}
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
              transform: "translateY(-100%)",
              transition: {
                duration: 0.3,
              },
            },
          }}
        >
          <Component {...pageProps} canonical={url} key={url} />
        </motion.div>
        <footer className={styles.footer}>
          <p>Made by Emil Lipskij 2022</p>
        </footer>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
