import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0f172a]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-slate-300">The Future of Engineering Education</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold blue-300 text-white mb-8 tracking-tight leading-[1.1]">
          The era of the <span className="text-slate-400 line-through decoration-slate-500">Prompt Engineer</span> is fading. <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            The Thinking Engineer
          </span> is the future.
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Join a movement of engineers who understand systems, not just syntax. 
          Build products that matter. Land careers that last.
        </p>

        {/* CTA Button with Glow Effect */}
        <div className="relative inline-block group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
          <button className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl shadow-blue-900/20">
            Start Your Journey Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust Indicators / Extras */}
        <div className="flex flex-wrap justify-center gap-8 text-slate-500">
          {[
            "Free to start",
            "No credit card required",
            "Cancel anytime"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500/60" />
              {text}
            </div>
          ))}
        </div>

        {/* Added "Founder's Vision" Note (Extra Touch) */}
        <div className="mt-20 pt-12 border-t border-slate-800/50 max-w-3xl mx-auto">
          <p className="text-slate-500 italic text-sm leading-relaxed">
            "We built this for the curious student who wants to stop copy-pasting from AI and start understanding how things truly work. This is more than an EdTech platform; it's a craftsman's workshop for the next generation of engineers."
          </p>
        </div>
      </div>
    </section>
  );
}


