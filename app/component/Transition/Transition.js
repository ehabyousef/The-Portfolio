import React from 'react';
import { motion } from "framer-motion";
import style from './Transition.module.css';
const Transition = () => {
    return (
        <div className={style.all_1}>
            <motion.div
                initial={{ y: "100%", height: '100%' }}
                animate={{ y: '0%', height: '0%' }}
                transition={{ duration: '1', ease: "easeInOut" }}
                className={style.all_2}
            />
            <motion.div
                initial={{ y: "100%", height: '100%' }}
                animate={{ y: '0%', height: '0%' }}
                transition={{ delay: '0.2', duration: '1', ease: "easeInOut" }}
                className={style.all_3}
            />
            <motion.div
                initial={{ y: "100%", height: '100%' }}
                animate={{ y: '0%', height: '0%' }}
                transition={{ delay: '.4', duration: '1', ease: "easeInOut" }}
                className={style.all_4}
            />
        </div>
    );
};

export default Transition;