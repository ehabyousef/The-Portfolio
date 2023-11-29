import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import style from './Education.module.css';
import { Box, Card, Typography, duration } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { Opacity } from '@mui/icons-material';
const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'start start'],
        }
    )
    return (
        <Typography component='div' sx={{ margin: '4rem 0' }}>
            <Typography component='h1' sx={{
                textAlign: 'center', fontSize: '6rem', fontWeight: 'bold',
                margin: "8rem 0 3rem 0", color: "var(--white)"
            }}>Education</Typography>
            <Box ref={ref} sx={{ position: 'relative', minHeight: { xs: "150vh", sm: '80vh' } }}>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className={style.line}>

                </motion.div>
                <motion.div
                    className={style.icons}>
                    <SchoolIcon className={style.icon} />
                    <DeveloperModeIcon className={style.icon} />
                    <IntegrationInstructionsIcon className={style.icon} />
                </motion.div>
                <motion.div
                    initial={{ right: '60%' }}
                    whileInView={{ right: "53%" }}
                    className={style.one}>
                    <Card sx={{ padding: '10px 15px', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '10px', background: 'var(--white)', boxShadow: '3px 4px 13px var(--beige)' }} variant="outlined">
                        <h3 style={{ color: 'var(--dark-color)' }}>Fci Suez Canal University</h3>
                        <h5 style={{ color: 'var(--dark-color)', opacity: ".8" }}>Ismalia | 2020-2024</h5>
                        <p style={{ color: 'var(--dark-color)', fontWeight: "500", lineHeight: "1.5" }}>at Faculty of computer science and information have learned alot about software engineering and take different rules at many of projects and tasks we did </p>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ left: '60%' }}
                    whileInView={{ left: "53%" }}
                    className={style.two}>
                    <Card sx={{ padding: '10px 15px', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '10px', background: 'var(--white)', boxShadow: '3px 4px 13px var(--beige)' }} variant="outlined">
                        <h3 style={{ color: 'var(--dark-color)' }}>ITI</h3>
                        <h5 style={{ color: 'var(--dark-color)', opacity: ".6" }}>Ismalia | 2023</h5>
                        <p style={{ color: 'var(--dark-color)', fontWeight: "500", lineHeight: "1.5" }}>Summer Course that i trained on a team with a top developer and engineers worked on alot of projects and have alot of experience</p>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ right: '60%' }}
                    whileInView={{ right: "53%" }}
                    className={style.three}>
                    <Card sx={{ padding: '10px 15px', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '10px', background: 'var(--white)', boxShadow: '3px 4px 13px var(--beige)' }} variant="outlined">
                        <h3 style={{ color: 'var(--dark-color)' }}>Udacity</h3>
                        <h5 style={{ color: 'var(--dark-color)', opacity: ".8" }}>Remote | 2022-2023</h5>
                        <p style={{ color: 'var(--dark-color)', fontWeight: "500", lineHeight: "1.5" }}>Software engeneering full course with a top instructors , gained alot of experience and knowladge </p>
                    </Card>
                </motion.div>
            </Box>
        </Typography >
    );
};

export default Education;