import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl mb-8 leading-tight">
          We're One Call <span className="italic text-brand-gold">Away.</span>
        </motion.h2>
        <p className="text-black/60 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
          Need reliable construction or plumbing services? We’re ready to help —
          quickly and professionally. Get your free quote today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="tel:0849938886"
            className="w-full sm:w-auto bg-brand-gold text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-3 group shadow-lg shadow-brand-gold/20">
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            084 993 8886
          </a>
          <a
            href="mailto:olivermoyo101@gmail.com"
            className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-brand-gold transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/10">
            <Mail className="w-6 h-6" />
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
