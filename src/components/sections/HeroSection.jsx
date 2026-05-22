import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-linear-to-br from-surface-dim to-surface pt-16"
    >
      {/* Background Pattern */}
      <div class="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(to right, #00f0ff 1px, transparent 1px), linear-gradient(to bottom, #00f0ff 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        ></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary-container/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Content */}
      <div class="relative z-10 max-w-4xl items-center mx-auto">
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/10 border border-secondary-fixed/20 mb-6 mx-6">
          <span class="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
          <span class="font-code-sm text-code-sm text-secondary-fixed uppercase tracking-widest">System Active: Online</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-size-headline-lg text-6xl text-display-lg font-bold mb-4 font-headline-lg text-primary-container">
            Hi, I'm <span className="text-secondary-fixed">Camilo Loaiza</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto font-body-lg">
            Electrical Engineer &amp; Computer Scientist passionate about the convergence between code and electronics. Designing the future from bit to silicon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded font-label-md text-label-md hover:brightness-110 transition-all flex items-center gap-2"
            >
              View My Projects <span class="material-symbols-outlined">terminal</span>
            </a>
            <a
              href="#contact"
              className="border border-primary-container/50 text-primary-container px-8 py-4 rounded font-label-md text-label-md hover:bg-primary-container/10 backdrop-blur-sm transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16">
            <ArrowDown className="mx-auto text-on-surface-variant animate-bounce" size={32}/>
          </div>
        </div>
      </div>
    </section>
  );
}