import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

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
      className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:bg-green-600 transition-colors group"
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      <span className="font-medium">Chat on WhatsApp</span>
    </motion.a>
  );
}
