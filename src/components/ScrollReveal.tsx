import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

export interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  className?: string;
  viewportAmount?: number | 'some' | 'all';
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 24,
  xOffset = 0,
  className = '',
  viewportAmount = 0.15,
  once = true,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: viewportAmount }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
