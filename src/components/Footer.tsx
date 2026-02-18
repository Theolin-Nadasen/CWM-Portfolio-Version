import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Theolin-Nadasen', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/theolin-nadasen-9905b11a2/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/NadasenTheolin', label: 'Twitter' },
    { icon: Mail, href: 'mailto:nadasentheolin@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Theolin Nadasen. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors duration-300"
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
