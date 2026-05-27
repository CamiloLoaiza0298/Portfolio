import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const NAME = 'Camilo Loaiza';
const SUBTITLE = 'Electrical Engineer & Computer Scientist passionate about the convergence between code and electronics. Designing the future from bit to silicon.';

export default function HeroSection() {
  const [nameIdx, setNameIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timers = [];
    const nameLen = NAME.length;
    const subLen = SUBTITLE.length;

    for (let i = 0; i < nameLen; i++) {
      timers.push(setTimeout(() => {
        setNameIdx(prev => Math.max(prev, i + 1));
      }, (i + 1) * 55));
    }

    const subStart = nameLen * 55 + 400;
    for (let i = 0; i < subLen; i++) {
      timers.push(setTimeout(() => {
        setSubIdx(prev => Math.max(prev, i + 1));
      }, subStart + (i + 1) * 15));
    }

    const btnDelay = subStart + subLen * 15 + 500;
    timers.push(setTimeout(() => setShowButtons(true), btnDelay));

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-linear-to-br from-surface-dim to-surface pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(to right, #00f0ff 1px, transparent 1px), linear-gradient(to bottom, #00f0ff 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-primary-container/50 rounded-full blur-[120px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl items-center mx-auto">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/10 border border-secondary-fixed/20 mb-6 mx-6">
          <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
          <span className="font-code-sm text-code-sm text-secondary-fixed uppercase tracking-widest">System Active: Online</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-headline-lg text-6xl text-display-lg font-bold mb-4 font-headline-lg text-primary-container min-h-[1.2em]">
            Hi, I'm{' '}
            <span className="text-secondary-fixed">
              {NAME.slice(0, nameIdx)}
              {nameIdx < NAME.length && (
                <span className="animate-blink font-code-sm text-code-sm">|</span>
              )}
            </span>
            {nameIdx >= NAME.length && (
              <span className="animate-blink font-code-sm text-code-sm text-secondary-fixed">|</span>
            )}
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto font-body-lg min-h-[3.2em]">
            {SUBTITLE.slice(0, subIdx)}
            {subIdx < SUBTITLE.length && (
              <span className="animate-blink">|</span>
            )}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href="#projects"
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded font-label-md text-label-md hover:brightness-110 transition-all flex items-center gap-2"
            >
              View My Projects <span className="material-symbols-outlined">terminal</span>
            </a>
            <a
              href="#contact"
              className="border border-primary-container/50 text-primary-container px-8 py-4 rounded font-label-md text-label-md hover:bg-primary-container/10 backdrop-blur-sm transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className={`mt-16 transition-all duration-700 delay-200 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <ArrowDown className="mx-auto text-on-surface-variant animate-bounce" size={32}/>
          </div>
        </div>
      </div>
    </section>
  );
}