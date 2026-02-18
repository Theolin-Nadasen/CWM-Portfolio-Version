import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Shield, ChevronRight } from 'lucide-react';
import { getProjectById } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="min-h-screen bg-black bg-grid pt-16 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/projects" className="hover:text-gold transition-colors">Projects</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gold">{project.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {project.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-medium px-4 py-1.5 bg-gold/10 text-gold border border-gold/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-dark transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Live Site
              </a>
            )}
          </div>
        </div>

        {/* Main Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 bg-gray-900 border border-gray-800">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto max-h-[500px] object-contain p-8"
          />
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            {project.detailContent?.overview && (
              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.detailContent.overview}
                </p>
              </section>
            )}

            {/* Features */}
            {project.detailContent?.features && project.detailContent.features.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.detailContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-red mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technologies */}
            {project.detailContent?.technologies && project.detailContent.technologies.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.detailContent.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Type</span>
                  <span className="text-gold">{project.tags[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="text-green-400">Live</span>
                </div>
              </div>
            </div>

            {/* Privacy Policy Link */}
            {project.hasPrivacyPolicy && (
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-red" />
                  <h3 className="text-lg font-bold text-white">Privacy</h3>
                </div>
                {project.privacyPolicyUrl ? (
                  <a
                    href={project.privacyPolicyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors"
                  >
                    View Privacy Policy
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : project.detailContent?.privacyPolicy ? (
                  <Link
                    to={`/projects/${project.id}/privacy`}
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors"
                  >
                    View Privacy Policy
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
