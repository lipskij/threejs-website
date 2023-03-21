import Link from "next/link";
import { NextPage } from "next/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Contacts.module.css";
import { AnimatePresence, motion } from "framer-motion";

const linkStyles = {
  textDecoration: "none",
  color: "#dbf2fe",
  fontSize: "1.2rem",
  margin: "1rem",
};

const Contacts: NextPage = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (message.length > 3) {
      setDisabled(false);
    }
  }, [text, email, message, disabled]);

  return (
    <main className={styles.main}>
      <h2>CONTACTS</h2>
      <section className={styles.contacts}>
        <div className={styles.cantactList}>
          <div>
            <Link
              style={linkStyles}
              href='https:/www.linkedin.com/in/emil-lipskij-6920831b2/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image
                src='/images/linkedin.svg'
                width={50}
                height={50}
                alt='linkedin'
              />
            </Link>
          </div>

          <div>
            <Link style={linkStyles} href='mailto:emil.lipskij@gmail.com'>
              <Image src='/images/mail.svg' width={50} height={50} alt='mail' />
            </Link>
          </div>

          <div>
            <Link
              style={linkStyles}
              rel='noopener noreferrer'
              aria-label='github-link'
              href='https://github.com/lipskij'
              target='_blank'
            >
              <Image
                src='/images/github.svg'
                width={50}
                height={50}
                alt='github'
              />
            </Link>
          </div>

          <div>
            <Link style={linkStyles} href='tel:+370 625 24 354'>
              <Image
                src='/images/phone.svg'
                width={55}
                height={55}
                alt='phone'
              />
            </Link>
          </div>
        </div>
        <div className={styles.container}>
          <form
            name='contact'
            method='POST'
            data-netlify='true'
            action='/success'
          >
            <input type='hidden' name='form-name' value='contact' />
            <input
              type='text'
              className='name'
              name='name'
              placeholder='Your name..'
              aria-label='Your name..'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type='text'
              className='email'
              name='email'
              placeholder='Your email..'
              aria-label='Your email..'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className='message'
              name='message'
              placeholder='Leave me a message..'
              required
              rows={4}
              aria-label='Leave me a message..'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type='submit'
              className={styles.contactButton}
              disabled={disabled}
            >
              SEND
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
