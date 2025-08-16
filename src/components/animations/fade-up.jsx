"use client";

import { motion } from "motion/react";

const FadeUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
