import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/CamiloLoaiza0298', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/juan-camilo-loaiza-alarcón-1702a628a', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-surface-container-high text-on-surface py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-on-surface-variant">
              &copy; {currentYear} Juan Camilo Loaiza. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}