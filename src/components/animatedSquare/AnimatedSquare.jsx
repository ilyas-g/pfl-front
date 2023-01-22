import React, { useEffect } from "react";
import "./styles.css";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };

function AnimatedSquare() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
    }, [controls, inView]);

    return (
    <motion.div
        animate={{ scale: 2 }}
        initial="hidden"
        variants={squareVariants}
        className="square"
    ></motion.div>
    )
}

export default AnimatedSquare;
