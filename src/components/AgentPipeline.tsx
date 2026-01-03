import { motion } from 'framer-motion';
import { Terminal, Cpu, CheckCircle2, Globe, Code2 } from 'lucide-react';

const PipelineNode = ({ icon: Icon, label, status, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="relative flex flex-col items-center group"
  >
    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center relative z-10 group-hover:border-brand-blue/30 transition-colors">
      <Icon className="w-7 h-7 text-slate-400 group-hover:text-brand-blue transition-colors" />
      {status === 'active' && (
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-brand-blue/10 rounded-2xl"
        />
      )}
    </div>
    <span className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
  </motion.div>
);

const AgentPipeline = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[400px] h-[400px] border border-slate-200 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-[300px] h-[300px] border border-slate-100 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      </div>

      {/* The Central Agent Node */}
      <div className="absolute z-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-full border-2 border-dashed border-brand-blue/30 flex items-center justify-center p-2"
        >
          <div className="w-full h-full rounded-full bg-brand-blue/5 backdrop-blur-sm flex items-center justify-center relative">
            <Cpu className="w-10 h-10 text-brand-blue" />
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 right-2"
            >
              <div className="w-2 h-2 rounded-full bg-brand-emerald shadow-[0_0_10px_#10B981]" />
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 text-center">
          <span className="text-xs font-bold text-brand-blue bg-brand-blue/5 px-3 py-1 rounded-full whitespace-nowrap">
            DotLearn Agent v2.0
          </span>
        </div>
      </div>

      {/* Pipeline Connections & Nodes */}
      <div className="flex items-center gap-12 lg:gap-20 relative z-10 w-full justify-between px-10 lg:px-20">
        
        {/* Left Side: Input */}
        <div className="flex flex-col gap-24">
          <PipelineNode icon={Terminal} label="Concept" status="done" delay={0.2} />
          <PipelineNode icon={Code2} label="Architecture" status="active" delay={0.4} />
        </div>

        {/* Right Side: Output */}
        <div className="flex flex-col gap-24">
          <PipelineNode icon={Globe} label="Production" status="waiting" delay={0.6} />
          <PipelineNode icon={CheckCircle2} label="Portfolio" status="waiting" delay={0.8} />
        </div>
      </div>

      {/* SVG Flow Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 5px rgba(37,99,235,0.1))' }}>
        {/* Path 1: Concept to Agent */}
        <motion.path 
          d="M 150 150 Q 300 150 400 250" 
          fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, strokeDashoffset: [0, -20] }}
          transition={{ pathLength: { duration: 2 }, strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" } }}
          className="opacity-20"
        />
        {/* Path 2: Agent to Production */}
        <motion.path 
          d="M 400 250 Q 500 150 650 150" 
          fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, strokeDashoffset: [0, -20] }}
          transition={{ pathLength: { duration: 2, delay: 1 }, strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" } }}
          className="opacity-20"
        />
      </svg>
    </div>
  );
};

export default AgentPipeline;
