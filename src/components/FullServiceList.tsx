import { motion } from "motion/react";
import { CheckCircle2, Phone, Mail } from "lucide-react";

const fullServices = [
  "Demolition",
  "Building & Painting",
  "Plastering",
  "Paving & Pools",
  "Rhinolite",
  "Drywall",
  "Tiling & Ceiling",
  "Carpentry",
  "Waterproofing",
  "Gamazin etc...",
];

export default function FullServiceList() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Info & Offer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="uppercase tracking-widest text-xs font-bold text-gray-500">
                Tailored Solutions
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              COMPREHENSIVE <br />
              <span className="text-brand-gold">CONSTRUCTION</span> LIST
            </h2>

            <p className="text-xl text-black/60 mb-10 leading-relaxed max-w-lg">
              From initial demolition to the final coat of paint, OJM Project
              Construction handles every detail of your project with precision.
            </p>

            {/* Service Images */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img
                  src="/images/ojm_flyer.webp"
                  alt="OJM Extra Services Poster"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img
                  src="/images/OJM_project_construction_flyer.webp"
                  alt="OJM Services Flyer"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <a
                href="tel:0849938886"
                className="flex items-center gap-3 font-bold text-lg hover:text-brand-gold transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                084 993 8886
              </a>
              <a
                href="mailto:olivermoyo1101@gmail.com"
                className="flex items-center gap-3 font-bold text-lg hover:text-brand-gold transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                olivermoyo1101@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right Side: Service Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4">
            {fullServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:border-brand-gold/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                </div>
                <span className="font-bold text-sm tracking-tight">
                  {service}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
