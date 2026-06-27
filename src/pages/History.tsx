import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { images } from '../data/images';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export function History() {
  const timeline = [
    { year: "1947", title: "School Established", text: "Champatala High School was established, marking the beginning of a long journey of educational service to the region." },
    { year: "1960s", title: "Growth & Development", text: "The school saw steady growth in student enrollment and began expanding its academic infrastructure." },
    { year: "1980s", title: "Expansion of Academic Activities", text: "Introduction of new curricular and co-curricular programs to support holistic student development." },
    { year: "2000s", title: "Higher Secondary Education", text: "Upgraded to offer Higher Secondary Education, allowing students to pursue advanced studies within the institution." },
    { year: "2010s", title: "Modern Educational Facilities", text: "Integration of modern facilities including computer labs and improved science laboratories." },
    { year: "Present", title: "Present-Day Excellence", text: "Continuing the legacy as a premier government-sponsored institution in Purba Medinipur, serving over 3000 students." }
  ];

  return (
    <>
      <SEO 
        title="Our History"
        description="Explore the rich history and journey of Champatala High School since its establishment in 1947." 
        url="https://champatalahighschoolhs.netlify.app/history"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'History', path: '/history' }]}
      />
      
      <PageBanner 
        title="Our History"
        subtitle="A Journey of Excellence Since 1947"
        image={images.hero[2]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'History' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-950 mb-6">Over 75 Years of Legacy</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Champatala High School was established in 1947 and has been serving the educational needs of the region for decades. For more than seventy-five years, the institution has continuously worked to spread knowledge, inspire students, and contribute to society through quality education.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Through dedication, discipline, and academic commitment, the school has earned respect and recognition throughout the region.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-secondary-500 to-primary-600 rounded-full opacity-20" />
            
            <div className="space-y-12 md:space-y-24">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-5/12 mb-6 md:mb-0" />
                  
                  {/* Timeline Badge */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-white border-4 border-slate-50 shadow-xl items-center justify-center shrink-0 z-10 relative">
                     <div className="absolute inset-[-8px] rounded-full border-2 border-primary-200 animate-[spin_10s_linear_infinite]" />
                     <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative group">
                      <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-right-3' : '-left-3'} hidden md:block w-6 h-6 bg-white rotate-45 border-t border-r border-slate-100 ${index % 2 === 0 ? 'border-b-0 border-l-0 border-t border-r' : 'border-t-0 border-r-0 border-b border-l'}`} />
                      
                      <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 text-secondary-700 font-bold text-sm mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-primary-950 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
