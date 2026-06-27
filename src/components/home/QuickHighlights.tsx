import { motion } from 'motion/react';
import { Award, Users, BookOpen, GraduationCap } from 'lucide-react';

export function QuickHighlights() {
  const highlights = [
    { icon: <Award className="w-8 h-8" />, title: "Established 1947", desc: "75+ years of academic heritage" },
    { icon: <Users className="w-8 h-8" />, title: "3000+ Students", desc: "Co-educational higher secondary" },
    { icon: <BookOpen className="w-8 h-8" />, title: "41 Teachers", desc: "Highly qualified educators" },
    { icon: <GraduationCap className="w-8 h-8" />, title: "Govt. Sponsored", desc: "WBBSE & WBCHSE Affiliated" },
  ];

  return (
    <section className="py-16 bg-white relative z-30 -mt-10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col items-center text-center group transition-shadow hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif font-bold text-xl text-primary-950 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
