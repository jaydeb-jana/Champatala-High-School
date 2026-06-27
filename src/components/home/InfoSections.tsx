import { motion } from 'motion/react';
import { Book, Microscope, Laptop, Trophy, Music, GraduationCap, Star, Brain, Heart, Shield } from 'lucide-react';

export function StatisticsSection() {
  const stats = [
    { label: "Established", value: "1947" },
    { label: "Students", value: "3000+" },
    { label: "Teachers", value: "41+" },
    { label: "Years of Excellence", value: "75+" }
  ];

  return (
    <section className="py-20 bg-secondary-500 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-6xl font-black font-serif text-primary-950 mb-2 drop-shadow-sm">{stat.value}</div>
              <div className="text-primary-900 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FacilitiesSection() {
  const facilities = [
    { icon: <Book className="w-8 h-8"/>, title: "Rich Library", desc: "Access to thousands of books for comprehensive learning." },
    { icon: <Microscope className="w-8 h-8"/>, title: "Science Labs", desc: "Well-equipped laboratories for practical understanding." },
    { icon: <Laptop className="w-8 h-8"/>, title: "Computer Room", desc: "Modern IT infrastructure for digital education." },
    { icon: <Trophy className="w-8 h-8"/>, title: "Sports Activities", desc: "Large playground facilities supporting physical development." },
    { icon: <Music className="w-8 h-8"/>, title: "Cultural Activity", desc: "Dedicated programs encouraging artistic expression." },
    { icon: <GraduationCap className="w-8 h-8"/>, title: "H.S. Education", desc: "Advanced curriculum preparing for future success." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 bg-primary-50 px-3 py-1 rounded-full text-primary-600 font-medium text-sm">
             Our Campus
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950 mb-6">Modern Educational Facilities</h2>
          <p className="text-slate-600 text-lg">We provide an enabling environment equipped with necessary resources to support comprehensive student development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all group bg-slate-50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="relative z-10 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {fac.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-primary-950 mb-3 relative z-10">{fac.title}</h3>
              <p className="text-slate-600 relative z-10">{fac.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
