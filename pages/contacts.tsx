import { NextPage } from "next/types";
import React, { useEffect, useState } from "react";
import { text } from "stream/consumers";
import Nav from "../components/Nav";
import styles from "../styles/Contacts.module.css";

const Contacts: NextPage = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (message.length > 3) {
      setDisabled(false);
    }
  }, [text, email, message, disabled]);

  return (
    <div className={styles.main}>
      <Nav />

      <section className={styles.contacts}>
        <h2>CONTACTS</h2>
        <div className={styles.container}>
          <form method='POST' data-netlify='true'>
            <p>{error}</p>
            <input
              type='text'
              className={styles.name}
              name='name'
              placeholder='Your name..'
              aria-label='Your name..'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type='email'
              className={styles.email}
              name='email'
              placeholder='Your email..'
              aria-label='Your email..'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className={styles.message}
              name='message'
              placeholder='Leave me a message..'
              required
              rows={4}
              aria-label='Leave me a message..'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              className={styles.contactButton}
              disabled={disabled}
              type='submit'
              value='Submit'
              style={
                disabled
                  ? {
                      background: "grey",
                      color: "#fefefe",
                      cursor: "not-allowed",
                    }
                  : {}
              }
            >
              SEND
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
