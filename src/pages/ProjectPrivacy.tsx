import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { getProjectById } from '../data/projects';

export default function ProjectPrivacy() {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || '');

  if (!project || !project.hasPrivacyPolicy) {
    return (
      <div className="min-h-screen bg-black bg-grid pt-16 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Not Found</h1>
          <p className="text-gray-400 mb-6">The privacy policy you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black bg-grid pt-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {project.name}
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-10 h-10 text-red" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-400">
            For {project.name} • Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose prose-invert prose-gold max-w-none">
          {project.detailContent?.privacyPolicy ? (
            <div className="space-y-8 text-gray-300">
              {project.detailContent.privacyPolicy.split('\n\n').map((section, index) => {
                const lines = section.split('\n');
                const title = lines[0];
                const content = lines.slice(1).join('\n');
                
                return (
                  <section key={index}>
                    <h2 className="text-xl font-bold text-gold mb-3">{title}</h2>
                    <p className="leading-relaxed">{content}</p>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-900/50 rounded-xl border border-gray-800">
              <p className="text-gray-400">Privacy policy content coming soon.</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4">Questions?</h3>
          <p className="text-gray-400 mb-4">
            If you have any questions about this privacy policy, please contact us:
          </p>
          <a
            href="mailto:theolin.nadasen@gmail.com"
            className="text-gold hover:text-gold-dark transition-colors"
          >
            theolin.nadasen@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
