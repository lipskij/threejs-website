import Link from "next/link";
import React, { useState } from "react";
import Drawer from "./Drower";
import Hamburger from "./Hamburger";
import css from "styled-jsx/css";

const { className: hamburgerClassName, styles: hamburgerStyles } = css.resolve`
  @media screen and (min-width: 480px) {
    .root {
      display: none;
    }
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <svg
        width='105'
        height='81'
        viewBox='0 0 75 51'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ padding: "0 0 0 2rem" }}
      >
        <path
          d='M13.7829 21.4192C19.0757 21.3221 24.6529 20.7405 28.8266 17.1479C31.0902 15.1994 33.7118 11.8825 32.3127 8.69957C30.7623 5.17255 24.4417 3.1335 21.0849 2.40258C16.016 1.29887 9.56825 0.923743 4.92628 3.67454C1.00122 6.0005 1.41921 11.2171 1.86415 15.1693C3.1066 26.2051 10.4161 35.7665 19.5303 41.7391C30.4181 48.8741 46.0336 52.0279 57.4535 44.3145C66.2556 38.3692 70.7668 28.5642 73.141 18.5926'
          stroke='#abbbc7'
          strokeWidth='3'
          strokeLinecap='round'
        />
      </svg>
      {hamburgerStyles}
      <Hamburger
        className={hamburgerClassName}
        toggled={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul className='desctop-nav'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/work'>Work</Link>
        </li>
        <li>
          <Link href='/contacts'>Contact</Link>
        </li>
      </ul>
      <Drawer className={hamburgerClassName} isOpen={isOpen}>
        <ul onClick={() => setIsOpen(!isOpen)}>
          <li>
            <Link href='/'>HOME</Link>
          </li>
          <li>
            <Link href='/about'>ABOUT</Link>
          </li>
          <li>
            <Link href='/work  '>WORK</Link>
          </li>
          <li>
            <Link href='/contacts'>CONTACTS</Link>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Nav;
