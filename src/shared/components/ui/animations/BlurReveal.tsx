import { motion } from 'motion/react';

interface BlurRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function BlurReveal({ text, className = "", delay = 0 }: BlurRevealProps) {
  const letters = text.split("");

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: "easeOut"
          }}
          className="inline-block whitespace-pre"
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
