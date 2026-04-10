import { motion } from "motion/react";
import { useAccessibility } from "../contexts/AccessibilityContext";
import { Accessibility } from "lucide-react";

export default function AccessibilityWidget() {
  const { animationsEnabled, toggleAnimations } = useAccessibility();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-48 right-14 z-50 flex flex-col items-center gap-2 group">
      {/* Tooltip to explain what the button does */}
      <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
        Animations: {animationsEnabled ? "ON" : "OFF"}
      </span>

      <button
        onClick={toggleAnimations}
        aria-label={
          animationsEnabled
            ? "Disable site animations"
            : "Enable site animations"
        }
        role="switch"
        aria-checked={animationsEnabled}
        className={`w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold ${animationsEnabled ? "bg-black text-green-500 hover:bg-black" : "bg-neutral-200 text-red-500 hover:bg-neutral-300 border border-black"}`}>
        <Accessibility className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
