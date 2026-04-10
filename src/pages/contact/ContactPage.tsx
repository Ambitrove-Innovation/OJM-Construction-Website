import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';
import { sendClientEmail } from '../../lib/resend-service';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Construction',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission

      try {

        await sendClientEmail(formData);

        setIsSubmitted(true);
        setFormData({ name: '', email: '', service: 'General Construction', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);

      } catch (error) {

        alert("Error occured trying to submit form. Please try again");

      }
      
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl mb-8">GET IN <span className="text-brand-gold">TOUCH</span></h1>
            <p className="text-xl text-black/60 mb-12">
              Have a project in mind? We'd love to hear from you. Our team is ready to provide you with a professional quote and expert advice.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Call Us</h3>
                  <p className="text-black/60">Primary: 084 993 8886</p>
                  <p className="text-black/60">Alt: +27 619 567 714</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Email Us</h3>
                  <p className="text-black/60">olivermoyo101@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Location</h3>
                  <p className="text-black/60">Johannesburg, South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Business Hours</h3>
                  <p className="text-black/60">Mon - Sun: 08:00 AM - 05:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 md:p-12 rounded-[40px] relative overflow-hidden"
          >
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 z-20 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl mb-2">Message Sent!</h3>
                <p className="text-black/60">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-brand-gold font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-black/40">Full Name</label>
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.fullName ? 'border-red-500' : 'border-black/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors`} 
                    placeholder="John Doe" 
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-black/40">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-black/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors`} 
                    placeholder="john@example.com" 
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold uppercase tracking-widest text-black/40">Service Needed</label>
                <select 
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                >
                  <option>General Construction</option>
                  <option>Plumbing Services</option>
                  <option>Finishing & Tiling</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-black/40">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-black/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors`} 
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-brand-gold transition-all shadow-lg shadow-black/10"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Map Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[500px] rounded-[40px] overflow-hidden glass p-4"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.27362734444!2d28.1273794!3d-26.01672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1bb4c79513e4099%3A0x5ba900ce03fd0302!2sOJM%20Project%20Construction!5e0!3m2!1sen!2sza!4v1712675000000!5m2!1sen!2sza" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '30px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="OJM Project Construction Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
