import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface CounterProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

export default function Counter({ 
  value, 
  duration = 2, 
  className = "", 
  suffix = "", 
  prefix = "",
  delay = 0 
}: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const controls = animate(count, value, { duration });
        return controls.stop;
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, duration, count, delay]);

  return (
    <span ref={ref} className={className} aria-live="polite">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
