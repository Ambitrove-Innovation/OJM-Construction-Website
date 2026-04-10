import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../constants/data";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
          <span className="uppercase tracking-widest text-xs font-bold text-gray-500">
            Common Questions
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl">
          FREQUENTLY ASKED <span className="text-brand-gold">QUESTIONS</span>
        </h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div key={index} className="glass rounded-3xl overflow-hidden">
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
              aria-expanded={activeIndex === index}>
              <span className="font-semibold text-lg">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}>
                  <div className="px-8 pb-6 text-black/60 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
