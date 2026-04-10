import { motion } from "motion/react";
import { Star } from "lucide-react";
import { REVIEWS } from "../constants/data";

export default function Reviews() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-light mb-12">
        What Clients Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {REVIEWS.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-lg text-black/80 mb-6 italic">"{review.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D7F1F1] flex items-center justify-center text-xs font-bold">
                {review.author[0]}
              </div>
              <span className="text-sm font-medium text-black/60">
                {review.author}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
