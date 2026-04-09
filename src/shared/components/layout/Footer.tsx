import { Phone, Mail, Clock, ArrowUpRight, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1EFza9TTsJ/',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/olivermoyo1101instragram?igsh=MXRvYXZ3ejhmaGIzNQ==&utm_source=ig_contact_invite',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@olivermoyo11011986?_r=1&_t=ZS-95P2H5S2Z4z',
    icon: TikTokIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black p-12 text-white relative overflow-hidden  rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-400">
        <div className="space-y-6">
          <h5 className="text-white font-bold text-3xl tracking-tighter">OJM.INC</h5>
          <p className="max-w-xs leading-relaxed">
            Your dedicated partner for high-quality construction & plumbing. Building trust, not just structures.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h6 className="text-white font-bold uppercase tracking-widest text-xs">Contact Information</h6>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Primary: 084 993 8886</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Alt: +27 619 567 714</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>olivermoyo101@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h6 className="text-white font-bold uppercase tracking-widest text-xs">Business Hours</h6>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-brand-gold mt-1" />
            <div>
              <p className="text-white font-medium">Open Daily</p>
              <p>08:00 AM - 05:00 PM</p>
            </div>
          </div>
          <div className="pt-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll back to top"
              className="flex items-center gap-2 text-white hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg px-2 py-1"
            >
              Back to top <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
  
       {/* Bottom Section */}
      <div className="border-t border-white/5 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        
           <p>© {new Date().getFullYear()} OJM Project Construction. All rights reserved.</p>
           
            <p className="mt-3 md:mt-0">
              Designed & Developed by{" "}
              <Link
                to="https://www.ambitrove.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium">
                Ambitrove Team
              </Link>
            </p>
          </div>
    </footer>
  );
}
