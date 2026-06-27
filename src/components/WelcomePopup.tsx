import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Code, User, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup_v2');
    if (hasSeenPopup) return;

    let timer: ReturnType<typeof setTimeout> | null = null;
    let interactionTriggered = false;
    
    const events = ['scroll', 'click', 'touchstart', 'keydown', 'pointermove'];
    
    const handleInteraction = () => {
      if (interactionTriggered) return;
      interactionTriggered = true;
      
      // Start the 5-second timer once interaction occurs
      timer = setTimeout(() => setIsOpen(true), 5000);
      
      // Remove listeners so it only triggers once
      events.forEach(e => window.removeEventListener(e, handleInteraction));
    };

    // Listen for common interactions (using capture phase to ensure it catches everything)
    events.forEach(e => window.addEventListener(e, handleInteraction, { capture: true, passive: true }));

    return () => {
      if (timer) clearTimeout(timer);
      events.forEach(e => window.removeEventListener(e, handleInteraction, { capture: true }));
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenWelcomePopup_v2', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary-950/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Top decorative section */}
            <div className="h-32 bg-gradient-to-br from-primary-600 to-secondary-500 relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                    <img 
                      src="https://i.ibb.co/rGZMxNj1/1780219901430.png" 
                      alt="Jaydeb Jana" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-secondary-400 text-primary-950 p-2 rounded-full shadow-lg border-2 border-white">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-20 pb-8 px-8 text-center space-y-6">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-1 flex items-center justify-center gap-2">
                  <Code className="w-4 h-4" /> Website Created By
                </h2>
                <h3 className="text-3xl font-serif font-bold text-primary-950">Jaydeb Jana</h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-inner text-left space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">School Name</p>
                    <p className="font-bold text-primary-900">Champatala High School</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Class</p>
                      <p className="font-bold text-primary-900">10th</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Section & Roll</p>
                      <p className="font-bold text-primary-900">C | 162</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-primary-900 hover:bg-primary-950 text-white rounded-xl py-4 px-6 font-bold flex items-center justify-center gap-2 transition-all hover:gap-4 hover:shadow-lg focus:ring-4 focus:ring-primary-900/20 active:scale-[0.98]"
              >
                Continue to Website
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
