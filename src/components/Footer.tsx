import { Github, Twitter, Linkedin } from 'lucide-react';
// 1. Import your custom logo
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-slate-100 pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Socials Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Custom Logo Image */}
              <img 
                src={logo} 
                alt="dotLearn Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span className="font-heading text-2xl font-bold tracking-tightest text-slate-900">
                .Learn
              </span>
            </div>
            
            <p className="text-slate-500 max-w-sm mb-10 text-lg font-medium leading-relaxed">
              Empowering the next generation of thinking engineers. 
              Move from passive learning to product mastery with AI-agentic guidance.
            </p>

            {/* Enlarged Personal Social Links */}
            <div className="flex gap-8 items-center">
              <a 
                href="https://github.com/ganesh-reddy005/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group"
              >
                <Github className="w-7 h-7 text-slate-400 group-hover:text-brand-blue transition-all duration-300 hover:scale-110" />
              </a>

              <a 
                href="https://www.linkedin.com/in/ganesh-reddy-23724b296/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group"
              >
                <Linkedin className="w-7 h-7 text-slate-400 group-hover:text-brand-blue transition-all duration-300 hover:scale-110" />
              </a>

              <a 
                href="#" 
                aria-label="Twitter Profile"
                className="group"
              >
                <Twitter className="w-7 h-7 text-slate-400 group-hover:text-brand-blue transition-all duration-300 hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Curriculum</h4>
            <ul className="space-y-4">
              <li><a href="#curriculum" className="text-slate-500 hover:text-brand-blue transition-colors text-sm font-semibold">Foundations</a></li>
              <li><a href="#curriculum" className="text-slate-500 hover:text-brand-blue transition-colors text-sm font-semibold">AI Architectures</a></li>
              <li><a href="#curriculum" className="text-slate-500 hover:text-brand-blue transition-colors text-sm font-semibold">Product Engineering</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#internships" className="text-slate-500 hover:text-brand-blue transition-colors text-sm font-semibold">Accelerator</a></li>
              <li><a href="#pricing" className="text-slate-500 hover:text-brand-blue transition-colors text-sm font-semibold">Pricing</a></li>
              <li><a href="mailto:hello@dotlearn.ai" className="text-slate-500 hover:text-brand-blue transition-colors text-sm font-semibold">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-50 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-bold">
            © 2026 dotLearn Ecosystem. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-xs text-slate-400 font-bold hover:text-slate-600 cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-slate-400 font-bold hover:text-slate-600 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
