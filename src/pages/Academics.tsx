import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { images } from '../data/images';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Microscope, Shield, Brain, Laptop } from 'lucide-react';

export function Academics() {
  const approaches = [
    { title: "Conceptual Learning", desc: "Moving beyond rote memorization to ensure deep understanding of subjects." },
    { title: "Practical Understanding", desc: "Application-based learning through well-equipped laboratories and practicals." },
    { title: "Discipline", desc: "Fostering an environment of respect, punctuality, and focused learning." },
    { title: "Critical Thinking", desc: "Encouraging students to question, analyze, and solve complex problems." },
    { title: "Values & Ethics", desc: "Instilling moral courage and social responsibility in future citizens." },
    { title: "Future Readiness", desc: "Preparing students for higher education and competitive career paths." }
  ];

  return (
    <>
      <SEO 
        title="Academics"
        description="Explore our academic programs, approach to education, secondary, and higher secondary curriculum at Champatala High School." 
        url="https://champatalahighschoolhs.netlify.app/academics"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Academics', path: '/academics' }]}
      />
      
      <PageBanner 
        title="Academics"
        subtitle="Empowering Students Through Quality Education"
        image={images.hero[3]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Academics' }]}
      />

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full lg:w-1/2"
            >
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-950 mb-6">Secondary Education</h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-6">
                 Our secondary education program focuses on providing a strong foundational knowledge base across all core subjects. Following the W.B.B.S.E curriculum, we ensure students are well-prepared for their first major board examinations.
               </p>
               <ul className="space-y-4">
                 {['Comprehensive Subject Coverage', 'Regular Assessments', 'Remedial Classes', 'Continuous Evaluation'].map((item) => (
                   <li key={item} className="flex items-center gap-3 text-primary-900 font-medium bg-slate-50 px-4 py-2 rounded-lg">
                     <BookOpen className="w-5 h-5 text-secondary-500" />
                     {item}
                   </li>
                 ))}
               </ul>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full lg:w-1/2 relative"
            >
               <div className="absolute inset-0 bg-primary-100 rounded-2xl transform rotate-3" />
               <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                  <GraduationCap className="w-16 h-16 text-primary-600 mb-6" />
                  <h3 className="text-2xl font-serif font-bold text-primary-950 mb-4">Higher Secondary</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Affiliated with W.B.C.H.S.E, our higher secondary section offers specialized streams to help students focus on their career aspirations. We provide excellent faculty and laboratory support for subjects requiring practical knowledge.
                  </p>
                  <div className="flex gap-4">
                    <span className="px-4 py-1.5 bg-primary-50 text-primary-700 font-bold rounded-full text-sm">Science</span>
                    <span className="px-4 py-1.5 bg-secondary-50 text-secondary-700 font-bold rounded-full text-sm">Arts / Humanities</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-950 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-800/30 rounded-full blur-3xl -mt-[400px] -mr-[400px]" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Academic Approach</h2>
            <div className="w-16 h-1 bg-secondary-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-secondary-500 text-primary-950 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                   {i % 3 === 0 ? <Brain /> : i % 3 === 1 ? <Shield /> : <Microscope />}
                </div>
                <h3 className="text-xl font-bold mb-3">{app.title}</h3>
                <p className="text-slate-400 leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
