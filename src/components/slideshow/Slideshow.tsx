import React from 'react'
import { motion } from "framer-motion";

const Slideshow = ({ image }) => (
    <motion.img
    key={image.src}
    src={image.src}
    initial={{ y: 300, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -300, opacity: 0 }}
    />
)

export default Slideshow
