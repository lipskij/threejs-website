import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

const Loader = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [sceenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);

    const timer = setTimeout(() => {
      setScreenHeight(0);
      setScreenWidth(0);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const icon = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: [0, 1, 1, 1, 0],
    },
  };

  const loader = {
    hidden: {
      scale: 1,
      opacity: 1,
    },
    visible: {
      opacity: 0,
      scale: [1, 1, 1, 1, 0],
      zIndex: 1,
    },
  };

  return (
    <motion.div
      className={styles.loader}
      variants={loader}
      initial='hidden'
      animate='visible'
      transition={{
        default: { duration: 1, ease: "easeInOut", delay: 1.5 },
      }}
    >
      <motion.svg
        width={screenWidth}
        height={sceenHeight}
        viewBox='-75 -55 200 171'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.letter}
      >
        <motion.path
          d='M13.7829 21.4192C19.0757 21.3221 24.6529 20.7405 28.8266 17.1479C31.0902 15.1994 33.7118 11.8825 32.3127 8.69957C30.7623 5.17255 24.4417 3.1335 21.0849 2.40258C16.016 1.29887 9.56825 0.923743 4.92628 3.67454C1.00122 6.0005 1.41921 11.2171 1.86415 15.1693C3.1066 26.2051 10.4161 35.7665 19.5303 41.7391C30.4181 48.8741 46.0336 52.0279 57.4535 44.3145C66.2556 38.3692 70.7668 28.5642 73.141 18.5926'
          stroke='#dbf2fe'
          strokeWidth='3'
          strokeLinecap='round'
          variants={icon}
          initial='hidden'
          animate='visible'
          transition={{
            default: { duration: 1.5, ease: "easeInOut", delay: 0.19 },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Loader;
