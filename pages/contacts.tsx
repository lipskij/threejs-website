import { NextPage } from "next/types";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import styles from "../styles/Contacts.module.css";

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
    <div className='main'>
      <style jsx>{`
        .main {
          background-color: #141b1e;
        }

        .contacts {
          display: flex;
          flex-direction: column;
          text-align: center;
          height: 100vh;
          margin: 0 auto;
          color: #dbf2fe;
        }

        .contacts h2 {
          font-size: 3rem;
          color: #dbf2fe;
          margin: 6rem 0 5rem 0;
        }

        .container input[type="text"],
        .container select,
        .container textarea {
          width: 90%;
          padding: 12px;
          border: 1px solid #253237;
          border-radius: 4px;
          box-sizing: border-box;
          margin-top: 6px;
          margin-bottom: 16px;
          resize: vertical;
        }

        .name,
        .email {
          width: 90%;
          padding: 0.5rem;
          border: 1px solid #253237;
          border-radius: 4px;
        }

        .name:focus,
        .email:focus,
        .message:focus {
          border: 1px solid #81f5af;
          outline: none;
        }

        .name {
          margin-bottom: 6px;
        }

        /* Style the submit button with a specific background color etc */
        .container button[type="submit"] {
          background-color: #253237;
          font-weight: 600;
          font-size: 1.3rem;
          color: #dbf2fe;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition-duration: 0.3s;
        }

        .container button:disabled {
          background-color: #bebebe;
          color: #0c0c0c;
          cursor: not-allowed;
        }

        .container button:hover {
          background-color: #81f5af;
          color: #141b1e;
          transition-duration: 0.3s;
        }

        /* When moving the mouse over the submit button, add a darker green color */
        .container input[type="submit"]:focus {
          background-color: #81f5af;
        }

        /* Add a background color and some padding around the form */
        .container {
          border-radius: 5px;
          box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1;
          background: inherit;
          overflow: hidden;
          padding: 20px;
          height: 50vh;
          width: 60vw;
          margin: 0 auto;
        }
        .container:before {
          content: "";
          position: absolute;
          background: inherit;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          box-shadow: inset 0 0 2000px rgba(172, 188, 202, 0.5);
          filter: blur(5px);
          margin: -20px;
        }

        .error {
          color: red;
          margin: 5px;
        }
        .footer p {
          display: flex;
          justify-content: center;
          color: #dbf2fe;
          margin: 0 auto;
        }
        @media screen and (max-width: 480px) {
          .contacts {
            width: 100%;
            height: 85vh;
          }
          .container {
            width: 80vw;
          }
        }
      `}</style>
      <Nav />

      <section className='contacts'>
        <h2>CONTACTS</h2>
        <div className='container'>
          <form name='contacts' method='POST' data-netlify='true'>
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
              className='contactButton'
              disabled={disabled}
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
