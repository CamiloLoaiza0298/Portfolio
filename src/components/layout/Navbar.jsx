import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import "../../index.css";

const navItems = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <a href="#hero" className="font-headline-md text-headline-md text-primary-container tracking-tight">
              Eng. | Computer Science Graduate
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a href="/CV English - Juan Camilo Loaiza.pdf" download className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                Download CV
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-on-surface-variant hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-primary-container block px-3 py-2 rounded-md text-body-md font-medium
                font-label-md text-label-md transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a href="/CV English - Juan Camilo Loaiza.pdf" download className="font-label-md text-label-md bg-primary-container text-on-primary-container px-6 py-2 rounded-lg hover:bg-primary-fixed transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}