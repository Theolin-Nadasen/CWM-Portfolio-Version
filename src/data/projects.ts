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
  },
  {
    id: "pdf-merge-split-delete",
    name: "PDF Merge Split Delete",
    description: "An offline PDF utility app for merging, splitting, and deleting PDF pages. All processing happens locally on your device with no internet required.",
    image: "/pdf_merge_icon.png",
    tags: ["PDF", "Tools", "Offline", "Mobile App"],
    hasDetailPage: true,
    hasPrivacyPolicy: true,
    detailContent: {
      overview: "PDF Merge Split Delete is a lightweight, offline mobile application that lets you manipulate PDF files without uploading them to any server. Merge multiple PDFs into one, split a PDF into separate files, or delete unwanted pages - all locally on your device.",
      features: [
        "Merge multiple PDF files into a single document",
        "Split PDFs into separate files by page ranges",
        "Delete unwanted pages from PDF documents",
        "Completely offline - no internet connection required",
        "No data leaves your device - full privacy",
        "Fast local processing"
      ],
      technologies: ["Flutter"],
      privacyPolicy: `Privacy Policy for PDF Merge Split Delete

This Privacy Policy describes how PDF Merge Split Delete ("we", "our", or "the app") handles your information. We are committed to protecting your privacy and ensuring you have a positive experience using our app.

Information We Do Not Collect
PDF Merge Split Delete is an offline application. We do not collect, store, or transmit any personal information or user data. Specifically, we do not collect: personal identifiers (name, email address, phone number, etc.), device information, location data, usage statistics or analytics, or PDF files and documents you process.

How the App Works
All functionality of PDF Merge Split Delete operates entirely on your mobile device. PDF Processing: All merge, split, and delete operations are performed locally on your device. File Storage: PDF files remain on your device. The app does not upload files to any external server. No Internet Required: The app functions completely offline. No internet connection is required for any feature.

Data Storage
Any files or temporary data created while using the app are stored locally on your device and remain under your control. We do not have access to these files.

Third-Party Services
PDF Merge Split Delete does not integrate with any third-party services, analytics tools, advertising networks, or external APIs.

Children's Privacy
Our app does not knowingly collect any information from anyone, including children under the age of 13.

Changes to This Privacy Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.

Contact Us
If you have any questions about this Privacy Policy or our practices, please contact us at: theolin.nadasen@gmail.com`
    }
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
