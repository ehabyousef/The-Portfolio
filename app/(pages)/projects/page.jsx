"use client"
import React from 'react';
import { motion } from "framer-motion";
import style from './page.module.css';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import commerce from '../../../public/imags/e-commerce.png';
import prayer from '../../../public/imags/prayer.png';
import portfolio from '../../../public/imags/portfolio.png';
import aflam from '../../../public/imags/aflam.png';
import f3g from '../../../public/imags/f3g.png';
import drinks from '../../../public/imags/drink.png';
import ScrollTop from '@/app/component/ScrollTop/ScrollTop';
import Transition from '@/app/component/Transition/Transition';
const page = () => {
    const FeaturedProject = ({ type, title, summary, img, link, github }) => {
        return (
            <Typography component='article' sx={{
                width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                border: "2px solid var(--white)", borderRadius: '25px', padding: "30px", margin: '4rem 0',
                flexDirection: { xs: "column", md: "row" },
                boxShadow: "6px 6px 2px var(--white)"
            }} >
                <Link href={link} target='_blank' style={{ width: { xs: "100%", md: "50%" }, overflow: "hidden", borderRadius: '30px' }}>
                    <Image className={style.img} src={img} alt={title} />
                </Link>
                <Typography component='div' sx={{
                    width: { xs: "100%", md: "50%" }, display: 'flex', flexDirection: "column", gap: "10px",
                    paddingLeft: '1rem'
                }} >
                    <Typography component='span' sx={{ color: "var(--green)", fontSize: '1.5rem', fontWeight: 'bold' }} >{type}</Typography>
                    <Link className={style.linkName} href={link} target='_blank'>
                        <h2>{title}</h2>
                    </Link>
                    <Typography component='p' sx={{ fontWeight: '500', fontSize: "1rem", lineHeight: '1.5', letterSpacing: '2px', color: 'var(--white)' }}>{summary}</Typography>
                    <Typography component='div' sx={{ display: "flex", gap: "15px", alignItems: 'center' }}>
                        <Link href={github} target='_blank' style={{ color: 'var(--white)' }}><GitHubIcon sx={{ fontSize: '5rem' }} /></Link>
                        <Link href={link} target='_blank' style={{ backgroundColor: "var(--white)", textDecoration: 'none', padding: "10px 15px", fontSize: '1.7rem', borderRadius: '10px', fontWeight: '600', color: 'var(--dark-color)' }}>visit project</Link>
                    </Typography>
                </Typography>
            </Typography>
        )
    }

    const Project = ({ type, title, img, link, github }) => {
        return (
            <Typography component='article' sx={{
                width: '90%', display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: "2px solid var(--white)", borderRadius: '25px', padding: "30px",
                boxShadow: "6px 6px 2px var(--white)"
            }} >
                <Link href={link} target='_blank' style={{ width: "100%", height: '300px', overflow: "hidden", borderRadius: '30px' }}>
                    <Image className={style.img} src={img} alt={title} />
                </Link>
                <Typography component='div' sx={{ display: 'flex', flexDirection: "column", gap: "5px", paddingLeft: '1rem' }} >
                    <Typography component='span' sx={{ color: "var(--green)", fontSize: '1.5rem', fontWeight: 'bold' }} >{type}</Typography>
                    <Link className={style.linkName} href={link} target='_blank'>
                        <h2>{title}</h2>
                    </Link>
                    <Typography component='div' sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                        <Link href={link} target='_blank' style={{ backgroundColor: "var(--white)", textDecoration: 'none', padding: "10px 15px", fontSize: '1.7rem', borderRadius: '10px', fontWeight: '600', color: 'var(--dark-color)' }}>visit project</Link>
                        <Link href={github} target='_blank' style={{ color: 'var(--white)' }}><GitHubIcon sx={{ fontSize: '5rem' }} /></Link>
                    </Typography>
                </Typography>
            </Typography>
        )
    }

    return (
        <div>
            <Transition />
            <motion.h1
                initial={{ opacity: 0, translateY: 10 }}
                animate={{
                    translateY: 0,
                    opacity: 1,
                    transition: { delay: 0.1, duration: 1 },
                }}
                className={style.title}
            >
                Imagination Trumps Knowledge 🧠
            </motion.h1>
            <Box sx={{ margin: '3rem 0' }}>
                <Grid container spacing={4} >
                    <ScrollTop />
                    <Grid xs={12} sx={{ display: 'flex', justifyContent: { xs: "flex-end", sm: 'center' } }}>
                        <FeaturedProject
                            type='Featured Project'
                            title='E-commerce Website'
                            summary='A professional E-commerce website using React JS, Framer-motion, and Styled-components. It has smooth page transitions,'
                            img={commerce}
                            link='https://github.com/ehabyousef/E_Commerce'
                            github='https://github.com/ehabyousef/E_Commerce'
                        />
                    </Grid>
                    <Grid xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: "flex-end", sm: 'center' }, marginTop: { xs: "1.5rem", md: "0" } }}>
                        <Project
                            type='Portfolio'
                            title='React portfolio'
                            img={portfolio}
                            link='https://portfolio-75316.web.app/'
                            github='https://github.com/ehabyousef/portfolio_React'
                        />
                    </Grid>
                    <Grid xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: "flex-end", sm: 'center' }, marginTop: { xs: "1.5rem", md: "0" } }}>
                        <Project
                            type='Website'
                            title='Prayer Guide'
                            img={prayer}
                            link='https://silly-squirrel-b16c62.netlify.app/'
                            github='https://github.com/ehabyousef/prayer-guide'
                        />
                    </Grid>
                    <Grid xs={12} sx={{ display: 'flex', justifyContent: { xs: "flex-end", sm: 'center' } }}>
                        <FeaturedProject
                            type='Featured '
                            title='aflam Website'
                            summary='A professional Adlam platform website using React JS, and Styled-components. It has smooth page transitions,and full responsive '
                            img={aflam}
                            link='https://github.com/ehabyousef/The-Portfolio'
                            github='https://github.com/ehabyousef/The-Portfolio'
                        />
                    </Grid>
                    <Grid xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: "flex-end", sm: 'center' }, marginTop: { xs: "1.5rem", md: "0" } }}>
                        <Project
                            type='website'
                            title='mini e-commerce'
                            img={f3g}
                            link='https://github.com/ehabyousef/f3g'
                            github='https://github.com/ehabyousef/f3g'
                        />
                    </Grid>
                    <Grid xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: "flex-end", sm: 'center' }, marginTop: { xs: "1.5rem", md: "0" } }}>
                        <Project
                            type='Website'
                            title='Prayer Guide'
                            img={drinks}
                            github='https://github.com/ehabyousef/prayer-guide'
                            link='https://ehabyousef.github.io/landing-drinks/indesx.html'
                        />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default page;    