import { motion } from "framer-motion";
import Link from "next/link";
import { NextPage } from "next/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
        .cantactList {
          display: flex;
          flex-direction: row;
          margin: 0 auto;
          margin-bottom: 3rem;
        }
        .cantactList div {
          transition-duration: 0.3s;
        }
        .cantactList div:hover {
          transform: scale(1.1);
          transition-duration: 0.3s;
        }
        .contacts h2 {
          font-size: 3rem;
          color: #dbf2fe;
          margin: 3rem 0 2rem 0;
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

        .hexagon {
          position: absolute;
          width: 250px;
          height: 250px;
          top: 85%;
          left: 140px;
          opacity: 30%;
        }
        @media screen and (max-width: 480px) {
          .contacts {
            width: 100%;
            height: 100vh;
            padding-bottom: 5rem;
          }
          .container {
            width: 80vw;
          }
        }
      `}</style>

      <section className='contacts'>
        <h2>CONTACTS</h2>
        <div className='cantactList'>
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
            <Link style={linkStyles} href='tel:+370 625 24 354'>
              <Image
                src='/images/phone.svg'
                width={55}
                height={55}
                alt='phone'
              />
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
        </div>
        <div className='hexagon'>
          <svg x='0px' y='0px' viewBox='0 0 790 790' fill='#5bf1f6'>
            <g>
              <polygon points='0,186.26 107.264,247.871 214.529,186.26 214.529,63.04 107.264,1.429 0,63.04 	' />
              <polygon points='275.471,63.04 275.471,186.26 382.735,247.871 490,186.26 490,63.04 382.735,1.429 	' />
              <polygon points='137.954,303.74 137.954,426.96 245.219,488.571 352.484,426.96 352.484,303.74 245.219,242.13 	' />
            </g>
          </svg>
        </div>
        <div className='container'>
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

            <motion.button
              animate={
                !disabled
                  ? {
                      rotate: [0, -5, 0, 5, 0, -5, 0],
                      scale: [1, 1.05, 1, 0.95, 1],

                      transition: {
                        duration: 0.8,
                        ease: "easeInOut",
                        loop: Infinity,
                        repeatDelay: 0.9,
                      },
                    }
                  : {}
              }
              type='submit'
              className='contactButton'
              disabled={disabled}
              style={
                disabled
                  ? {
                      background: "grey",
                      color: "#fefefe",
                      cursor: "not-allowed",
                      padding: "1rem",
                      borderRadius: "10px",
                      border: "none",
                      fontWeight: "600",
                      fontSize: "1.3rem",
                    }
                  : {
                      background: "#dbf2fe",
                      color: "#141b1e",
                      cursor: "pointer",
                      padding: "1rem",
                      borderRadius: "10px",
                      border: "none",
                      fontWeight: "600",
                      fontSize: "1.3rem",
                      boxShadow: "2px 2px 10px 2px #5bf1f6",
                    }
              }
            >
              SEND
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
