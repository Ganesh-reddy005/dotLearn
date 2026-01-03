import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Terminal, ChevronDown, Clock } from 'lucide-react';
import { BackgroundPaths } from "@/components/ui/background-paths";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#E0F2FE] to-white">

      {/* 1. Engineering Grid Overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 mask-radial-faded opacity-60 z-0" />

      {/* 2. Soft Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(37,99,235,0.08),transparent_70%)] z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full z-0" />

      {/* 3. Dynamic Background Paths Layer */}
      <div className="absolute inset-0 z-10 opacity-30">
        <BackgroundPaths title="" /> 
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-medium text-brand-blue">Launching the Future of Engineering</span>
            </div>
            
            <h1 className="text-5xl lg:text-5.5xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tightest">
              Engineer with Purpose.<br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">Transform ideas</span> into products.
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
              The era of passive tutorials is over. Master the fundamentals, build production-grade products, 
              and land your dream internship with our <span className="font-bold text-slate-900">AI-Agentic ecosystem.</span>
            </p>

            {/* Coming Soon Badge + CTA Buttons */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="px-8 py-4 rounded-full bg-gradient-primary text-white font-bold flex items-center gap-2 hover:shadow-2xl hover:shadow-brand-blue/30 transition-all active:scale-95 shadow-xl">
                  Build Your First Product <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 rounded-full border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all active:scale-95 backdrop-blur-sm">
                  See the Internship Path
                </button>
              </div>

              {/* Status Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20"
              >
                <Clock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span className="text-[20px] font-bold text-amber-600 uppercase tracking-widest">Coming Soon!!</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual: 3D-effect Code Editor */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-[600px] perspective-1000"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-2xl rotate-y-[-5deg] rotate-x-[5deg]"
            >
              <div className="bg-slate-900/5 border-b border-slate-200/50 px-6 py-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono font-bold tracking-widest uppercase">
                  <Terminal className="w-3 h-3" />
                  main.ts — DotLearn Agent
                </div>
              </div>

              <div className="p-8 font-mono text-sm bg-white/95 backdrop-blur-xl">
                <div className="space-y-1.5 text-slate-600 mb-8">
                  <div className="flex gap-4"><span className="text-slate-300 w-4">1</span><span><span className="text-brand-blue">async</span> <span className="text-brand-cyan">function</span> <span className="text-brand-emerald">fetchUserData</span>(id: string) {'{'}</span></div>
                  <div className="flex gap-4"><span className="text-slate-300 w-4">2</span><span className="pl-4">const response = <span className="text-brand-blue">await</span> api.get(`/users/$(id)`);</span></div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="p-6 rounded-2xl bg-brand-blue/5 border-l-4 border-brand-blue shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-bold text-brand-blue tracking-[0.2em] uppercase">Reasoning Feedback</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium italic">
                    "Instead of just fetching data, consider the <span className="text-brand-blue font-bold">caching strategy</span> here. 
                    Let's implement a <span className="font-bold">Singleton Pattern</span> or use <span className="text-brand-blue">React Query</span>."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 4. Animated Scroll Down Option */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[15px] font-bold text-slate-400 uppercase tracking-[0.3em] group-hover:text-brand-blue transition-colors">
          Explore Platform
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm group-hover:border-brand-blue transition-colors"
        >
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
