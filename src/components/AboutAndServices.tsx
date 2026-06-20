import { motion } from 'motion/react';
import { aboutImages } from '../data';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={aboutImages[0]} 
                alt="Pilgrims praying" 
                className="w-full h-[300px] object-cover rounded-tl-3xl rounded-br-3xl mt-12"
              />
              <div className="space-y-4">
                <img 
                  src={aboutImages[1]} 
                  alt="Madinah Mosque" 
                  className="w-full h-[200px] object-cover rounded-tr-3xl"
                />
                <img 
                  src={aboutImages[2]} 
                  alt="Kaaba details" 
                  className="w-full h-[240px] object-cover rounded-bl-3xl"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-gold-500"></span>
              <span className="text-gold-600 font-medium tracking-wider uppercase text-sm">About Our Agency</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-6 leading-tight">
              Dedicated to Your <br/>Spiritual Journey Since 2010
            </h2>
            <p className="text-stone-600 mb-8 text-lg leading-relaxed font-light">
              We understand that the journey of Umrah and Hajj is the most monumental trip of a Muslim's lifetime. Our mission is to alleviate any logistical burdens so that your heart and mind can remain completely devoted to worship and seeking closeness to Allah.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Registered & Ministry Approved Operators',
                'Dedicated on-site support in Makkah & Madinah',
                'Tailored packages for families and VIPs',
                'Over 50,000 satisfied pilgrims served'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">{item}</span>
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
    <section id="services" className="py-24 bg-emerald-950 text-white relative">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cpath d=\\"M20 20.5V18H0v-2h20v-2.5L22.5 11l2.5 2.5V16h15v2H25v2.5L22.5 23l-2.5-2.5z\\" fill=\\"%23d4af37\\" fill-opacity=\\"1\\" fill-rule=\\"evenodd\\"%3E%3C/path%3E%3C/svg%3E")' }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gold-400">Our Core Services</h2>
          <p className="text-emerald-100/80 max-w-2xl mx-auto font-light text-lg">
            Everything you need for a seamless pilgrimage, handled by our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-emerald-900/50 hover:bg-emerald-900 border border-emerald-800/50 p-8 rounded-2xl transition-all"
            >
              <div className="text-4xl mb-6 bg-emerald-800/50 w-16 h-16 rounded-full flex items-center justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 font-serif truncate">{service.title}</h3>
              <p className="text-emerald-100/70 font-light leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
