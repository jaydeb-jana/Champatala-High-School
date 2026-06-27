import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change and scroll to top
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'History', path: '/history' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Academics', path: '/academics' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Announcement Bar */}
      <div className="bg-primary-900 text-white text-xs sm:text-sm py-2 overflow-hidden relative border-b border-primary-800">
        <div className="container mx-auto">
          <div className="flex animate-marquee whitespace-nowrap hover:pause">
            <div className="flex gap-4 sm:gap-8 items-center shrink-0 pr-8">
              <span className="flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5" /> Established in 1947</span>
              <span className="flex items-center gap-1.5">• Government Sponsored Institution</span>
              <span className="flex items-center gap-1.5">• W.B.B.S.E. & W.B.C.H.S.E. Affiliated</span>
              <span className="flex items-center gap-1.5">• <a href="tel:+919564069896" className="flex items-center gap-1.5 hover:text-secondary-400 transition-colors"><Phone className="w-3.5 h-3.5" /> +91 9564069896</a></span>
              <span className="flex items-center gap-1.5">• <a href="mailto:chschampatala@gmail.com" className="flex items-center gap-1.5 hover:text-secondary-400 transition-colors"><Mail className="w-3.5 h-3.5" /> chschampatala@gmail.com</a></span>
            </div>
            {/* Duplicated for seamless marquee */}
             <div className="flex gap-4 sm:gap-8 items-center shrink-0 pr-8" aria-hidden="true">
              <span className="flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5" /> Established in 1947</span>
              <span className="flex items-center gap-1.5">• Government Sponsored Institution</span>
              <span className="flex items-center gap-1.5">• W.B.B.S.E. & W.B.C.H.S.E. Affiliated</span>
              <span className="flex items-center gap-1.5">• <a href="tel:+919564069896" className="flex items-center gap-1.5 hover:text-secondary-400 transition-colors"><Phone className="w-3.5 h-3.5" /> +91 9564069896</a></span>
              <span className="flex items-center gap-1.5">• <a href="mailto:chschampatala@gmail.com" className="flex items-center gap-1.5 hover:text-secondary-400 transition-colors"><Mail className="w-3.5 h-3.5" /> chschampatala@gmail.com</a></span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "glass-dark text-white border-white/10 shadow-lg py-3" 
            : "bg-white text-primary-950 border-gray-100 py-4 shadow-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center p-1 shadow-sm border border-slate-100 group-hover:scale-105 transition-transform overflow-hidden">
                <img 
                  src="https://i.ibb.co/TxDpdYX9/Screenshot-20260619-115704.png" 
                  alt="Champatala High School Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className={cn("font-serif font-bold text-lg sm:text-xl leading-snug tracking-tight", isScrolled ? "text-white" : "text-primary-950")}>
                  Champatala High School
                </span>
                <span className={cn("text-[10px] sm:text-xs tracking-wider uppercase font-medium", isScrolled ? "text-slate-300" : "text-slate-500")}>
                  Estd. 1947
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                 <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-all relative overflow-hidden group",
                    location.pathname === link.path 
                      ? (isScrolled ? "text-secondary-400" : "text-primary-700 bg-primary-50")
                      : (isScrolled ? "text-slate-200 hover:text-white" : "text-slate-600 hover:text-primary-800 hover:bg-slate-50")
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 w-full h-0.5 bg-current" />
                  )}
                </Link>
              ))}
              
              <div className="ml-4 pl-4 border-l border-current/20 flex items-center gap-3">
                <Link to="/contact" className={cn(
                  "px-5 py-2 font-medium text-sm rounded-full transition-all flex items-center gap-2",
                  isScrolled 
                    ? "bg-secondary-500 text-primary-950 hover:bg-secondary-400" 
                    : "bg-primary-900 text-white hover:bg-primary-800 shadow-md hover:shadow-lg"
                )}>
                  Contact Us
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 rounded-md hover:bg-black/5 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-primary-950/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-[70] shadow-2xl flex flex-col overflow-y-auto"
            >
              <div className="p-5 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img src="https://i.ibb.co/TxDpdYX9/Screenshot-20260619-115704.png" alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="font-serif font-bold text-primary-950 text-sm">Menu</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 bg-gray-50 text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        location.pathname === link.path
                          ? "bg-primary-50 text-primary-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-primary-900"
                      )}
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="mt-6 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link to="/contact" className="w-full py-3 bg-primary-900 text-white rounded-lg flex items-center justify-center font-medium shadow-md hover:bg-primary-800 transition-colors">
                    Admissions & Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 w-full relative">
        {children}
      </main>

      {/* Premium Footer */}
      <footer className="bg-primary-950 text-slate-300 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary-800/30 blur-3xl" />
        
        <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            
            {/* Column 1: About */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden">
                  <img src="https://i.ibb.co/TxDpdYX9/Screenshot-20260619-115704.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-lg leading-tight">Champatala High School</h3>
                  <p className="text-sm text-secondary-400">Established 1947</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                A prestigious government-sponsored co-educational higher secondary institution dedicated to academic excellence, discipline, and holistic student development in Purba Medinipur.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-white text-lg mb-6 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-secondary-500"></div> Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'About', 'History', 'Faculty', 'Academics', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-3 h-3 text-secondary-500 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="font-serif font-bold text-white text-lg mb-6 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-secondary-500"></div> Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-secondary-500 shrink-0" />
                  <span className="text-slate-400 leading-relaxed">
                    P.O. Champatala, Block - Deshapran, Sub-Division - Contai,<br/>
                    Dist - Purba Medinipur, WB, PIN - 721442
                  </span>
                </li>
                <li className="flex gap-3 text-sm items-center">
                  <Phone className="w-5 h-5 text-secondary-500 shrink-0" />
                  <a href="tel:+919564069896" className="text-slate-400 hover:text-white transition-colors">
                    +91 9564069896
                  </a>
                </li>
                <li className="flex gap-3 text-sm items-center">
                  <Mail className="w-5 h-5 text-secondary-500 shrink-0" />
                  <a href="mailto:chschampatala@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                    chschampatala@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Institution Codes */}
            <div>
              <h4 className="font-serif font-bold text-white text-lg mb-6 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-secondary-500"></div> Institution Codes
              </h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                  <span className="text-slate-400">W.B.B.S.E. Index</span>
                  <span className="font-mono text-white bg-white/10 px-2 py-0.5 rounded text-xs">V2-043</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                  <span className="text-slate-400">W.B.C.H.S.E. Code</span>
                  <span className="font-mono text-white bg-white/10 px-2 py-0.5 rounded text-xs">05525</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                  <span className="text-slate-400">WBSCVET Code</span>
                  <span className="font-mono text-white bg-white/10 px-2 py-0.5 rounded text-xs">3112</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">U-DISE Code</span>
                  <span className="font-mono text-white bg-white/10 px-2 py-0.5 rounded text-xs">19191509403</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} Champatala High School. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/1ECp41ZPCV/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-secondary-500 hover:text-white hover:border-secondary-500 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://youtube.com/@champatalahighschool5930" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-secondary-500 hover:text-white hover:border-secondary-500 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
            <div className="text-slate-400 text-center md:text-right text-xs">
              Designed & Developed by <a href="https://portfoliojaydebjana.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 font-medium hover:text-white transition-colors">Jaydeb Jana</a><br/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
