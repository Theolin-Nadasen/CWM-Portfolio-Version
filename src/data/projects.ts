export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  hasDetailPage: boolean;
  externalUrl?: string;
  hasPrivacyPolicy: boolean;
  privacyPolicyUrl?: string;
  detailContent?: {
    overview: string;
    features: string[];
    technologies: string[];
    privacyPolicy?: string;
  };
}

export const projects: Project[] = [
  {
    id: "pdf-builder",
    name: "PDF Builder",
    description: "Create engaging PDF files with text, shapes, and SVG. A powerful web-based tool for designing and generating professional PDF documents.",
    image: "/pdf_builder.png",
    tags: ["PDF", "Design", "Tools", "Web App"],
    hasDetailPage: false,
    externalUrl: "https://pdf.codewithme.co.za",
    hasPrivacyPolicy: false
  }
  // Add more projects here following the same structure:
  // {
  //   id: "my-new-app",
  //   name: "My New App",
  //   description: "A brief description of the app...",
  //   image: "/app_image.png",
  //   tags: ["Tag1", "Tag2"],
  //   hasDetailPage: true,
  //   hasPrivacyPolicy: true,
  //   detailContent: {
  //     overview: "Detailed description here...",
  //     features: ["Feature 1", "Feature 2"],
  //     technologies: ["React", "TypeScript"],
  //     privacyPolicy: "Privacy policy text here..."
  //   }
  // }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
