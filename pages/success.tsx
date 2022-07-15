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
        <style jsx>{`
          .main {
            background-color: #141b1e;
            display: flex;
            justify-content: center;
          }
          .main h2,
          .main p {
            font-size: 3rem;
            color: #dbf2fe;
            margin: 6rem 0 5rem 0;
            text-align: center;
          }
          .main button {
            padding: 1rem;
            background-color: #dbf2fe;
            color: #141b1e;
            border: none;
            position: absolute;
            border-radius: 10px;
            align-self: center;
            font-size: 1.3rem;
            left: 33%;
          }
        `}</style>
        <div className='contacts'>
          <h2>Thank you for your message!</h2>
          <p>I will get back to you as soon as possible.</p>
          <Link href='/'>
            <a>
              <button>Go back to the homepage</button>
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Success;
