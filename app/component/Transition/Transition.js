import React from 'react';
import { motion } from "framer-motion";
import style from './Transition.module.css';
const Transition = () => {
    return (
        <>
            <motion.div
                initial={{ x: "100%", widows: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ duration: '.8', ease: "easeInOut" }}
                className={style.all_1}
            />
            {/* <motion.div
                initial={{ x: "100%", widows: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ duration: '2', ease: "easeInOut" }}
                className={style.all_2}
            />
            <motion.div
                initial={{ x: "100%", widows: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ duration: '4', ease: "easeInOut" }}
                className={style.all_3}
            /> */}
        </>
    );
};

export default Transition;