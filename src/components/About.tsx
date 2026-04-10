import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Counter from "./animations/Counter";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative">
          <div className="glass p-4 rounded-[40px]">
            <img
              src="/images/inside_house_construction_ojm.webp"
              alt="Quality interior construction work by OJM Project Construction"
              width="600"
              height="800"
              className="rounded-[30px] w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 sm:-bottom-8 right-4 sm:-right-6 rotate-3 bg-brand-gold text-black border border-black p-5 sm:p-8 rounded-3xl shadow-xl w-[85%] max-w-[220px] sm:max-w-[240px] z-10">
            <p className="text-sm font-medium text-black/80 italic leading-relaxed">
              "We don't just build structures; we build lasting relationships
              through quality and trust."
            </p>
            <p className="mt-4 font-medium text-black">Oliver Moyo</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}>
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            <span className="uppercase tracking-widest text-xs font-bold text-gray-500">
              About Our Company
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl text-black mb-8 leading-tight">
            Built on <span className="text-brand-gold">Trust.</span>
            <br />
            Delivered with Excellence.
          </h2>
          <p className="text-xl text-black/60 mb-10 leading-relaxed">
            OJM Project Construction is a dedicated company committed to
            delivering high-quality workmanship. We specialize in comprehensive
            construction and plumbing services, ensuring every job is completed
            with precision and care.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-[clamp(2rem,5vw,3.5rem)] mb-1 leading-none font-display font-medium">
                <Counter value={100} suffix="%" />
              </h3>
              <p className="text-sm text-black/60 uppercase tracking-widest font-bold">
                Satisfaction
              </p>
            </div>
            <div>
              <h3 className="text-[clamp(2rem,5vw,3.5rem)] mb-1 leading-none font-display font-medium">
                <Counter value={24} suffix="/7" />
              </h3>
              <p className="text-sm text-black/60 uppercase tracking-widest font-bold">
                Response
              </p>
            </div>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center space-x-3 bg-black text-white rounded-full px-8 py-4 hover:bg-brand-gold transition-all text-sm font-bold group">
            <span>DISCOVER OUR SERVICES</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
