import React from 'react'
import { motion, useTransform, useViewportScroll } from "framer-motion";
import './style.css'

const variants = {
    initial: {
      opacity: 0
    },
    animation: {
      opacity: 1
    }
  };

  const PlayerProfile = (props) => {
    const { index, speed } = props;
    const { scrollYProgress } = useViewportScroll();
    const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  
    return (
      <motion.div
        variants={variants}
        initial="intial"
        animation="animation"
        style={{ y: transform }}
        className={`box box--${index}`}
      >
        Box {index}
      </motion.div>
    );
  };

  export default PlayerProfile;
