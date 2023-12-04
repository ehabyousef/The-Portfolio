"use client";
import React, { } from "react";
import style from "./Home.module.css";
import Image from "next/image";
import dev from "../../../public/imags/circle.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Transition from "../Transition/Transition";
const Homes = () => {
    return (
        <>
            <Transition />
            <div className={style.cana}>
                <div className={style.content}>
                    <Image src={dev} className={style.img} alt="hero"></Image>
                    <div className={style.text}>
                        <motion.h1
                            initial={{ opacity: 0, translateY: 100 }}
                            animate={{ translateY: 0, opacity: 1, transition: { delay: .1, duration: 1 } }}
                        >Ihab Y Lasheen</motion.h1>
                        <motion.h3
                            initial={{ opacity: 0, translateY: 80 }}
                            animate={{ translateY: 0, opacity: 1, transition: { delay: .1, duration: 1 } }}
                        >Turning Vision Into Reality With Code And Design. </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, translateY: 60 }}
                            animate={{ translateY: 0, opacity: 1, transition: { delay: .1, duration: 1 } }}
                        >
                            As a skilled Front-end developer, I am dedicated to turning ideas
                            into innovative web applications. Explore my latest projects and
                            articles, showcasing my expertise in React.js and web development.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: .1, duration: 1 } }}
                            className={style.botons}>
                            <Link href="ehabY.pdf" target="_blank" download={true} className={style.resume}>
                                <b>resume</b>
                            </Link>
                            <Link href="mailto:ehabyousef022@gmail.com" target="_blank" className={style.contact}>
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
            </div >
        </>
    );
};

export default Homes;