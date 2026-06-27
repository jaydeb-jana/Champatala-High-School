import { useState } from 'react';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { images } from '../data/images';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Image as ImageIcon, Video } from 'lucide-react';

// Video Data
const videoCategories = [
  {
    category: "Platinum Jubilee 2025",
    items: [
      "1L4k3d2vzXs",
      "2kFUNCCrS_8",
      "csJNyqzarPA",
      "OTEWGH09jTI"
    ]
  },
  {
    category: "Platinum Jubilee 2023",
    items: [
      "UKWEuvxiG18",
      "52ReaeUy-TA",
      "EIJsSC5Dx6c",
      "2pzaRdBr9EI"
    ]
  },
  {
    category: "School Functions",
    items: [
      "-JczSQEA4II",
      "zvQsH_5lWDY",
      "sIkwfxBtTlM",
      "__NwoCrYrrY",
      "aPaDU-G_TLY",
      "GgkFxP3RZc4"
    ]
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  const allImages = [
    ...images.hero,
    ...images.gallery,
    ...images.teachersGroup
  ];

  return (
    <>
      <SEO 
        title="Photo & Video Gallery"
        description="Capturing moments of learning, achievement, and growth at Champatala High School through our extensive photo and video collections." 
        url="https://champatalahighschoolhs.netlify.app/gallery"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery', path: '/gallery' }]}
      />
      
      <PageBanner 
        title="Our Gallery"
        subtitle="Capturing Moments of Learning, Achievement and Growth"
        image={images.gallery[0]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
      />

      <section className="py-24 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-slate-200">
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'photos' 
                    ? 'bg-primary-900 text-white shadow-md' 
                    : 'text-slate-600 hover:text-primary-900 hover:bg-slate-50'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                Photos
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'videos' 
                    ? 'bg-primary-900 text-white shadow-md' 
                    : 'text-slate-600 hover:text-primary-900 hover:bg-slate-50'
                }`}
              >
                <Video className="w-4 h-4" />
                Videos
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'photos' ? (
              <motion.div 
                key="photos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
              >
                {allImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 6) * 0.1 }}
                    className="relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`Gallery Image ${i}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-primary-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-16"
              >
                {videoCategories.map((category, idx) => (
                  <div key={idx} className="space-y-8">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
                      <div className="h-px bg-slate-200 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map((videoId, vIdx) => (
                        <motion.div
                          key={vIdx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (vIdx % 3) * 0.1 }}
                          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                        >
                          <div className="relative pt-[56.25%] bg-slate-900">
                            <iframe
                              className="absolute inset-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${videoId}`}
                              title={`${category.category} Video ${vIdx + 1}`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              loading="lazy"
                            ></iframe>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
