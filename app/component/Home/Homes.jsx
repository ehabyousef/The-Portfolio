"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Renderer, Transform, Vec3, Color, Polyline } from "ogl";
import style from "./Home.module.css";
import Image from "next/image";
import dev from "../../../public/imags/circle.png";
import { motion } from "framer-motion";
import Link from "next/link";
const Homes = () => {
    const canvasRef = useRef(null);
    // useEffect(() => {
    //     let renderer;
    //     let gl;
    //     let scene;
    //     let lines;
    //     let vertex;
    //     function init() {
    //         renderer = new Renderer({ dpr: 2 });
    //         gl = renderer.gl;
    //         document.body.appendChild(gl.canvas);
    //         gl.clearColor(0.9, 0.9, 0.9, 1);

    //         scene = new Transform();
    //         lines = [];

    //         resize();
    //         createLines();
    //         animate();
    //     }

    //     function resize() {
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //         lines.forEach((line) => line.polyline.resize());
    //     }

    //     function createLines() {
    //         function random(a, b) {
    //             const alpha = Math.random();
    //             return a * (1.0 - alpha) + b * alpha;
    //         }

    //         ['#e09f7d', '#ef5d60', '#ec4067', '#a01a7d', '#311847'].forEach((color, i) => {
    //             const line = {
    //                 spring: random(0.02, 0.1),
    //                 friction: random(0.7, 0.95),
    //                 mouseVelocity: new Vec3(),
    //                 mouseOffset: new Vec3(random(-1, 1) * 0.02),
    //             };

    //             const count = 20;
    //             const points = (line.points = []);
    //             for (let i = 0; i < count; i++) points.push(new Vec3());

    //             line.polyline = new Polyline(gl, {
    //                 points,
    //                 vertex,
    //                 uniforms: {
    //                     uColor: { value: new Color(color) },
    //                     uThickness: { value: random(20, 50) },
    //                 },
    //             });

    //             line.polyline.mesh.setParent(scene);

    //             lines.push(line);
    //         });
    //     }

    //     function handleContextLost(event) {
    //         event.preventDefault();
    //         console.warn('WebGL context lost. Attempting recovery...');
    //         // Implement context recovery logic if needed
    //         // You may need to recreate WebGL resources here
    //         // For example, you could call a function to reinitialize everything
    //         recreateWebGLResources();
    //         init();
    //     }

    //     function handleContextRestored() {
    //         console.log('WebGL context restored.');
    //         // Implement context restoration logic if needed
    //         // You may need to recreate WebGL resources here
    //         // For example, you could call a function to reinitialize everything
    //         recreateWebGLResources();
    //         init();
    //     }

    //     gl?.canvas.addEventListener('webglcontextlost', handleContextLost, false);
    //     gl?.canvas.addEventListener('webglcontextrestored', handleContextRestored, false);
    //     window.addEventListener('resize', resize, false);
    //     function animate() {
    //         const mouse = new Vec3();

    //         if ('ontouchstart' in window) {
    //             window.addEventListener('touchstart', updateMouse, false);
    //             window.addEventListener('touchmove', updateMouse, false);
    //         } else {
    //             window.addEventListener('mousemove', updateMouse, false);
    //         }

    //         function updateMouse(e) {
    //             if (e.changedTouches && e.changedTouches.length) {
    //                 e.x = e.changedTouches[0].pageX;
    //                 e.y = e.changedTouches[0].pageY;
    //             }
    //             if (e.x === undefined) {
    //                 e.x = e.pageX;
    //                 e.y = e.pageY;
    //             }

    //             mouse.set((e.x / gl.renderer.width) * 2 - 1, (e.y / gl.renderer.height) * -2 + 1, 0);
    //         }

    //         const tmp = new Vec3();

    //         function update(t) {
    //             requestAnimationFrame(update);

    //             lines.forEach((line) => {
    //                 for (let i = line.points.length - 1; i >= 0; i--) {
    //                     if (!i) {
    //                         tmp.copy(mouse).add(line.mouseOffset).sub(line.points[i]).multiply(line.spring);
    //                         line.mouseVelocity.add(tmp).multiply(line.friction);
    //                         line.points[i].add(line.mouseVelocity);
    //                     } else {
    //                         line.points[i].lerp(line.points[i - 1], 0.9);
    //                     }
    //                 }
    //                 line.polyline.updateGeometry();
    //             });

    //             renderer.render({ scene });
    //         }

    //         requestAnimationFrame(update);
    //     }
    //     function cleanup() {
    //         gl?.canvas.removeEventListener('webglcontextlost', handleContextLost);
    //         gl?.canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    //         window.removeEventListener('resize', resize);
    //     }
    //     init();

    //     return cleanup;

    // }, []);
    return (
        <>
            <div className={style.cana} ref={canvasRef}>
                <div className={style.content}>
                    <Image src={dev} className={style.img} alt="hero"></Image>
                    <div className={style.text}>
                        <motion.h1
                            initial={{ opacity: 0, translateY: 100 }}
                            animate={{ translateY: 0, opacity: 1, transition: { delay: .1, duration: 1 } }}
                        >Ihab Y Lasheen</motion.h1>
                        <motion.h3
                            initial={{ opacity: 0, translateY: 80 }}
                            animate={{ translateY: 0, opacity: 1, transition: { delay: .1, duration: 1 } }}
                        >Turning Vision Into Reality With Code And Design. </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, translateY: 60 }}
                            animate={{ translateY: 0, opacity: 1, transition: { delay: .1, duration: 1 } }}
                        >
                            As a skilled Front-end developer, I am dedicated to turning ideas
                            into innovative web applications. Explore my latest projects and
                            articles, showcasing my expertise in React.js and web development.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: .1, duration: 1 } }}
                            className={style.botons}>
                            <Link href="ehabY.pdf" target="_blank" download={true} className={style.resume}>
                                <b>resume</b>
                            </Link>
                            <Link href="mailto:ehabyousef022@gmail.com" target="_blank" className={style.contact}>
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                fill="currentColor"
                                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Contact</span>
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Homes;