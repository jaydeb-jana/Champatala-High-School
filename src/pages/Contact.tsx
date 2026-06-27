import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { images } from '../data/images';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Youtube, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Champatala High School. Find our address, phone number, email, and institution codes." 
        url="https://champatalahighschoolhs.netlify.app/contact"
        type="website"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }]}
      />
      
      <PageBanner 
        title="Contact Us"
        subtitle="We Would Love to Hear From You"
        image={images.hero[1]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
               >
                 <h2 className="text-2xl font-serif font-bold text-primary-950 mb-6">Institution Details</h2>
                 
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                       <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-primary-950 mb-1">School Address</h4>
                       <p className="text-slate-600 leading-relaxed text-sm">
                         P.O. Champatala<br/>
                         Block Deshapran, Sub-Division Contai<br/>
                         Dist - Purba Medinipur, West Bengal<br/>
                         PIN - 721442
                       </p>
                     </div>
                   </div>

                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                       <Phone className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-primary-950 mb-1">Phone Number</h4>
                       <a href="tel:+919564069896" className="text-primary-600 hover:text-primary-800 font-medium transition-colors">
                         +91 9564069896
                       </a>
                     </div>
                   </div>

                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                       <Mail className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-primary-950 mb-1">Email Address</h4>
                       <a href="mailto:chschampatala@gmail.com" className="text-primary-600 hover:text-primary-800 font-medium transition-colors text-sm break-all">
                         chschampatala@gmail.com
                       </a>
                     </div>
                   </div>
                 </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="bg-primary-950 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
               >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-800 rounded-bl-full opacity-50" />
                 <h2 className="text-xl font-serif font-bold mb-6 relative z-10">Institution Codes</h2>
                 <ul className="space-y-4 relative z-10 text-sm">
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                      <span className="text-slate-300">W.B.B.S.E. Index No.</span>
                      <span className="font-bold text-secondary-400">V2-043</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                      <span className="text-slate-300">W.B.C.H.S.E. Code</span>
                      <span className="font-bold text-secondary-400">05525</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                      <span className="text-slate-300">WBSCVET Code</span>
                      <span className="font-bold text-secondary-400">3112</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                      <span className="text-slate-300">U-DISE Code</span>
                      <span className="font-bold text-secondary-400">19191509403</span>
                    </li>
                 </ul>
               </motion.div>
            </div>

            {/* Google Map & Quick Actions */}
            <div className="lg:col-span-3 space-y-8 flex flex-col">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100 flex-1 min-h-[400px] overflow-hidden relative"
              >
                {/* Embed Map using maps.google.com with q parameter for the school */}
                <iframe 
                  src="https://maps.google.com/maps?q=Champatala%20High%20School,%20Purba%20Medinipur&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '12px', minHeight: '400px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                ></iframe>
                <div className="absolute top-4 left-4 z-10">
                  <a 
                    href="https://maps.app.goo.gl/4o4DDyyqmpn1fEyp9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-primary-600 px-4 py-2 rounded-lg shadow-md font-medium text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors border border-slate-100"
                  >
                    Open in Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                 <motion.a 
                   href="https://www.facebook.com/share/1ECp41ZPCV/" 
                   target="_blank" rel="noopener noreferrer"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="flex items-center justify-center gap-3 bg-[#1877F2] text-white p-4 rounded-xl shadow-lg hover:bg-[#1864D9] transition-colors font-medium group"
                 >
                   <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" /> Follow on Facebook
                 </motion.a>
                 <motion.a 
                   href="https://youtube.com/@champatalahighschool5930" 
                   target="_blank" rel="noopener noreferrer"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="flex items-center justify-center gap-3 bg-[#FF0000] text-white p-4 rounded-xl shadow-lg hover:bg-[#CC0000] transition-colors font-medium group"
                 >
                   <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" /> Subscribe on YouTube
                 </motion.a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
