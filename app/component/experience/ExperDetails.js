import { Typography } from "@mui/material";
import React, { useRef } from "react";
import Icons from "./Icons";
import { motion, useScroll } from "framer-motion";

export default function ExperDetails({ position, company, companyLink, time, address, work }) {
    const ref = useRef(null)
    return (
        <Typography
            component="li"
            ref={ref}
            sx={{
                margin: "10px auto",
                display: "flex",
                width: "60%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                "&:nth-of-type(1)": { marginTop: "0" },
                "&:nth-last-of-type": { marginBottom: "0" },
            }}
        >
            <Icons refer={ref} />
            <motion.div
                className="d">
                <Typography
                    component="h3"
                    sx={{
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        fontSize: "1.7rem",
                    }}
                >
                    {position}
                    <Typography
                        component="a"
                        sx={{
                            color: "var(--green)",
                            fontSize: "1.7rem",
                            fontWeight: "700",
                            textDecoration: "none",
                        }}
                        href={companyLink}
                        target="_blank"
                    >
                        {" "}
                        @{company}
                    </Typography>
                </Typography>
                <Typography
                    component="span"
                    sx={{
                        textTransform: "capitalize",
                        fontWeight: "500",
                        color: "var(--beige)",
                        opacity: ".8",
                    }}
                >
                    {time} | {address}
                </Typography>
                <Typography
                    component="p"
                    sx={{ color: "var(--white)", fontSize: "1.3rem" }}
                >
                    {work}
                </Typography>
            </motion.div>
        </Typography >
    );
}
