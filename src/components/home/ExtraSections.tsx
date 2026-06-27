import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { images } from '../../data/images';

export function GalleryPreview() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-700 font-medium text-sm">
               <ImageIcon className="w-4 h-4 text-primary-600" /> Campus Life
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950">Moments of Excellence</h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-800 transition-colors group">
            View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.gallery.slice(0, 6).map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform">
                  <span className="sr-only">View</span>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeacherPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={images.teachersGroup[0]} alt="Our Faculty" className="w-full h-auto object-cover" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950 mb-6">Dedicated & Experienced Faculty</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Our teachers are more than just educators; they are mentors, guides, and pillars of support. With years of experience and a student-first approach, our faculty ensures that every student receives the attention and quality education they deserve.
            </p>
            
            <Link to="/faculty" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-50 text-primary-800 font-semibold rounded-lg hover:bg-primary-100 transition-all border border-primary-200 group">
              Meet Our Faculty <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary-950 text-center flex items-center justify-center min-h-[400px]">
      <div className="absolute inset-0 z-0">
        <img src={images.hero[2]} alt="Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 to-primary-950/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg"
        >
          Join a Legacy of <br className="hidden md:block"/> <span className="text-secondary-400">Educational Excellence</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
        >
          Empowering Students to Build a Better Future Since 1947.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/contact" className="px-8 py-4 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            Contact School
          </Link>
          <Link to="/academics" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-medium rounded-lg transition-all">
            Explore Academics
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
