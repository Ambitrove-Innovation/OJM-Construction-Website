import { motion } from 'motion/react';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/27849938886"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-50 hover:bg-green-600 transition-colors group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 group-hover:rotate-12 transition-transform" />
    </motion.a>
  );
}
