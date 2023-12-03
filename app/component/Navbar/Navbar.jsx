"use client"
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import style from './Navbar.module.css';
import Link from 'next/link';
const navItems = ['Home', 'About', 'Projects'];
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation'


const Navbar = (props) => {
    const { window } = props;
    const pathname = usePathname()
    console.log(pathname);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mode, setmode] = useState(localStorage.getItem('currentMode' ?? 'dark'))
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <div
                onClick={handleDrawerToggle}
                style={{ cursor: "pointer", margin: '1rem 0' }}
            >
                <CloseIcon sx={{ width: '40px', height: '40px' }} />
            </div>
            <Divider />
            <List sx={{ display: 'flex', flexDirection: "column", gap: "30px" }}>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding >
                        <ListItemButton sx={{ textAlign: 'center', fontSize: "3rem" }}>
                            <ListItemText className={style.span} sx={{ fontSize: "3rem" }} primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    useEffect(() => {
        if (mode === 'light') {
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        } else {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        }
        if (pathname === '/') {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        }
    }, [mode, pathname])

    return (
        <Box sx={{ display: 'flex', maxHeight: '8vh', transition: '.3s', position: 'relative' }}>
            <AppBar component="nav" sx={{ backgroundColor: "var(--dark-color)", position: "fixed", boxShadow: "none", alignItems: "center", padding: '10px' }}>
                <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: { sx: 'flex-start', md: 'center' }, alignItems: 'center' }}>
                    <IconButton

                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon sx={{ width: '40px', height: '40px', color: 'var(--white)' }} />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: "30px" }}>
                        <Link className={style.navlist} href='/'>
                            <button className={style.button}>
                                <span className={style.span}>Home</span>
                                <span className={style.span}>Home</span>
                            </button>
                        </Link>
                        <Link className={style.navlist} href='/about'>
                            <button className={style.button}>
                                <span className={style.span}>About</span>
                                <span className={style.span}>About</span>
                            </button>
                        </Link>
                        <Link className={style.navlist} href='/projects'>
                            <button className={style.button}>
                                <span className={style.span}>Projects</span>
                                <span className={style.span}>Projects</span>
                            </button>
                        </Link>
                    </Box>
                    {pathname !== '/' ?
                        <div
                            className={style.toggleWrapper}>
                            <input
                                onClick={() => {
                                    localStorage.setItem(
                                        "currentMode",
                                        mode === "dark" ? "light" : "dark"
                                    );
                                    setmode(localStorage.getItem("currentMode"));
                                }}
                                type="checkbox" className="dn" id="dn" />

                            <label for="dn" className={style.toggle}>
                                <span className={style.toggle__handler}>
                                    <span className={`${style.crater} ${style.crater_1}`}></span>
                                    <span className={`${style.crater} ${style.crater_2}`}></span>
                                    <span className={`${style.crater} ${style.crater_3}`}></span>
                                </span>
                                <span className={`${style.star} ${style.star_1}`}></span>
                                <span className={`${style.star} ${style.star_2}`}></span>
                                <span className={`${style.star} ${style.star_3}`}></span>
                                <span className={`${style.star} ${style.star_4}`}></span>
                                <span className={`${style.star} ${style.star_5}`}></span>
                                <span className={`${style.star} ${style.star_6}`}></span>
                            </label>
                        </div>
                        : ""}
                </Toolbar>
            </AppBar>

            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '100vw', backgroundColor: "var(--dark-color)", color: "#d5d5d5"
                    },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Navbar;