import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { images } from '../data/images';
import { motion } from 'motion/react';
import { Star, Target, Shield, BookOpen, Users, Building, Heart, Presentation } from 'lucide-react';

export function About() {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Champatala High School, our mission, vision, core values, and why we are a pillar of educational excellence in Purba Medinipur." 
        url="https://champatalahighschoolhs.netlify.app/about"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }]}
      />
      
      <PageBanner 
        title="About Champatala High School"
        subtitle="A Legacy of Educational Excellence Since 1947"
        image={images.hero[1]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-950 mb-6">Our Institution</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Champatala High School is a respected government-sponsored co-educational higher secondary institution located in the heart of Purba Medinipur. Since its establishment in 1947, the school has remained dedicated to academic excellence, character development, and holistic education.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              The institution has played a significant role in shaping generations of students and continues to inspire young minds through quality education, discipline, and values.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <Target className="w-12 h-12 text-primary-600 mb-6 relative z-10" />
              <h3 className="text-2xl font-serif font-bold text-primary-950 mb-4 relative z-10">Our Mission</h3>
              <ul className="space-y-3 relative z-10">
                {['Academic Excellence', 'Character Building', 'Student Development', 'Social Responsibility', 'Lifelong Learning'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-primary-900 p-10 rounded-2xl shadow-xl border border-primary-800 relative overflow-hidden group text-white"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-800 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <Star className="w-12 h-12 text-secondary-400 mb-6 relative z-10" />
              <h3 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">Our Vision</h3>
              <ul className="space-y-3 relative z-10">
                {['Future Leaders', 'Innovation', 'Modern Education', 'Ethical Values', 'Community Contribution'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-300">
                     <div className="w-1.5 h-1.5 rounded-full bg-secondary-400" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-950 mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-secondary-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[{i: <Shield/>, t: "Integrity"}, {i: <Heart/>, t: "Respect"}, {i: <BookOpen/>, t: "Knowledge"}, {i: <Target/>, t: "Discipline"}, {i: <Star/>, t: "Excellence"}].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-6 rounded-xl text-center group hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto bg-white shadow-sm rounded-full flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {val.i}
                </div>
                <h4 className="font-bold text-primary-950">{val.t}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full border-[40px] border-secondary-500/20" />
           <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full border-[40px] border-primary-500/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Why Choose Our School</h2>
            <div className="w-16 h-1 bg-secondary-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {title: "Experienced Faculty", icon: <Users/>},
              {title: "Strong Academic Environment", icon: <BookOpen/>},
              {title: "Modern Facilities", icon: <Building/>},
              {title: "Cultural Activities", icon: <Presentation/>},
              {title: "Sports Activities", icon: <Target/>},
              {title: "Student Development", icon: <Star/>},
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-4"
              >
                <div className="p-3 bg-secondary-500 text-primary-950 rounded-lg shadow-inner">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-lg">{feature.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
