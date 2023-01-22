import React from "react";
import { motion, useAnimationControls } from "framer-motion";

interface Props {
  text: string | undefined
  delay?: number | undefined
  initialCoordinateX?: number | undefined
  initialCoordinateY?: number | undefined
}

const AnimatedTextWord = ({ text, delay }: Props): JSX.Element | null => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const controls = useAnimationControls()

  return (
    <motion.p
    // animate={controls}
    initial={{ opacity: 0, x: '-100px' }}
    animate={{
      x: '0',
      opacity: 1
    }}
    transition={{
      type: 'tween',
      duration: 0.8,
      delay: delay
    }}
  >
    {text}
  </motion.p>
  );
};

export default AnimatedTextWord;
