"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

// Animation Variants
export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface ScrollProps
  extends React.ComponentPropsWithoutRef<typeof motion.div> {
  variants?: Variants;
  initial?: string;
  whileInView?: string;
  viewport?: { once?: boolean; amount?: number };
  className?: string;
  children: React.ReactNode;
}

const Scroll: React.FC<ScrollProps> = ({
  children,
  variants,
  initial,
  whileInView,
  viewport,
  className,
  ...rest
}) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Scroll;
