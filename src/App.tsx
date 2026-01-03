import Hero from './components/Hero';
import Difference from './components/Difference';
import Features from './components/Features';
import InternshipAccelerator from './components/InternshipAccelerator';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

// 1. Import your custom logo
import logo from './assets/logo.png'; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function for smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative w-full bg-white selection:bg-brand-blue/10 scroll-smooth">
      
      {/* Global Premium Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-green-300 to-white dark:from-blue-900 dark:via-green-800 opacity-25" />
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-emerald/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-grid-slate-100 mask-radial-faded opacity-30" />
      </div>

      {/* 2. Premium Navbar */}
      <nav className="fixed top-0 w-full z-[100] bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={logo} 
              alt="dotLearn Logo" 
              className="w-10 h-10 object-contain" 
            />
            <span className="font-heading text-2xl font-bold tracking-tightest text-slate-900">
              .Learn
            </span>
          </div>

          {/* Desktop Navigation - Using IDs for links */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('curriculum')} className="text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-widest">
              Curriculum
            </button>
            <button onClick={() => scrollToSection('internships')} className="text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-widest">
              Internships
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-widest">
              Pricing
            </button>
            <button className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-brand-blue transition-all shadow-lg shadow-slate-200">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-2xl p-6 border-b border-slate-100 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <button onClick={() => scrollToSection('curriculum')} className="text-left font-bold text-slate-900 uppercase">Curriculum</button>
            <button onClick={() => scrollToSection('internships')} className="text-left font-bold text-slate-900 uppercase">Internships</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left font-bold text-slate-900 uppercase">Pricing</button>
            <button className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold">Get Started</button>
          </div>
        )}
      </nav>

      {/* 3. Main Content Sequence with IDs */}
      <main className="relative z-10">
        <Hero />
        
        {/* We map "Curriculum" to the Features/Difference section */}
        <section id="curriculum">
          <Difference />
          <Features />
        </section>

        {/* We map "Internships" to the Accelerator section */}
        <section id="internships">
          <InternshipAccelerator />
        </section>

        {/* We map "Pricing" to the CTA section (or where you want to close the deal) */}
        <section id="pricing">
          <CTA />
        </section>
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}

export default App;
