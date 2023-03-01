import React, { useEffect, useRef } from "react";
import throttle from "lodash.throttle";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const BackToTop: React.FC = () => {
  const backToTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showButton = throttle(() => {
      if (backToTopRef.current === null) return;
      if (window.scrollY > 100) {
        backToTopRef.current.style.display = "block";
      } else {
        backToTopRef.current.style.display = "none";
      }
    });

    window.addEventListener("scroll", showButton);
    showButton();

    return () => {
      window.removeEventListener("scroll", showButton);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={styles.backToTop}
      aria-label='scroll back to top'
      onClick={handleClick}
      ref={backToTopRef}
    >
      <Image src='/images/up.svg' alt='arrow up' width={50} height={50} />
    </div>
  );
};

export default BackToTop;
