import { Variants } from "framer-motion";

/**
 * A "fade in and slide up" animation variant.
 *
 * @param {number} [delay=0.1] - Optional delay for the animation.
 * @returns {Variants} Framer Motion variants object.
 */
export const fadeInUp = (delay: number = 0.1): Variants => ({
  hidden: {
    opacity: 0,
    y: 20, // Start 20px down
  },
  visible: {
    opacity: 1,
    y: 0, // Animate to original position
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay,
    },
  },
});

/**
 * A parent variant for staggering child animations.
 *
 * @param {number} [stagger=0.1] - Optional stagger duration between children.
 * @returns {Variants} Framer Motion variants object.
 */
export const staggerChildren = (stagger: number = 0.1): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
    },
  },
});