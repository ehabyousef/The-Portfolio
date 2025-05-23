"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dev from "../public/imags/circle.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Transition from "./component/Transition/Transition";
import style from "./page.module.css";

const text = "Ihab Y Lasheen";
const pVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const spanVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Home() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  useEffect(() => {
    const handleCursor = (e) => {
      setx(e.clientX - 100);
      sety(e.clientY - 50);
    };
    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 900); // match animation duration in Transition component

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Transition />
      {showContent && (
        <div className={style.cana}>
          <motion.div animate={{ x, y }} className={style.cursor}></motion.div>
          <div className={style.content}>
            <Image src={dev} className={style.img} alt="hero"></Image>
            <div className={style.text}>
              <motion.h1
                variants={pVarients}
                initial="hidden"
                animate="visible"
              >
                {text.split("").map((char, ind) => (
                  <motion.span key={ind} variants={spanVarients}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, translateY: 80 }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                  transition: { delay: 0.5, duration: 1 },
                }}
              >
                Turning Vision Into Reality With Code And Design.{" "}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, translateY: 60 }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                  transition: { delay: 0.3, duration: 1 },
                }}
              >
                As a skilled Front-end developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.1, duration: 1 },
                }}
                className={style.botons}
              >
                <Link
                  href="EhabYousef.pdf"
                  target="_blank"
                  download={true}
                  className={style.resume}
                >
                  <b>resume</b>
                </Link>
                <Link
                  href="mailto:ehabyousef022@gmail.com"
                  target="_blank"
                  className={style.contact}
                >
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Contact</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
