import "../styles/globals.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import { useEffect } from "react";

export const OPACITY_EXIT_DURATION = 1;

const routeChange = () => {
  const tempFix = () => {
    const elements = document.querySelectorAll('style[media="x"]');
    elements.forEach((elem) => elem.removeAttribute("media"));
    setTimeout(() => {
      elements.forEach((elem) => elem.remove());
    }, OPACITY_EXIT_DURATION * 1000);
  };
  tempFix();
};

export const useTransitionFix = () => {
  useEffect(() => {
    Router.events.on("routeChangeComplete", routeChange);
    Router.events.on("routeChangeStart", routeChange);

    return () => {
      Router.events.off("routeChangeComplete", routeChange);
      Router.events.off("routeChangeStart", routeChange);
    };
  }, []);

  useEffect(() => {
    Router.router?.push(Router.router?.pathname);
  }, []);
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `http://localhost:3000${router.route}`;

  return (
    <motion.div
      animate='background'
      variants={{
        background: {
          transform: "rotate(360deg)",
          transition: {
            duration: 0.3,
          },
        },
      }}
      style={{ backgroundColor: "#141b1e" }}
    >
      <Head>
        <title>Emil Lipskij</title>
        <meta
          name='description'
          content='Personal website of Emil Lipskij front end developer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
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
              height: "100vh",
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
              transform: "translateX(-100px)",
              transition: {
                duration: 0.3,
              },
            },
          }}
        >
          <Component {...pageProps} canonical={url} key={url} />
        </motion.div>
      </AnimatePresence>
      <footer className={styles.footer}>
        <p>Made by Emil Lipskij 2022</p>
      </footer>
    </motion.div>
  );
}

export default MyApp;
