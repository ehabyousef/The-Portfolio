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
    // const ExpDetails = ({ position, company, companyLink, time, address, work }) => {
    //     return (
    //         <Typography component='li' ref={ref} sx={{
    //             margin: '10px auto', display: 'flex', width: "60%", flexDirection: 'column', alignItems: 'center', justifyContent: "space-between",
    //             '&:nth-of-type(1)': { marginTop: '0' }, '&:nth-last-of-type': { marginBottom: '0' }
    //         }}>
    //             <Icons refer={ref} />
    //             <div className="d">
    //                 <Typography component='h3' sx={{ textTransform: "capitalize", fontWeight: 'bold', fontSize: "1.7rem", marginBottom: ".1rem" }}>{position}
    //                     <Typography component='a' sx={{ color: 'var(--green)', fontSize: "1.7rem", fontWeight: "700", textDecoration: 'none' }} href={companyLink} target="_blank"> @{company}</Typography>
    //                 </Typography>
    //                 <Typography component='span' sx={{ textTransform: 'capitalize', fontWeight: '500', color: 'var(--beige)', opacity: '.8' }}>{time} | {address}</Typography>
    //                 <Typography component='p' sx={{ color: 'var(--white)', margin: '1rem 0', fontSize: '1.3rem' }}>{work}</Typography>
    //             </div>
    //         </Typography>
    //     )
    // }

    return (
        <Box sx={{ margin: "5rem 0" }} component='div'>
            <motion.h1
                initial={{ opacity: 0, translateY: 10 }}
                animate={{
                    translateY: 0,
                    opacity: 1,
                    transition: { delay: 0.1, duration: 1 },
                }}
                className={style.title}
            >
                Experience
            </motion.h1>
            <Typography component='div' ref={ref} sx={{ position: 'relative', margin: "0 auto", width: '75%' }}>
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