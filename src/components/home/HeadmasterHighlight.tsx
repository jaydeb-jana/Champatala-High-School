import { motion } from 'motion/react';
import { Quote, Award } from 'lucide-react';
import { images } from '../../data/images';

export function HeadmasterHighlight() {
  return (
    <section className="py-24 bg-primary-950 relative overflow-hidden text-white">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-secondary-400 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary-600 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 order-2 lg:order-1 relative"
          >
            <div className="relative p-2 rounded-2xl bg-gradient-to-br from-secondary-400/30 to-primary-800/30 backdrop-blur-sm border border-white/10 shadow-2xl">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-500 rounded-full flex items-center justify-center shadow-xl z-20 animate-bounce-slow">
                <Award className="w-10 h-10 text-primary-950" />
              </div>
              <img 
                src="https://i.ibb.co/r2Qb8d2S/IMG-20260619-130436-821.jpg" 
                alt="Sudipan Khatua - Headmaster" 
                className="w-full h-auto aspect-[3/4] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                <h3 className="font-serif font-bold text-2xl text-white">Sudipan Khatua</h3>
                <p className="text-secondary-400 font-medium">Headmaster</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-secondary-300 font-medium text-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-400" /> Institution Leadership
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Leading with <span className="text-secondary-400">Vision</span> and <span className="text-secondary-400">Values</span>
            </h2>

            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-white/10" />
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-serif italic pl-4 border-l-4 border-secondary-500">
                "Education is not merely the pursuit of knowledge; it is the foundation upon which character, confidence, and a brighter future are built."
              </p>
            </div>

            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                Under the visionary leadership of Headmaster Sudipan Khatua, Champatala High School continues its proud tradition of academic excellence, discipline, and holistic student development. 
              </p>
              <p>
                His commitment to quality education, moral values, and institutional progress inspires both students and teachers to achieve their highest potential. Through strategic academic planning and a focus on core ethical principles, the institution prepares students not just for examinations, but for life.
              </p>
            </div>
            
            <div className="mt-10">
               <p className="font-serif text-2xl text-slate-300 italic opacity-80">Sudipan Khatua</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
