import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, User, BookOpen, MapPin, Menu } from 'lucide-react';
import { packages } from '../data';

// Navigation Bar
export function Navbar({ onBookClick }: { onBookClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 tracking-wide flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 md:gap-3 group z-50 relative">
             <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg ${isScrolled ? 'bg-emerald-900 text-gold-400' : 'bg-white/10 backdrop-blur-md border border-white/20 text-white'}`}>
               <span className="font-serif text-xl md:text-2xl group-hover:scale-110 transition-transform">H</span>
             </div>
             <div className="flex flex-col">
               <span className={`font-serif leading-none tracking-wider text-lg md:text-xl font-bold ${isScrolled ? 'text-emerald-950' : 'text-white'}`}>Al-Haram</span>
               <span className={`text-[9px] md:text-[10px] uppercase font-semibold leading-none tracking-[0.2em] ${isScrolled ? 'text-gold-600' : 'text-gold-400'}`}>Sacred Journeys</span>
             </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className={`text-sm font-medium hover:text-gold-400 transition-colors ${isScrolled ? 'text-stone-600' : 'text-zinc-200'}`}>About Us</a>
            <a href="#services" className={`text-sm font-medium hover:text-gold-400 transition-colors ${isScrolled ? 'text-stone-600' : 'text-zinc-200'}`}>Services</a>
            <a href="#packages" className={`text-sm font-medium hover:text-gold-400 transition-colors ${isScrolled ? 'text-stone-600' : 'text-zinc-200'}`}>Packages</a>
            <a href="#gallery" className={`text-sm font-medium hover:text-gold-400 transition-colors ${isScrolled ? 'text-stone-600' : 'text-zinc-200'}`}>Gallery</a>
          </div>

          <div className="hidden lg:block">
            <button 
              onClick={onBookClick}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${isScrolled ? 'bg-emerald-900 text-gold-400 hover:bg-emerald-950 hover:shadow-lg' : 'bg-gold-500 text-emerald-950 hover:bg-gold-400 border border-gold-400'}`}
            >
              Book Now
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4 z-50">
            <button 
              onClick={onBookClick}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${isScrolled ? 'bg-emerald-900 text-gold-400' : 'bg-gold-500 text-emerald-950'}`}
            >
              Book
            </button>
            <button onClick={toggleMobileMenu} className={`p-1.5 rounded-md ${isScrolled ? 'text-emerald-950' : 'text-white'}`}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-24 pb-8 px-6 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#about" onClick={toggleMobileMenu} className="text-xl font-medium text-emerald-950 border-b border-stone-100 pb-4">About Us</a>
              <a href="#services" onClick={toggleMobileMenu} className="text-xl font-medium text-emerald-950 border-b border-stone-100 pb-4">Services</a>
              <a href="#packages" onClick={toggleMobileMenu} className="text-xl font-medium text-emerald-950 border-b border-stone-100 pb-4">Packages</a>
              <a href="#gallery" onClick={toggleMobileMenu} className="text-xl font-medium text-emerald-950 border-b border-stone-100 pb-4">Gallery</a>
            </div>
            
            <button 
              onClick={() => {
                toggleMobileMenu();
                onBookClick();
              }}
              className="w-full py-4 mt-8 bg-emerald-900 text-gold-400 rounded-xl font-semibold text-lg"
            >
              Book Your Journey
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Booking Modal Form
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

export function BookingModal({ isOpen, onClose, selectedPackage }: BookingModalProps) {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 3000);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-gold-200"
          >
            {/* Header */}
            <div className="bg-emerald-900 border-b border-emerald-800 p-6 text-center relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-emerald-200 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-serif text-gold-400">Begin Your Journey</h2>
              <p className="text-emerald-100 text-sm mt-1">Fill out the form below to request a booking.</p>
            </div>

            {/* Content */}
            <div className="p-8">
              {success ? (
                 <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                   className="text-center py-10"
                 >
                   <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                     <BookOpen className="w-8 h-8 text-emerald-700" />
                   </div>
                   <h3 className="text-xl font-serif text-emerald-950 mb-2">Request Received</h3>
                   <p className="text-stone-600">Our pilgrimage advisors will contact you shortly.</p>
                 </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-emerald-950 mb-1">Full Name (As per passport)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-stone-400" />
                      </div>
                      <input required type="text" className="block w-full pl-10 pr-3 py-2.5 border border-stone-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 bg-stone-50 text-stone-900" placeholder="Ahmad Ali" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-950 mb-1">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-stone-400" />
                      </div>
                      <input required type="email" className="block w-full pl-10 pr-3 py-2.5 border border-stone-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 bg-stone-50 text-stone-900" placeholder="ahmad@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-950 mb-1">Contact Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-stone-400" />
                      </div>
                      <input required type="tel" className="block w-full pl-10 pr-3 py-2.5 border border-stone-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 bg-stone-50 text-stone-900" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-950 mb-1">Select Package</label>
                    <select 
                      defaultValue={selectedPackage || ""}
                      className="block w-full pl-3 pr-10 py-2.5 border border-stone-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 bg-stone-50 text-stone-900"
                    >
                      <option value="" disabled>Select a package option</option>
                      {packages.map(p => (
                        <option key={p.id} value={p.id}>{p.title} - {p.nights} Nights</option>
                      ))}
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl shadow bg-gold-500 text-emerald-950 hover:bg-gold-400 font-semibold text-lg transition-colors mt-6"
                  >
                    Submit Booking Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Footer
export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50 pt-16 md:pt-20 pb-8 md:pb-10 border-t-4 border-gold-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
             <div className="flex items-center gap-2 group mb-4 md:mb-6">
               <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-emerald-900 border border-gold-500/30 text-gold-400">
                 <span className="font-serif text-xl md:text-2xl group-hover:scale-110 transition-transform">H</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-serif leading-none tracking-wider text-lg md:text-xl font-bold">Al-Haram</span>
                 <span className="text-[9px] md:text-[10px] uppercase font-semibold leading-none tracking-[0.2em] text-gold-500">Sacred Journeys</span>
               </div>
            </div>
            <p className="text-emerald-200/80 max-w-sm mb-6 leading-relaxed font-light text-sm md:text-base">
              Providing trusted, premium logistical support for Hajj and Umrah pilgrims globally. Your spiritual peace is our ultimate priority.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {/* social icons mockup */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-emerald-800 flex items-center justify-center text-gold-400 hover:bg-emerald-900 transition-colors cursor-pointer text-sm">f</div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-emerald-800 flex items-center justify-center text-gold-400 hover:bg-emerald-900 transition-colors cursor-pointer text-sm">t</div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-emerald-800 flex items-center justify-center text-gold-400 hover:bg-emerald-900 transition-colors cursor-pointer text-sm">in</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-base md:text-lg text-gold-400 mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2.5 md:space-y-3 font-light text-sm md:text-base text-emerald-200/80">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#packages" className="hover:text-gold-400 transition-colors">Umrah Packages</a></li>
              <li><a href="#packages" className="hover:text-gold-400 transition-colors">Hajj 2026</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Visa Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base md:text-lg text-gold-400 mb-4 md:mb-6">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4 font-light text-sm md:text-base text-emerald-200/80">
              <li className="flex items-start gap-2.5 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>123 Pilgrim Way, Suite 404<br/>London, UK WC1E 7HX</span>
              </li>
              <li className="flex items-center gap-2.5 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-gold-500 shrink-0" />
                <span>+44 20 7946 0958</span>
              </li>
              <li className="flex items-center gap-2.5 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-gold-500 shrink-0" />
                <span className="break-all">bookings@alharamsacred.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-900 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between font-light text-xs md:text-sm text-emerald-400/60 gap-4 md:gap-0 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Al-Haram Sacred Journeys. <br className="md:hidden"/>All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-200">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
