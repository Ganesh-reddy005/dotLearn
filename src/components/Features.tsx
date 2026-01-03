import { motion } from 'framer-motion';
import { Layers, BrainCircuit, Globe, Sparkles } from 'lucide-react';
import AgentPipeline from './AgentPipeline';

const features = [
  {
    title: "Concept-First Modules",
    description: "AI ensures you understand the internal architecture and 'Why' before you write the first line of code. No more blind coding.",
    icon: <Layers className="w-6 h-6 text-brand-blue" />,
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Dynamic Project Generator",
    description: "Move beyond generic 'Todo' apps. Build real-world RAG systems, FinTech dashboards, or IoT collectors tailored to your skill.",
    icon: <Globe className="w-6 h-6 text-brand-cyan" />,
    gradient: "from-cyan-500/10 to-emerald-500/10"
  },
  {
    title: "Reasoning Evaluator",
    description: "Our AI doesn't just check if your code runs; it asks you why you chose that specific data structure or design pattern.",
    icon: <BrainCircuit className="w-6 h-6 text-brand-emerald" />,
    gradient: "from-emerald-500/10 to-green-500/10"
  }
];

const Features = () => {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      {/* 1. Background Decor: Consistent with the Global Platform Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Your requested Blue-Green Gradient at 25% Opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-green-300 to-white dark:from-blue-900 dark:via-green-800 opacity-25" />
        
        {/* Engineering Grid Utility (optional depth) */}
        <div className="absolute inset-0 bg-grid-slate-100 mask-radial-faded opacity-20" />

        {/* Soft decorative glows matching the Hero section */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-emerald/5 blur-[120px] rounded-full translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Feature Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">The Feature Engine</span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-10 leading-[1.1] tracking-tightest text-slate-900">
              Master the <span className="text-transparent bg-clip-text bg-gradient-primary">Internal Logic</span> of Engineering.
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-6 p-6 rounded-3xl border border-transparent hover:border-slate-100 hover:bg-white/40 hover:backdrop-blur-sm transition-all cursor-default"
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-heading text-slate-900">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Animated Agent Pipeline */}
          <div className="relative flex items-center justify-center">
            {/* Shadow glow layer */}
            <div className="absolute inset-0 bg-brand-blue/5 rounded-[3rem] -rotate-2 scale-105" />
            
            <div className="relative w-full glass-card p-4 rounded-[3rem] border-white shadow-2xl overflow-hidden min-h-[580px] flex items-center justify-center bg-white/40 backdrop-blur-xl">
              <AgentPipeline />
              
              {/* Agent Reasoning Popover: Visual feedback for the pipeline */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-slate-100 flex gap-5 items-center z-30"
              >
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Agent Insight</span>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    "Concept logic verified. Your choice of <span className="text-brand-blue font-bold tracking-tight">Vector Indexing</span> is correct for this RAG pipeline."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
