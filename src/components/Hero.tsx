import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import TypingText from "./animations/TypingText";
import BlurReveal from "./animations/BlurReveal";
import Counter from "./animations/Counter";

export default function Hero() {
  return (
    <section className="relative pb-10 min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 rounded-md ">
        <img
          src="/images/mordenHouse_construction_ojm.webp"
          alt="Modern residential construction project in Johannesburg by OJM Project Construction"
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start">
            <div className="glass mt-7 p-6 md:p-12 rounded-[40px] max-w-2xl w-full text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 bg-yellow-400 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                <TypingText
                  text="Professional Construction Services"
                  delay={0.8}
                />
              </div>

              <h1 className="text-[clamp(2.25rem,3.5vw,3.75rem)] leading-[1.05] text-black mb-6 wrap-break-words">
                <BlurReveal text="QUALITY" delay={0.2} />
                <br />
                <BlurReveal text="CONSTRUCTION" delay={0.4} />
                <br />
                <span className="text-brand-gold">
                  <BlurReveal text="SOLUTIONS" delay={0.6} />
                </span>
              </h1>

              <p className="text-base md:text-lg text-black/70 mb-8 max-w-md mx-auto lg:mx-0">
                Reliable building, plumbing & finishing services across
                Johannesburg. We build trust, not just structures.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="tel:0849938886"
                  className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-brand-gold transition-all flex items-center justify-center gap-2 group">
                  BOOK A MEETING
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center justify-center gap-3 px-6 py-4 glass rounded-full">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img
                          src={`https://picsum.photos/seed/${i}/100/100`}
                          alt="Client"
                          width="100"
                          height="100"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    <Counter value={500} suffix="+" duration={2.5} /> Happy
                    Clients
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block">
            <div className="relative">
              <div className="glass p-4 rounded-[40px] rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/Construction_heavy_building_ojm.webp"
                  alt="Construction Work"
                  width="600"
                  height="800"
                  className="rounded-[30px] w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl max-w-[220px]">
                <div className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-yellow-400 mb-1 leading-none">
                  <Counter value={15} suffix="+" />
                </div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">
                  Years of Excellence
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            "Skilled Team",
            "Fast Response",
            "Quality Work",
            "Trusted Results",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-white/80 font-medium tracking-wide">
              <div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center text-white text-[10px]">
                ✓
              </div>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
