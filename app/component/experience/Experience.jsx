import { Box, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import style from './exper.module.css';
import Icons from './Icons';
import ExperDetails from './ExperDetails';
const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'start start']
        }
    )


    return (
        <Box sx={{ margin: "5rem 0" }} component='div'>
            <Typography component='h1' sx={{
                textAlign: 'center', fontSize: { xs: "4rem", md: '6rem' },
                fontWeight: 'bold',
                margin: "8rem 0 3rem 0", color: "var(--white)"
            }}>Experience</Typography>
            <Typography component='div' ref={ref} sx={{ position: 'relative', margin: "0 auto", width: { xs: '100%', md: '75%' } }}>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className={style.line}>
                </motion.div>
                <Typography component='ul' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between', minHeight: '80vh' }}>
                    <ExperDetails position='Web Developer'
                        company='ITI' companyLink='www.iti.com'
                        time='Summer 2023' address='ismalia'
                        work='trained on ateam with a top developer and engineers worked on alot of projects and have alot of experience' />
                    <ExperDetails position='Front-end Developer'
                        company='ElMasryia' companyLink='www.Elmasryia.com'
                        time='2022' address='PortSaid'
                        work='Worked on a team responsible for developing websites, including implementing new features such as product recommendations and user reviews, and optimizing the websites performance and reliability.' />
                    <ExperDetails position='Software engineering'
                        company='FWd' companyLink='https://egfwd.com/'
                        time='2023' address='Remote'
                        work='Worked on a team responsible for developing new websites and apps , using frameworks like agile on the projects and solid principles for clean code' />
                    <ExperDetails position='Team Work'
                        company='college' companyLink='www.iti.com'
                        time='2021 - present' address='Fci Ismalia'
                        work='as a student working with my team in a lot of projects at college using a lot of features, I gained a lot of experience' />
                </Typography>
            </Typography>
        </Box>
    );
};

export default Experience;