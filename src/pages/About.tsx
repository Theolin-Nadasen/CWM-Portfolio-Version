import { Github, Linkedin, Twitter, Mail, MapPin, Code, Sparkles, Zap, Gamepad2, Database, Globe } from 'lucide-react';

export default function About() {
  const techStack = {
    apps: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Java', 'C#', 'C++', 'Python'],
    websites: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'PHP', 'Python', 'C#'],
    games: ['Unity', 'Unreal Engine', 'Godot', 'C#', 'C++', 'GDScript'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Firebase', 'Supabase', 'Redis'],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Theolin-Nadasen', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/theolin-nadasen-9905b11a2/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/NadasenTheolin', label: 'Twitter' },
    { icon: Mail, href: 'mailto:nadasentheolin@gmail.com', label: 'Email' },
  ];

  return (
    <div className="min-h-screen bg-black bg-grid pt-16">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              About <span className="text-gold text-glow-gold">Me</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Developer, creator, and lifelong learner
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Bio Section */}
            <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-6 flex-col sm:flex-row">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-red flex items-center justify-center flex-shrink-0">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Who I Am</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I'm Theolin Nadasen, a passionate full-stack developer with a love for building 
                    digital experiences that make a difference. With over 5 years of experience 
                    in web and mobile development, I've worked on everything from small personal 
                    projects to complex enterprise applications.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    My journey in tech started with a curiosity about how things work, and that 
                    curiosity has evolved into a career focused on creating tools and applications 
                    that solve real problems and delight users.
                  </p>
                </div>
              </div>
            </section>

            {/* What I Do */}
            <section>
              <h2 className="text-2xl font-bold text-gold mb-6">What I Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gold/50 transition-colors">
                  <Sparkles className="w-8 h-8 text-gold mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Web Development</h3>
                  <p className="text-gray-400 text-sm">
                    Building modern, responsive web applications with React, Next.js, and cutting-edge technologies.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gold/50 transition-colors">
                  <Zap className="w-8 h-8 text-red mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Mobile Apps</h3>
                  <p className="text-gray-400 text-sm">
                    Creating cross-platform mobile applications that provide seamless user experiences.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gold/50 transition-colors">
                  <Gamepad2 className="w-8 h-8 text-gold mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Game Development</h3>
                  <p className="text-gray-400 text-sm">
                    Designing and building interactive games with Unity and Unreal Engine.
                  </p>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-bold text-gold mb-6">Tech Stack</h2>
              <div className="space-y-6">
                {/* Apps */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-red" />
                    <h3 className="text-lg font-bold text-white">Apps</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.apps.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm font-medium hover:border-gold/50 hover:text-gold transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Websites */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-gold" />
                    <h3 className="text-lg font-bold text-white">Websites</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.websites.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm font-medium hover:border-gold/50 hover:text-gold transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Games */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Gamepad2 className="w-6 h-6 text-red" />
                    <h3 className="text-lg font-bold text-white">Games</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.games.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm font-medium hover:border-gold/50 hover:text-gold transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-gold" />
                    <h3 className="text-lg font-bold text-white">Databases</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.databases.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm font-medium hover:border-gold/50 hover:text-gold transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Location & Contact */}
            <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <MapPin className="w-5 h-5" />
                    <span>Based in South Africa</span>
                  </div>
                  <p className="text-gray-300">
                    Open to remote work and interesting collaborations
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-gold hover:bg-gray-700 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center py-8">
              <h2 className="text-2xl font-bold text-white mb-4">Let's Work Together</h2>
              <p className="text-gray-400 mb-6">
                Have a project in mind? I'd love to hear about it.
              </p>
              <a
                href="mailto:nadasentheolin@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-bold rounded-lg hover:bg-gold-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
