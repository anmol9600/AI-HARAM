import { motion } from 'motion/react';
import { packages, galleryImages } from '../data';
import { Check, Star, Navigation } from 'lucide-react';

export function Packages({ onBook }: { onBook: (packageId: string) => void }) {
  return (
    <section id="packages" className="py-16 md:py-24 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
            <span className="w-8 md:w-12 h-px bg-gold-500"></span>
            <span className="text-gold-600 font-medium tracking-wider uppercase text-xs md:text-sm">Featured Plans</span>
            <span className="w-8 md:w-12 h-px bg-gold-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-emerald-950 mb-3 md:mb-4">Hajj & Umrah Packages</h2>
          <p className="text-stone-600 max-w-2xl mx-auto font-light text-base md:text-lg px-2">
            Carefully curated itineraries designed for comfort, proximity, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-xl shadow-stone-200/50 overflow-hidden flex flex-col border border-stone-100 group/card"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-2.5 py-1 md:px-3 rounded-full text-emerald-950 font-semibold text-xs md:text-sm flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-gold-500 fill-current" />
                  {pkg.rating}
                </div>
                <div className="absolute bottom-4 left-4 bg-emerald-950 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-lg text-xs md:text-sm font-medium shadow-lg">
                  {pkg.nights} Nights
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-serif text-emerald-950 mb-2">{pkg.title}</h3>
                <p className="text-2xl md:text-3xl font-bold text-emerald-700 mb-5 md:mb-6">
                  ${pkg.price.toLocaleString()} <span className="text-sm md:text-base text-stone-400 font-normal">/ person</span>
                </p>
                
                <div className="space-y-3 mb-6 md:mb-8 flex-grow">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 md:gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-stone-600 text-sm leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => onBook(pkg.id)}
                  className="w-full py-3.5 md:py-4 bg-emerald-900 text-white font-medium hover:bg-emerald-950 transition-colors mt-auto rounded-xl shadow-md border-b-2 border-emerald-950 flex justify-center items-center gap-2 group"
                >
                  <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  Book Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-emerald-950 mb-3 md:mb-4">A Glimpse of the Holy Lands</h2>
          <p className="text-stone-600 max-w-2xl mx-auto font-light text-base md:text-lg">
            Beautiful moments captured by our pilgrims in Makkah and Madinah.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryImages.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid shadow-sm hover:shadow-lg rounded-xl md:rounded-2xl overflow-hidden group relative"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
