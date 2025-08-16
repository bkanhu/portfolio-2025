"use client";

import { motion } from "motion/react";

const FadeDown = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeDown;
