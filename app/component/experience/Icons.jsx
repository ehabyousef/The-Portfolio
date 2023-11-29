import React from 'react';
import Typography from '@mui/material/Typography'
import { motion, useScroll } from "framer-motion";

const Icons = ({ refer }) => {

    const { scrollYProgress } = useScroll(
        {
            target: refer,
            offset: ['center end', 'center start']
        }
    )

    return (
        <Typography component='figure' sx={{ position: 'absolute', left: '0', stroke: 'var(--dark-color)' }}>
            <svg width='75' height='75' viewBox='0 0 100 100'>
                <motion.circle
                    style={{ pathLength: scrollYProgress }}
                    cx='75' cy='30' r='20' stroke='var(--beige)' strokeWidth={5} fill='transparent' />
                <circle cx='75' cy='30' r='15' fill='var(--green)' />
            </svg>
        </Typography>
    );
};

export default Icons;