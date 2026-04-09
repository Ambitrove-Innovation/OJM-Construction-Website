import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const projectImages = [
  { src: "/images/Stair_tilling_ojm.webp", alt: "Stair Tiling Work", category: "Finishing" },
  { src: "/images/floorFoundation_building.jpg", alt: "Foundation Trench", category: "Construction" },
  { src: "/images/oustide_floorFoundtion.webp", alt: "Outside Floor Foundation", category: "Construction" },
  { src: "/images/construction_layout_ojm.webp", alt: "Construction Layout", category: "Construction" },
  { src: "/images/Construction_heavy_building_ojm.webp", alt: "Heavy Construction Site", category: "Construction" },
  { src: "/images/mordenHouse_construction_ojm.webp", alt: "Modern House Exterior", category: "Construction" },
  { src: "/images/construction_shot_OJM.webp", alt: "Construction Shot", category: "Construction" },
  { src: "/images/inside_house_construction_ojm.webp", alt: "Indoor Renovation", category: "Finishing" },
  { src: "/images/House_design_building_ojm.webp", alt: "Architectural Design", category: "Construction" },
];

const categories = ["All", "Construction", "Finishing", "Plumbing"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectImages 
    : projectImages.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="max-w-[1400px] mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-light mb-4"
          >
            Our Projects
          </motion.h2>
          <p className="text-black/60 max-w-md">
            A showcase of our commitment to quality across various construction and plumbing projects in Johannesburg.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`transition-all duration-300 relative py-1 ${
                activeCategory === cat ? 'text-brand-gold' : 'text-black/30 hover:text-black/60'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((image, _index) => (
            <motion.div 
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-2xl bg-white break-inside-avoid"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
