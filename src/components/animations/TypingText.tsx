import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypingText({ text, className = "", delay = 0 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-0.5 h-[1em] bg-brand-gold ml-0.5 align-middle"
      />
    </span>
  );
}
