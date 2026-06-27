import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { images } from '../../data/images';

export function AboutPreview() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src="https://i.ibb.co/Z1h5mv0B/unnamed.webp" 
                alt="School Campus" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-6 rounded-xl shadow-xl max-w-[240px] border border-slate-100 z-20"
            >
              <div className="text-4xl font-serif font-bold text-secondary-500 mb-2">75+</div>
              <div className="text-primary-950 font-medium text-sm leading-tight">Years of Shaping Future Leaders</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-primary-100 px-3 py-1 rounded-full text-primary-800 font-medium text-sm">
              <span className="w-2 h-2 rounded-full bg-primary-600" /> Welcome to Our Institution
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950 mb-6 leading-tight">
              A Tradition of <br className="hidden md:block"/> Academic <span className="text-primary-600">Excellence</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Since 1947, Champatala High School has remained dedicated to character development and holistic education. Located in the heart of Purba Medinipur, we have shaped generations of students through discipline, values, and quality teaching.
            </p>

            <ul className="space-y-4 mb-10">
              {['Historical Heritage & Legacy', 'Modern Learning Environment', 'Experienced & Dedicated Faculty', 'Focus on Student Development'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary-900 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-secondary-500" />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-900 hover:bg-primary-800 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-primary-900/25 group">
              Read More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
