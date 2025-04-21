"use client";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./Navbar.module.css";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";

const Navbar = (props) => {
  const { window } = props;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mode, setMode] = useState("dark"); // default value
  const { scrollYProgress } = useScroll();

  // Safe localStorage access on client-side only
  useEffect(() => {
    const storedMode = localStorage.getItem("currentMode") || "dark";
    setMode(storedMode);
  }, []);

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [mode]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleThemeToggle = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newMode);
    setMode(newMode);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <div
        onClick={handleDrawerToggle}
        style={{ cursor: "pointer", margin: "1rem 0" }}
      >
        <CloseIcon
          sx={{ width: "40px", height: "40px", color: "var(--white)" }}
        />
      </div>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          marginTop: "1rem",
        }}
      >
        {["Home", "About", "Projects"].map((text) => (
          <Link
            key={text}
            onClick={handleDrawerToggle}
            className={style.navlist}
            href={`/${text === "Home" ? "" : text.toLowerCase()}`}
          >
            <button className={style.button}>
              <span className={style.span}>{text}</span>
              <span className={style.span}>{text}</span>
            </button>
          </Link>
        ))}
      </Box>

      {/* Social Links (unchanged) */}
      <div className={style.parent}>
        {/* ...social icons here, same as your original */}
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        maxHeight: "8vh",
        transition: ".3s",
        position: "relative",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "var(--dark-color)",
          position: "fixed",
          boxShadow: "none",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className={style.scrollbar}
        />
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { sx: "flex-start", md: "center" },
            alignItems: "center",
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon
              sx={{ width: "40px", height: "40px", color: "var(--white)" }}
            />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "30px" }}>
            {["Home", "About", "Projects"].map((text) => (
              <Link
                key={text}
                className={style.navlist}
                href={`/${text === "Home" ? "" : text.toLowerCase()}`}
              >
                <button className={style.button}>
                  <span className={style.span}>{text}</span>
                  <span className={style.span}>{text}</span>
                </button>
              </Link>
            ))}
          </Box>

          {/* Dark Mode Toggle */}
          <div className={style.toggleWrapper}>
            <input
              onClick={handleThemeToggle}
              type="checkbox"
              className="dn"
              id="dn"
            />
            <label htmlFor="dn" className={style.toggle}>
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
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100vw",
            backgroundColor: "var(--dark-color)",
            color: "#d5d5d5",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
