import React from "react";
import { motion } from "framer-motion";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: any;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  customVariants?: any;
  [key: string]: any;
}

export function TimelineContent({
  children,
  as = "div",
  animationNum = 1,
  timelineRef,
  className,
  customVariants,
  ...props
}: TimelineContentProps) {
  // Safe mapping to motion tags
  const Component = (motion as any)[as] || motion.div;

  const defaultVariants = {
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: animationNum * 0.1,
        duration: 0.5,
      },
    },
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
