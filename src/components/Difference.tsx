import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, AlertCircle } from 'lucide-react';

const ComparisonCard = ({ title, type, description, stats }: any) => {
  const isAgentic = type === 'agentic';
  
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      // Glassmorphism: Frosted background + blur
      className={`p-10 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 shadow-xl 
        ${isAgentic 
          ? 'bg-white/80 border-white shadow-brand-blue/10 border-[2px]' 
          : 'bg-white/40 border-white/60 shadow-slate-200/50'
      }`}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
          isAgentic ? 'bg-brand-blue text-white' : 'bg-slate-200/50 text-slate-600'
        }`}>
          {type === 'traditional' && <XCircle className="w-6 h-6" />}
          {type === 'chatbot' && <AlertCircle className="w-6 h-6" />}
          {type === 'agentic' && <CheckCircle2 className="w-6 h-6" />}
        </div>
        <h3 className="font-heading text-2xl font-bold text-slate-900">{title}</h3>
      </div>

      <p className="text-slate-600 mb-10 leading-relaxed text-lg">
        {description}
      </p>

      <div className="pt-8 border-t border-slate-900/5 flex items-end justify-between">
        <div>
          <div className="text-4xl font-bold font-heading mb-1 text-slate-900">{stats.value}</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{stats.label}</div>
        </div>
        <div className="h-1.5 w-24 bg-slate-950/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: stats.value }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`h-full ${isAgentic ? 'bg-brand-blue' : 'bg-slate-400'}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Difference = () => {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      {/* Background gradient + animated blobs */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 via-green-300 to-white dark:from-blue-900 dark:via-green-800 opacity-25" />
        
        {/* Animated blobs for blur effect */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-brand-emerald/10 blur-[80px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-brand-blue/10 blur-[100px] rounded-full" 
        />
     

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tightest text-slate-900">
            Why Agentic EdTech?
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Stop scrolling through endless video tutorials. Start engaging with systems 
            that understand your unique engineering growth trajectory.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <ComparisonCard 
            title="Traditional"
            type="traditional"
            description="Passive videos and generic quizzes. You follow a cursor without understanding the logic."
            stats={{ value: "45%", label: "Retention" }}
          />
          <ComparisonCard 
            title="AI Chatbots"
            type="chatbot"
            description="Instant answers that kill cognitive effort. They do the work for you, hindering deep growth."
            stats={{ value: "12%", label: "Architectural Growth" }}
          />
          <ComparisonCard 
            title="Agentic"
            type="agentic"
            description="DotLearn's AI agents guide you through the 'Why'. They evaluate your reasoning, not just syntax."
            stats={{ value: "92%", label: "Employability" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Difference;
