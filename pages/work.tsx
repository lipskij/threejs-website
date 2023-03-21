import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Work.module.css";

import balthaus from "../public/images/balthaus.webp";
import experimentica from "../public/images/experimentica.webp";
import skidoc from "../public/images/skidoc.webp";
import easy from "../public/images/easy2.webp";
import send from "../public/images/send-euro.webp";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    href: "https://balthaus.eu/en/",
    src: balthaus,
    text: "Creating new features, managing client turnover, invoices and payments. By leveraging GraphQL's powerful querying capabilities and React's flexibility and ease of use, businesses can enhance their workflow and streamline their operations to boost their overall efficiency and productivity.",
  },
  {
    href: "https://experimentica.com/",
    src: experimentica,
    text: "React and Canvas are utilized in medical technology to identify early stages of eye illness, enabling medical professionals to visualize and analyze digital images of the eye more effectively for quicker and more accurate diagnoses.",
  },
  {
    href: "https://skidoc.fr/",
    src: skidoc,
    text: "Creating internal stock management system using NoSQL, MeteorJs and React. Using AWS and working with CI/CD.",
  },
  {
    href: "https://easyproduction.org",
    src: easy,
    text: "Film maker and producer personal website to showcase work and projects. For this website I used Nextjs,Framer motion for animations and page transitions.",
  },
  {
    href: "https://sendeuroto.me",
    src: send,
    text: "If you feel like sending some money to me you can use this website. I used  Stripe for payments.",
  },
];

const Work: NextPage = () => {
  const images = React.useRef(new Array());
  const [quality, setQuality] = React.useState(10);

  React.useEffect(() => {
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

    images.current.forEach((image) => {
      observer.observe(image as Element);
    });
  }, []);

  return (
    <div className={styles.main}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key='work'
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
                ease: "easeInOut",
              },
            },
            pageExit: {
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        >
          <h2>WORK</h2>
          <section className={styles.work}>
            {projects.map((i) => (
              <div key={i.href} className={styles.gallery}>
                <Link
                  href={i.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  ref={(el) => images.current.push(el)}
                  className={styles.image}
                >
                  <Image
                    src={i.src}
                    alt='project-images'
                    width={400}
                    height={200}
                    quality={quality}
                    loading='eager'
                    placeholder='blur'
                    onLoadingComplete={() => setQuality(100)}
                  />
                </Link>

                <p>{i.text}</p>
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Work;
