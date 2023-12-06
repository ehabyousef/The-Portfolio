"use client"
import style from './component/Transition/Transition.module.css';
import { motion } from "framer-motion";
export default function loading() {
    return (
        <div className={style.all_1}>
            <motion.div
                initial={{ y: "100%", height: '100%' }}
                animate={{ y: '0%', height: '0%' }}
                transition={{ duration: '1', ease: "easeInOut" }}
                className={style.all_2}
                id={style.state}
            />
            <motion.div
                initial={{ y: "100%", height: '100%' }}
                animate={{ y: '0%', height: '0%' }}
                transition={{ delay: '0.2', duration: '1', ease: "easeInOut" }}
                className={style.all_3}
                id={style.state}
            />
            <motion.div
                initial={{ y: "100%", height: '100%' }}
                animate={{ y: '0%', height: '0%' }}
                transition={{ delay: '.4', duration: '1', ease: "easeInOut" }}
                className={style.all_4}
                id={style.state}
            />
        </div>
    )
}
