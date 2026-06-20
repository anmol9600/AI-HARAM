import { motion } from 'motion/react';
import { Calendar, Globe, MapPin, ShieldCheck, Map as MapIcon, ArrowRight, User, Mail, Phone, BookOpen, X, Star } from 'lucide-react';
import { heroImage, galleryImages, packages, aboutImages } from '../data';
import { FormEvent, useState } from 'react';

// Hero Section & Value Props
export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[500px] md:min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Kaaba in Makkah" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Subtle patterned overlay for Middle Eastern Vibe */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"60\\" height=\\"60\\" viewBox=\\"0 0 60 60\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"1\\"%3E%3Cpath d=\\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\"%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white mt-16 md:mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-gold-500/50 bg-black/30 backdrop-blur-md text-gold-400 font-medium tracking-widest text-[10px] md:text-xs uppercase mb-4 md:mb-6"
        >
          Sacred Journeys of a Lifetime
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 md:mb-6 leading-[1.1]"
        >
          Journey of <span className="text-gold-500 italic">Faith</span> &<br className="hidden sm:block"/> Devotion
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-200 mb-8 md:mb-10 font-light px-2"
        >
          Comprehensive Umrah & Hajj packages including visa, flights, and premium Makkah & Madinah accommodations. We handle the logistics, you focus on your Ibadah.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button 
            onClick={onBook}
            className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gold-500 text-emerald-950 font-semibold text-base md:text-lg overflow-hidden transition-all hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-emerald-900 rounded-lg shadow-lg"
          >
            <span className="relative z-10 flex items-center">
              Explore Packages
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Decorative arch at bottom */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[30px] sm:h-[60px] md:h-[120px]" style={{ transform: 'rotate(180deg)' }}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#fafaf9" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}

const valueProps = [
  { icon: ShieldCheck, title: 'Trusted Visa Processing', desc: 'Hassle-free direct visa approvals.' },
  { icon: Globe, title: 'Global Flight Booking', desc: 'Best rates on direct routes.' },
  { icon: Calendar, title: 'Premium Hotels', desc: 'Steps away from the Haram.' },
  { icon: MapIcon, title: 'Guided Ziyarat', desc: 'Expert guides in both holy cities.' },
];

export function ValueProps() {
  return (
    <section className="py-12 md:py-16 bg-stone-50 border-b border-stone-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 md:p-5 rounded-xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-emerald-900/5 cursor-default bg-white sm:bg-transparent shadow-sm sm:shadow-none"
              >
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-emerald-900 text-gold-400 rounded-lg flex items-center justify-center shadow-inner">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-emerald-950 leading-tight">{prop.title}</h3>
                  <p className="text-stone-500 text-xs md:text-sm mt-1.5 font-light">{prop.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
