"use client";
import React, { useEffect, useRef, useState } from "react";
import { Renderer, Transform, Vec3, Color, Polyline } from "ogl";
import style from "./Home.module.css";
import Image from "next/image";
import dev from "../../../public/imags/circle.png";
import { motion } from "framer-motion";
import Link from "next/link";
const Homes = () => {
    const canvasRef = useRef(null);
    const [mode, setmode] = useState(localStorage.getItem('currentMode'))
    useEffect(() => {

        const renderer = new Renderer({ dpr: 2 });
        const gl = renderer.gl;
        canvasRef.current.appendChild(gl.canvas);
        if (mode === 'dark') {
            gl.clearColor(0.1, 0.1, 0.1, 1);

        } else {
            gl.clearColor(237 / 255, 237 / 255, 237 / 255, 1);
        }

        const scene = new Transform();
        const vertex = /* glsl */ `
                precision highp float;

                attribute vec3 position;
                attribute vec3 next;
                attribute vec3 prev;
                attribute vec2 uv;
                attribute float side;

                uniform vec2 uResolution;
                uniform float uDPR;
                uniform float uThickness;

                vec4 getPosition() {
                    vec4 current = vec4(position, 1);

                    vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
                    vec2 nextScreen = next.xy * aspect;
                    vec2 prevScreen = prev.xy * aspect;

                    // Calculate the tangent direction
                    vec2 tangent = normalize(nextScreen - prevScreen);

                    // Rotate 90 degrees to get the normal
                    vec2 normal = vec2(-tangent.y, tangent.x);
                    normal /= aspect;

                    // Taper the line to be fatter in the middle, and skinny at the ends using the uv.y
                    normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0) );

                    // When the points are on top of each other, shrink the line to avoid artifacts.
                    float dist = length(nextScreen - prevScreen);
                    normal *= smoothstep(0.0, 0.02, dist);

                    float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
                    float pixelWidth = current.w * pixelWidthRatio;
                    normal *= pixelWidth * uThickness;
                    current.xy -= normal * side;

                    return current;
                }

                void main() {
                    gl_Position = getPosition();
                }
            `;

        const lines = [];

        function resize() {
            renderer.setSize(window.innerWidth, window.innerHeight - 100);
            lines.forEach((line) => line.polyline.resize());
        }

        window.addEventListener("resize", resize, false);

        function random(a, b) {
            const alpha = Math.random();
            return a * (1.0 - alpha) + b * alpha;
        }

        ["#c97d59", "#0f3327", "#c97d59", "#F2e9e2", "#0f3327"].forEach(
            (color, i) => {
                const line = {
                    spring: random(0.02, 0.1),
                    friction: random(0.7, 0.95),
                    mouseVelocity: new Vec3(),
                    mouseOffset: new Vec3(random(-1, 1) * 0.02),
                };

                const count = 20;
                const points = (line.points = []);
                for (let i = 0; i < count; i++) points.push(new Vec3());

                line.polyline = new Polyline(gl, {
                    points,
                    vertex,
                    uniforms: {
                        uColor: { value: new Color(color) },
                        uThickness: { value: random(20, 50) },
                    },
                });

                line.polyline.mesh.setParent(scene);

                lines.push(line);
            }
        );

        resize();

        const mouse = new Vec3();

        if ("ontouchstart" in window) {
            window.addEventListener("touchstart", updateMouse, false);
            window.addEventListener("touchmove", updateMouse, false);
        } else {
            window.addEventListener("mousemove", updateMouse, false);
        }

        function updateMouse(e) {
            if (e.changedTouches && e.changedTouches.length) {
                e.x = e.changedTouches[0].pageX;
                e.y = e.changedTouches[0].pageY;
            }
            if (e.x === undefined) {
                e.x = e.pageX;
                e.y = e.pageY;
            }

            mouse.set(
                (e.x / gl.renderer.width) * 2 - 1,
                (e.y / gl.renderer.height) * -2 + 1,
                0
            );
        }

        const tmp = new Vec3();

        function update(t) {
            requestAnimationFrame(update);

            lines.forEach((line) => {
                for (let i = line.points.length - 1; i >= 0; i--) {
                    if (!i) {
                        tmp
                            .copy(mouse)
                            .add(line.mouseOffset)
                            .sub(line.points[i])
                            .multiply(line.spring);
                        line.mouseVelocity.add(tmp).multiply(line.friction);
                        line.points[i].add(line.mouseVelocity);
                    } else {
                        line.points[i].lerp(line.points[i - 1], 0.9);
                    }
                }
                line.polyline.updateGeometry();
            });

            renderer.render({ scene });
        }

        requestAnimationFrame(update);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);
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