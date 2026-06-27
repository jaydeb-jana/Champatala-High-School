import { useState, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { images } from '../data/images';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Mail, GraduationCap, Search, Users, UserCog, Heart, ShieldPlus, Briefcase, Terminal } from 'lucide-react';

const facultyCategories = [
  {
    title: "Assistant Teachers",
    icon: Users,
    desc: "Dedicated educators guiding our regular academic curriculum.",
    members: [
      { name: "Soma Das", role: "Assistant Teacher" },
      { name: "Ranjan Kr. Mandal", role: "Assistant Teacher" },
      { name: "Baisakhi Maity", role: "Assistant Teacher" },
      { name: "Animesh Sarkar", role: "Assistant Teacher" },
      { name: "Moumita Pattanayak", role: "Assistant Teacher" },
      { name: "Ashis Kr. Bera", role: "Assistant Teacher" },
      { name: "Abdur Raquib Afsar", role: "Assistant Teacher" },
      { name: "Ashis Bhunia", role: "Assistant Teacher" },
      { name: "Debkumar Das", role: "Assistant Teacher" },
      { name: "Manik Lal Das", role: "Assistant Teacher" },
      { name: "Ashok Jana", role: "Assistant Teacher" },
      { name: "Nirmal Kr. Ray", role: "Assistant Teacher" },
      { name: "Lakshmi Kanta Jana", role: "Assistant Teacher" },
      { name: "Biswaranjan Pradhan", role: "Assistant Teacher" },
      { name: "Nityapriya Maity", role: "Assistant Teacher" },
      { name: "Sumit Mitra", role: "Assistant Teacher" },
      { name: "Partha Panda", role: "Assistant Teacher" },
      { name: "Anirban Mandal", role: "Assistant Teacher" },
      { name: "Dilip Kr. Mondal", role: "Assistant Teacher" },
      { name: "Manoj Das", role: "Assistant Teacher" },
      { name: "Surajit Majhi", role: "Assistant Teacher" },
      { name: "Sandip Kr. Ranjit", role: "Assistant Teacher" },
      { name: "Nimai Chand Sheet", role: "Assistant Teacher" },
      { name: "Moumita Pal", role: "Assistant Teacher" },
      { name: "Arabinda Kuila", role: "Assistant Teacher" }
    ]
  },
  {
    title: "Vocational Teachers",
    icon: UserCog,
    desc: "Experts imparting technical skills and practical knowledge.",
    members: [
      { name: "Anirban Kala", role: "Vocational Teacher" },
      { name: "Sabyasachi Maity", role: "Vocational Teacher" },
      { name: "Sandip Dinda", role: "Vocational Teacher" },
      { name: "Purnendu Maity", role: "Vocational Teacher" },
      { name: "Timir Baran Sarkar", role: "Vocational Teacher" },
      { name: "Haradhan Jana", role: "Vocational Teacher" },
      { name: "Ujjwal Kr. Bera", role: "Vocational Teacher" },
      { name: "Souvik Tripathi", role: "Vocational Teacher" },
      { name: "Avijit Patra", role: "Vocational Teacher" },
      { name: "Moumita Chandra", role: "Vocational Teacher" }
    ]
  },
  {
    title: "Para Teachers",
    icon: Heart,
    desc: "Providing essential academic support and guidance.",
    members: [
      { name: "Tara Rani Bhunia", role: "Para Teacher" },
      { name: "Sutapa Baguli", role: "Para Teacher" },
      { name: "Chandan Paul", role: "Para Teacher" }
    ]
  },
  {
    title: "Specialist Roles",
    icon: ShieldPlus,
    desc: "Specialized educators in dedicated operational domains.",
    members: [
      { name: "Biplab Maity", role: "ICT Teacher" },
      { name: "Sukhendu Maity", role: "NCC Teacher" }
    ]
  },
  {
    title: "Administrative & Support Staff",
    icon: Briefcase,
    desc: "The backbone ensuring smooth institutional efficiency.",
    members: [
      { name: "Suvankar Bera", role: "Clerical Staff" },
      { name: "Sutapa Kar (Das)", role: "Clerical Staff" },
      { name: "Kalpana Rani Das (Maity)", role: "Metron" }
    ]
  }
];

export function Faculty() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return facultyCategories;
    
    const query = searchTerm.toLowerCase();
    
    return facultyCategories.map(category => {
      const filteredMembers = category.members.filter(member => 
        member.name.toLowerCase().includes(query) || 
        member.role.toLowerCase().includes(query)
      );
      
      return {
        ...category,
        members: filteredMembers
      };
    }).filter(category => category.members.length > 0);
  }, [searchTerm]);

  return (
    <>
      <SEO 
        title="Faculty & Staff - Complete Directory"
        description="Meet the dedicated educators, specialists, and administrative staff at Champatala High School." 
        url="https://champatalahighschoolhs.netlify.app/faculty"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Faculty', path: '/faculty' }]}
      />
      
      <PageBanner 
        title="Faculty & Staff"
        subtitle="The Dedicated Professionals Behind Our Tradition of Excellence"
        image={images.teachersGroup[1]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Faculty' }]}
      />

      {/* Headmaster Feature */}
      <section className="py-24 bg-primary-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl -mr-40 -mt-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-primary-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 p-8 bg-primary-950 text-white flex flex-col items-center justify-center relative min-h-[400px]">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary-500 rounded-full blur-2xl" />
              </div>
              <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-secondary-400 p-1 mb-6 shadow-2xl">
                <img src={images.headmaster} alt="Sudipan Khatua" className="w-full h-full rounded-full object-cover transition-all duration-500 hover:scale-105" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary-500 text-primary-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg whitespace-nowrap">
                  <Award className="w-4 h-4" /> Leadership
                </div>
              </div>
              <h2 className="text-3xl font-serif font-bold text-center z-10">Sudipan Khatua</h2>
              <p className="text-secondary-400 font-medium text-lg mt-1 z-10">Headmaster</p>
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-primary-950 mb-6">Headmaster's Message</h3>
              <div className="prose prose-slate prose-lg">
                <p className="text-slate-600 leading-relaxed italic">
                  "It is a profound honor to lead an institution with such a rich legacy. At Champatala High School, we are deeply committed to providing an environment where academic excellence goes hand-in-hand with moral development. Our dedicated faculty works tirelessly to ensure that every student is nurtured, challenged, and prepared to face the complexities of the modern world with confidence and integrity."
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="mailto:chschampatala@gmail.com" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors font-medium">
                  <Mail className="w-5 h-5" /> Contact Headmaster
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Directory */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950 mb-6">Complete Directory</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              A highly qualified and dedicated team of educators and staff committed to shaping the future of our students.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary-600 transition-colors">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder="Search by name or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-slate-700 shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-20 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredCategories.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, py: 10 }}
                  animate={{ opacity: 1, py: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">No matching faculty found</h3>
                  <p className="text-slate-500">Try adjusting your search criteria</p>
                </motion.div>
              ) : (
                filteredCategories.map((category, catIdx) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-100">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700 shadow-sm border border-primary-100/50">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-primary-950">{category.title}</h3>
                        <p className="text-slate-500 text-sm mt-0.5">{category.desc}</p>
                      </div>
                      <div className="ml-auto bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full hidden sm:block">
                        {category.members.length} {category.members.length === 1 ? 'Member' : 'Members'}
                      </div>
                    </div>

                    {/* Member Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      <AnimatePresence>
                        {category.members.map((member, memIdx) => (
                          <motion.div
                            key={member.name}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: (memIdx % 10) * 0.05 }}
                            className="bg-white border border-slate-200 rounded-xl p-4 md:p-5 flex items-center gap-4 hover:shadow-xl hover:border-primary-300 transition-all group overflow-hidden relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-colors shadow-sm relative z-10">
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <div className="relative z-10 min-w-0">
                              <h4 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-primary-700 transition-colors truncate">
                                {member.name}
                              </h4>
                              <p className="text-xs text-slate-500 font-medium truncate">{member.role}</p>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

