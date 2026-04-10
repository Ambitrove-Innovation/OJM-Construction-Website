import { Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black p-12 pt-24 text-white relative overflow-hidden rounded-t-3xl ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-400">
        <div className="space-y-6">
          <h2 className="text-white text-3xl font-display font-medium">OJM Project Construction</h2>
          <p className="max-w-xs leading-relaxed">
            Your dedicated partner for high-quality construction & plumbing.
            Building trust, not just structures.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold">
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-white uppercase tracking-widest text-xs font-medium">
            Contact Information
          </h3>
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
          <h3 className="text-white uppercase tracking-widest text-xs font-medium">
            Business Hours
          </h3>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-brand-gold mt-1" />
            <div>
              <p className="text-white font-medium">Open Daily</p>
              <p>08:00 AM - 05:00 PM</p>
            </div>
          </div>
          <div className="pt-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll back to top"
              className="flex items-center gap-2 text-white hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg px-2 py-1">
              Back to top <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} OJM Project Construction. All rights
          reserved.
        </p>

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
