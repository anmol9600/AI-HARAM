import { motion } from 'motion/react';
import { reviews } from '../data';
import { Star, Quote, MapPin } from 'lucide-react';

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-4">Pilgrim Experiences</h2>
          <p className="text-stone-600 max-w-2xl mx-auto font-light text-lg">
            Hear from brothers and sisters who have embarked on these sacred journeys with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col"
            >
              <Quote className="w-10 h-10 text-gold-200 mb-6" />
              <p className="text-stone-600 italic mb-8 flex-grow">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full ring-2 ring-gold-200"
                />
                <div>
                  <h4 className="font-semibold text-emerald-950">{review.name}</h4>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-stone-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {review.location}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3.5 h-3.5 ${i < Math.floor(review.rating) ? 'text-gold-500 fill-current' : 'text-stone-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MapSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-4">Interactive Journey Map</h2>
          <p className="text-stone-600 max-w-2xl mx-auto font-light text-lg">
            Visualize the key locations of your sacred rituals in Makkah and Madinah.
          </p>
        </div>

        <div className="bg-stone-100 rounded-3xl p-4 md:p-8 shadow-inner border border-stone-200">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Text side */}
             <div className="lg:col-span-1 space-y-6 flex flex-col justify-center">
                <h3 className="text-2xl font-serif text-emerald-950">Key Ziyarat Locations</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border-l-4 border-emerald-700 shadow-sm">
                    <h4 className="font-semibold text-emerald-950 text-lg flex items-center gap-2">
                      <MapPin className="text-gold-500 w-5 h-5"/> Makkah Al-Mukarramah
                    </h4>
                    <p className="text-sm text-stone-600 mt-2">Masjid Al-Haram, Jabal al-Nour (Cave Hira), Mina, and Arafat distance highlights.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-l-4 border-gold-500 shadow-sm">
                    <h4 className="font-semibold text-emerald-950 text-lg flex items-center gap-2">
                       <MapPin className="text-gold-500 w-5 h-5"/> Madinah Al-Munawwarah
                    </h4>
                    <p className="text-sm text-stone-600 mt-2">Al-Masjid an-Nabawi, Quba Mosque, and Mount Uhud visiting sites.</p>
                  </div>
                </div>
                <p className="text-sm text-stone-500 mt-4 italic">
                  Note: All packages include dedicated AC transport between these holy sites along with certified historical guides.
                </p>
             </div>
             
             {/* Map Graphic representation - styled visual mapping */}
             <div className="lg:col-span-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-stone-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?auto=format&fit=crop&q=80" 
                  alt="Abstract Map Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 sepia-[.3]"
                />
                
                {/* Simulated Interactive Map Markers */}
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-md h-full">
                        {/* Route Line */}
                        <svg className="absolute inset-0 w-full h-full text-emerald-800/40" style={{ pointerEvents: 'none' }}>
                           <path d="M 50 150 Q 200 50 350 250" fill="transparent" stroke="currentColor" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
                        </svg>

                        {/* Makkah Marker */}
                        <motion.div 
                           initial={{ scale: 0 }}
                           whileInView={{ scale: 1 }}
                           className="absolute top-1/4 left-[10%] group cursor-pointer"
                        >
                           <div className="w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center shadow-lg border-2 border-gold-400 group-hover:scale-110 transition-transform">
                             <MapPin className="text-gold-400 w-6 h-6" />
                           </div>
                           <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                             Makkah Al-Haram
                           </div>
                        </motion.div>

                        {/* Madinah Marker */}
                        <motion.div 
                           initial={{ scale: 0 }}
                           whileInView={{ scale: 1 }}
                           transition={{ delay: 0.2 }}
                           className="absolute bottom-1/4 right-[10%] group cursor-pointer"
                        >
                           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-emerald-900 group-hover:scale-110 transition-transform">
                             <MapPin className="text-emerald-900 w-6 h-6" />
                           </div>
                           <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-emerald-900 text-white px-3 py-1 rounded shadow text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                             Masjid an-Nabawi
                           </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-2 rounded-lg text-emerald-950 shadow">
                   Interactive Explorer
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
