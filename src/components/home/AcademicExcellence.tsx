import { motion } from 'motion/react';
import { Star, Brain, Heart, Shield } from 'lucide-react';
import { cn } from '../../lib/utils';
import { images } from '../../data/images';

export function AcademicExcellence() {
  const points = [
    { icon: <Star />, title: "Quality Education", desc: "Rigorous curriculum aligned with standard boards." },
    { icon: <Brain />, title: "Critical Thinking", desc: "Developing analytical and problem-solving skills." },
    { icon: <Heart />, title: "Character Building", desc: "Instilling moral values and social responsibility." },
    { icon: <Shield />, title: "Future Preparation", desc: "Equipping students for higher education and careers." },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
             <div className="text-sm font-medium text-primary-600 mb-3 uppercase tracking-wider">Our Approach</div>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950 mb-6 drop-shadow-sm">Academic Excellence & Values</h2>
             <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl">
               Education at Champatala High School goes beyond textbooks. We focus on conceptual learning, practical understanding, and ethical values to create well-rounded individuals ready to face tomorrow's challenges.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {points.map((pt, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                   <div className="w-12 h-12 shrink-0 bg-white shadow-md rounded-lg flex items-center justify-center text-secondary-500 border border-slate-100">
                     {pt.icon}
                   </div>
                   <div>
                     <h4 className="font-bold text-primary-950 mb-1">{pt.title}</h4>
                     <p className="text-sm text-slate-500 leading-relaxed">{pt.desc}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] group p-2 bg-white">
                <img src={images.hero[3]} alt="Academics" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
             </div>
             
             {/* Simple decorative element */}
             <div className="absolute -z-10 top-1/2 -right-8 w-64 h-64 bg-primary-100 rounded-full blur-3xl -translate-y-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
