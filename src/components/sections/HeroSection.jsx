import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-surface-dim to-surface pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-display-lg font-bold text-on-surface mb-4 font-display-lg">
          Hi, I'm <span className="text-primary">Camilo Loaiza</span>
        </h1>
        <p className="text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto font-body-lg">
          A passionate developer building amazing web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary-container text-on-primary-container rounded-lg hover:bg-primary transition-colors font-medium"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary-container/20 transition-colors font-medium"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16">
          <ArrowDown className="mx-auto text-on-surface-variant animate-bounce" size={32} />
        </div>
      </div>
    </section>
  );
}