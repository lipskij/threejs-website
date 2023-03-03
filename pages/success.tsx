import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import Confetti from "react-confetti";

const Success: NextPage = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return (
    <motion.div
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
          transform: "translateY(0)",
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
      <Confetti width={width} height={height} />
      <div className='main'>
        <div className='success'>
          <h1>Thank you for your message!</h1>
          <h2>I will get back to you as soon as possible.</h2>
          <div className='button'>
            <Link href='/'>
              <button type='button'>Go back to the homepage</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Success;
