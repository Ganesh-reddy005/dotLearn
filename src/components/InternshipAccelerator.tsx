import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  Search, 
  Mic, 
  Sparkles,
  ArrowRight,
  Bell,
  TrendingUp,
  Globe
} from 'lucide-react';
import { useState, useEffect } from 'react';

// 1. AI Mock Interview Visual Simulation
const InterviewMockup = () => {
  const [feedback, setFeedback] = useState("Analyzing logic...");
  
  useEffect(() => {
    const texts = ["Logic: Exceptional", "Tone: Confident", "Clarity: High", "Analyzing trade-offs..."];
    let i = 0;
    const interval = setInterval(() => {
      setFeedback(texts[i % texts.length]);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-6 bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl w-full max-w-[320px]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Live Mock Session</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1 h-3 bg-brand-blue/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-1 h-5 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 h-2 bg-brand-blue/60 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        {["Architectural Depth", "Communication Flow", "Data Structure Choice"].map((p, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
            <span className="text-[11px] text-slate-300 font-medium">{p}</span>
          </div>
        ))}
      </div>

      <div className="p-4 bg-brand-blue/10 border-l-2 border-brand-blue rounded-r-xl">
        <p className="text-[10px] text-brand-blue font-bold mb-1 uppercase tracking-tighter">AI Coach Insight</p>
        <p className="text-[11px] text-slate-100 leading-relaxed italic">"{feedback}"</p>
      </div>
    </div>
  );
};

// 2. AI ATS Resume Visual Simulation
const ResumeMockup = () => {
  return (
    <div className="relative p-6 bg-white rounded-[2rem] border border-slate-100 shadow-2xl w-full max-w-[320px] overflow-hidden">
      <motion.div 
        animate={{ y: [0, 240, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-emerald to-transparent z-20 shadow-[0_0_15px_#10B981]"
      />
      
      <div className="opacity-40 space-y-3">
        <div className="h-4 w-1/2 bg-slate-100 rounded mb-4" />
        <div className="space-y-2">
          <div className="h-1.5 w-full bg-slate-50 rounded" />
          <div className="h-1.5 w-full bg-slate-50 rounded" />
          <div className="h-1.5 w-3/4 bg-slate-50 rounded" />
        </div>
        <div className="h-24 w-full bg-slate-50 rounded-xl flex items-center justify-center border border-dashed border-slate-200">
           <Search className="w-6 h-6 text-slate-200" />
        </div>
      </div>

      <div className="absolute bottom-4 right-4 px-3 py-1 bg-brand-emerald text-white text-[10px] font-bold rounded-full flex items-center gap-1 shadow-xl">
        <Sparkles className="w-3 h-3" /> 98% ATS SCORE
      </div>
    </div>
  );
};

// 3. Live Notification Feed
const NotificationFeed = () => {
  const [notifs, setNotifs] = useState([
    { id: 1, company: "Stripe", role: "Backend Intern" },
    { id: 2, company: "Vercel", role: "Frontend Architect" }
  ]);

  useEffect(() => {
    const companies = ["Google", "Meta", "Tesla", "Airbnb", "OpenAI"];
    const interval = setInterval(() => {
      const newNotif = {
        id: Date.now(),
        company: companies[Math.floor(Math.random() * companies.length)],
        role: "Software Engineer Intern"
      };
      setNotifs(prev => [newNotif, ...prev.slice(0, 1)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2 w-full max-w-[280px]">
      <AnimatePresence mode="popLayout">
        {notifs.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="p-3 bg-white/80 backdrop-blur-md border border-slate-100 rounded-xl shadow-md flex items-center gap-3"
          >
            <div className="w-7 h-7 rounded-full bg-brand-emerald/10 flex items-center justify-center shrink-0">
              <Bell className="w-3.5 h-3.5 text-brand-emerald" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold text-brand-emerald uppercase mb-0.5">{n.company}</p>
              <p className="text-[10px] font-bold text-slate-900 truncate">{n.role}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const InternshipAccelerator = () => {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      {/* 1. Background Decor: Manual Gradient Override for Perfection */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-green-300 to-white dark:from-blue-900 dark:via-green-800 opacity-25" />
        <div className="absolute inset-0 bg-grid-slate-100 mask-radial-faded opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-emerald/5 blur-[150px] rounded-full -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 mb-6 backdrop-blur-sm"
          >
            <Briefcase className="w-4 h-4 text-brand-emerald" />
            <span className="text-xs font-bold text-brand-emerald uppercase tracking-[0.2em]">Industry Readiness Hub</span>
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold tracking-tightest mb-6 leading-[1.1] text-slate-900">
            Don't just build Features. <br />
            <span className="opacity-50 bg-clip-text bg-gradient-success font-extrabold">Build your Career.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Our AI-Agentic ecosystem provides the industry-standard tools needed to bridge the gap 
            between being a "Copy-Paste Coder" and a "Thinking Engineer."
          </p>
        </div>

        {/* Main Career Bento Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div className="group p-10 rounded-[3rem] bg-white/40 border border-white/60 backdrop-blur-xl flex flex-col lg:flex-row items-center gap-12 hover:bg-white/80 hover:shadow-2xl transition-all duration-700">
            <div className="flex-1 order-2 lg:order-1">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900 font-heading">AI Interview Coach</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Master the high-pressure FAANG communication style. Our AI coach analyzes your 
                <span className="text-brand-blue font-bold"> architectural clarity</span> and reasoning depth in real-time.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-brand-blue transition-colors cursor-pointer">
                START PRACTICE <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1 flex justify-center order-1 lg:order-2">
              <InterviewMockup />
            </div>
          </div>

          <div className="group p-10 rounded-[3rem] bg-white/40 border border-white/60 backdrop-blur-xl flex flex-col lg:flex-row items-center gap-12 hover:bg-white/80 hover:shadow-2xl transition-all duration-700">
            <div className="flex-1 order-2 lg:order-1">
              <div className="w-12 h-12 rounded-2xl bg-brand-emerald/10 flex items-center justify-center mb-6 text-brand-emerald">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900 font-heading">ATS-Ready Builder</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Bypass robotic filters with industry-approved layouts. One-click conversion of 
                your product builds into <span className="text-brand-emerald font-bold">98% ATS-score</span> resumes.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-brand-emerald transition-colors cursor-pointer">
                GENERATE RESUME <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1 flex justify-center order-1 lg:order-2">
              <ResumeMockup />
            </div>
          </div>
        </div>

        {/* Bottom Tier: Jobs & Trends */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-[2.5rem] bg-white/30 backdrop-blur-md border border-white/40 flex flex-col items-center justify-center text-center">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Live Job Stream</h4>
            <NotificationFeed />
            <p className="mt-6 text-[11px] text-slate-400 font-medium">Synced with LinkedIn, Indeed & Wellfound</p>
          </div>

          <div className="p-10 rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all">
             <TrendingUp className="w-10 h-10 text-brand-blue mb-6" />
             <h4 className="text-xl font-bold mb-3 text-slate-900">2026 Skills Map</h4>
             <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Stay ahead of the curve with real-time heatmaps for AI/ML and Backend demand.
             </p>
             <div className="flex gap-2">
               <div className="h-1.5 flex-1 bg-brand-blue rounded-full" />
               <div className="h-1.5 flex-1 bg-brand-blue/30 rounded-full" />
               <div className="h-1.5 flex-1 bg-brand-blue/10 rounded-full" />
             </div>
          </div>

          <div className="p-10 rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all">
             <Globe className="w-10 h-10 text-brand-cyan mb-6" />
             <h4 className="text-xl font-bold mb-3 text-slate-900">Global Internship Path</h4>
             <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Direct bridge to US & EU tech startups looking for project-ready engineers.
             </p>
             <div className="flex -space-x-3 mb-6">
  {[
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" },
    { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Amazon", url: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" },
    { name: "Netflix", url: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg" }
  ].map((company, i) => (
    <div 
      key={i} 
      className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center shadow-sm overflow-hidden p-2"
      title={company.name}
    >
      <img 
        src={company.url} 
        alt={company.name}
        className="w-full h-full object-contain" 
      />
    </div>
  ))}
  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-emerald text-white text-[10px] flex items-center justify-center font-bold shadow-sm">
    +50
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipAccelerator;
