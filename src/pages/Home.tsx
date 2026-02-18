import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black bg-grid pt-16">
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 translate-x-[-50%] w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 translate-x-[50%] w-96 h-96 bg-red/10 rounded-full blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gray-900/50 border border-gold/30 rounded-full animate-fadeIn">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm text-gray-300">Building Digital Experiences</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">Hi, I'm </span>
            <span className="text-gold text-glow-gold">Theo</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            I create{' '}
            <span className="text-red font-semibold">engaging</span>
            {' '}digital worlds
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            Full-stack developer crafting web applications, mobile apps, and interactive experiences. 
            Turning ideas into reality with clean code and creative design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/projects"
              className="group flex items-center gap-2 px-8 py-4 bg-gold text-black font-bold rounded-lg hover:bg-gold-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            >
              <Rocket className="w-5 h-5" />
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="group flex items-center gap-2 px-8 py-4 border-2 border-gold/50 text-gold font-bold rounded-lg hover:bg-gold/10 hover:border-gold transition-all duration-300"
            >
              <Code className="w-5 h-5" />
              About Me
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">5+</div>
              <div className="text-xs sm:text-sm text-gray-500">Years Experience</div>
            </div>
            <div className="text-center border-x border-gray-800">
              <div className="text-3xl sm:text-4xl font-bold text-red mb-1">20+</div>
              <div className="text-xs sm:text-sm text-gray-500">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">∞</div>
              <div className="text-xs sm:text-sm text-gray-500">Lines of Code</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
