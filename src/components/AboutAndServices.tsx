import { motion } from 'motion/react';
import { aboutImages } from '../data';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <img 
                src={aboutImages[0]} 
                alt="Pilgrims praying" 
                className="w-full h-[200px] sm:h-[280px] md:h-[320px] object-cover rounded-tl-3xl rounded-br-3xl mt-6 md:mt-12 shadow-lg"
              />
              <div className="space-y-3 md:space-y-4">
                <img 
                  src={aboutImages[1]} 
                  alt="Madinah Mosque" 
                  className="w-full h-[120px] sm:h-[180px] md:h-[200px] object-cover rounded-tr-3xl shadow-lg"
                />
                <img 
                  src={aboutImages[2]} 
                  alt="Kaaba details" 
                  className="w-full h-[140px] sm:h-[200px] md:h-[240px] object-cover rounded-bl-3xl shadow-lg"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -left-4 md:-top-8 md:-left-8 w-48 h-48 md:w-64 md:h-64 bg-gold-400/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <span className="w-8 md:w-12 h-px bg-gold-500"></span>
              <span className="text-gold-600 font-medium tracking-wider uppercase text-xs md:text-sm">About Our Agency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-emerald-950 mb-4 md:mb-6 leading-[1.2]">
              Dedicated to Your <br className="hidden sm:block"/>Spiritual Journey Since 2010
            </h2>
            <p className="text-stone-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed font-light">
              We understand that the journey of Umrah and Hajj is the most monumental trip of a Muslim's lifetime. Our mission is to alleviate any logistical burdens so that your heart and mind can remain completely devoted to worship and seeking closeness to Allah.
            </p>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-10">
              {[
                'Registered & Ministry Approved Operators',
                'Dedicated on-site support in Makkah & Madinah',
                'Tailored packages for families and VIPs',
                'Over 50,000 satisfied pilgrims served'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function Services() {
  const servicesList = [
    {
      title: 'Umrah Visa Processing',
      desc: 'Fast documentation handling and visa issuance, taking the stress out of paperwork.',
      icon: '🛂'
    },
    {
      title: 'Flight Bookings',
      desc: 'Securing the best rates on flights worldwide directly to Jeddah or Madinah airports.',
      icon: '✈️'
    },
    {
      title: 'Premium Accommodations',
      desc: 'Strategic partnerships with luxury hotels situated securely near the Haram boundaries.',
      icon: '🏨'
    },
    {
      title: 'Logistics & Transport',
      desc: 'Comfortable air-conditioned private SUVs and buses for inter-city travel and Ziyarat.',
      icon: '🚍'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-emerald-950 text-white relative">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cpath d=\\"M20 20.5V18H0v-2h20v-2.5L22.5 11l2.5 2.5V16h15v2H25v2.5L22.5 23l-2.5-2.5z\\" fill=\\"%23d4af37\\" fill-opacity=\\"1\\" fill-rule=\\"evenodd\\"%3E%3C/path%3E%3C/svg%3E")' }}></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 md:mb-4 text-gold-400">Our Core Services</h2>
          <p className="text-emerald-100/80 max-w-2xl mx-auto font-light text-base md:text-lg">
            Everything you need for a seamless pilgrimage, handled by our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-emerald-900/50 hover:bg-emerald-900 border border-emerald-800/50 p-6 md:p-8 rounded-2xl transition-all"
            >
              <div className="text-3xl md:text-4xl mb-4 md:mb-6 bg-emerald-800/50 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-serif line-clamp-1">{service.title}</h3>
              <p className="text-emerald-100/70 font-light text-sm md:text-base leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
