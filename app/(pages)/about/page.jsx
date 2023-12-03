"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useScroll } from "framer-motion";
import style from "./page.module.css";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import me from '../../../public/imags/WhatsApp Image 2023-11-26 at 22.20.43_c2e56ec9.jpg';
import Experience from "@/app/component/experience/Experience";
import Education from "@/app/component/Education/Education";
import ScrollTop from "@/app/component/ScrollTop/ScrollTop";
const AnimateNum = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, motionValue, value])

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}
const Skills = ({ name, x, y }) => {
    return (
        <motion.div
            whileHover={{ Scale: '1.05' }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className={style.skill}>{name}</motion.div>
    )
}

const page = () => {
    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, translateY: 10 }}
                animate={{
                    translateY: 0,
                    opacity: 1,
                    transition: { delay: 0.1, duration: 1 },
                }}
                className={style.title}
            >
                Passion Fuels Purpose!{" "}
            </motion.h1>
            {/* intro  */}
            <Grid container spacing={6} sx={{
                display: 'flex', flexDirection: { xs: "column", md: "row" }, alignItems: { xs: 'flex-start', md: "inherit" },
                padding: '5px 5px', margin: "2rem 0"
            }}>
                <ScrollTop />
                <Grid

                    xs={12}
                    md={6}
                    lg={4}
                    sx={{ display: "flex", gap: "1.2rem", flexDirection: "column" }}
                    className={style.ttext}
                >
                    <h3>BIOGRAPHY</h3>
                    <p>
                        Hi, I m Ihab Yousef, a web developer and UI/UX designer with a passion
                        for creating beautiful, functional, and user-centered digital
                        experiences. With 2 years of experience in the field. I am always
                        looking for new and innovative ways to bring my client s visions to
                        life.
                    </p>
                    <p>
                        I believe that design is about more than just making things look
                        pretty – it s about solving problems and creating intuitive,
                        enjoyable experiences for users.
                    </p>
                    <p>
                        Whether I m working on a website, mobile app, or other digital
                        product, I bring my commitment to design excellence and
                        user-centered thinking to every project I work on. I look forward to
                        the opportunity to bring my skills and passion to your next project.
                    </p>
                </Grid>
                <Grid
                    xs={4}
                    md={5}
                    lg={4}
                    sx={{ order: { xs: "-1", md: "0" }, display: 'flex', justifyContent: '' }} >
                    <Image className={style.img} src={me} alt="bob" />
                </Grid>
                <Grid className={style.static}
                    xs={12}
                    lg={4}
                    sx={{
                        display: 'flex', flexDirection: { xs: "row", lg: "column" }, gap: ".5rem", flexWrap: { xs: 'nowrap', md: 'wrap' }, color: 'var(--white)',
                        justifyContent: { xs: "space-evenly", xlg: 'space-between' },
                        // fontSize:{xs:'1rem',lg}
                    }}>
                    <div >
                        <span><AnimateNum value={35} />+</span>
                        <h2>Satisfied Clients</h2>
                    </div>
                    <div className="d">
                        <span><AnimateNum value={20} />+</span>
                        <h2>Projects Completed</h2>
                    </div>
                    <div className="d">
                        <span><AnimateNum value={2} />+</span>
                        <h2>Years Of Experience</h2>
                    </div>
                </Grid>
            </Grid>
            {/* skill  */}
            <Box component='div' sx={{
                margin: '3rem 0', display: "flex", flexDirection: 'column',
                justifyContent: "center", alignItems: "center",
                fontSize: { xs: '.9rem', md: "1.1rem" }
            }}>
                <Typography component='h1' sx={{ textAlign: "center", color: "var(--white)", margin: "1rem 0" }} variant="h1" >Skills</Typography>
                <div className={style.repeat}>
                    <Typography component='div'
                        sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "50%",
                            backgroundColor: { xs: "transparent", sm: "var(--white)" },
                            color: { xs: "var(--white)", sm: "var(--dark-color)" },
                            cursor: "pointer", padding: "1.2rem 1.5rem", fontWeight: 'bold'
                        }}>
                        web
                    </Typography>
                    <Skills name='Html' x="-20vw" y="-2vw" />
                    <Skills name='Css' x="-5vw" y="-11vw" />
                    <Skills name='Js' x="20vw" y="4vw" />
                    <Skills name='React Js' x="0vw" y="12vw" />
                    <Skills name='Next Js' x="-20vw" y="-15vw" />
                    {/* <Skills name='TypeScript' x="15vw" y="12vw" /> */}
                    <Skills name='Bootsrap' x="15vw" y="-12vw" />
                    <Skills name='Web Design' x="32vw" y="-5vw" />
                    <Skills name='Figma' x="0vw" y="-20vw" />
                    <Skills name='Firebase' x="18vw" y="18vw" />
                    <Skills name='Git & Github' x="-27vw" y="7vw" />
                    <Skills name='Sass' x="-18vw" y="17vw" />
                </div>
            </Box >
            {/* experience  */}
            < Experience />
            {/* Education  */}
            < Education />
        </div >
    );
};

export default page;
