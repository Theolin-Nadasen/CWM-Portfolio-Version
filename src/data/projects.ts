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
  },
  {
    id: "card-squads",
    name: "Card Squads",
    description: "A mobile card game where players collect cards, build squads, and battle through energy-based gameplay.",
    image: "/card_squads_icon.jpg",
    tags: ["Game", "Mobile App", "Android", "In-App Purchases"],
    hasDetailPage: true,
    hasPrivacyPolicy: true,
    detailContent: {
      overview: "Card Squads is an engaging mobile card game where players collect unique cards, build powerful squads, and battle through energy-based gameplay. Available on Google Play Store with in-app purchases for gems and energy refills.",
      features: [
        "Collect unique cards with different abilities",
        "Build strategic squads for battle",
        "Energy-based gameplay system",
        "In-app purchases for gems and energy",
        "Google Play Billing integration",
        "Offline game progress saved locally"
      ],
      technologies: ["Unity"],
      privacyPolicy: `Privacy Policy for Card Squads

Last Updated: March 5, 2026

Introduction
This Privacy Policy describes how Card Squads ("we", "our", or "us") collects, uses, and protects your information when you use our mobile application ("the App").

By using the App, you agree to the collection and use of information in accordance with this policy.

Information We Collect
Personal Information
We do not collect any personally identifiable information such as: Name, Email address, Phone number, or Physical address.

Non-Personal Information
We may collect non-personal information including: Device type and model, Operating system version, App usage statistics, Crash logs and error reports, Game progress and settings (stored locally on your device).

In-App Purchases
When you make purchases within the App: Payment processing is handled by Google Play Billing. We do not store or have access to your payment information. Transaction details are managed by Google Play.

How We Use Your Information
The information we collect is used to: Provide and maintain the App, Improve user experience, Fix bugs and technical issues, Analyze app performance and usage patterns.

Data Storage
Local Storage: Game data (cards, gems, progress) is stored locally on your device. We use SharedPreferences for saving game state. This data is not transmitted to our servers.

Third-Party Services
Google Play Services: We use Google Play Services for in-app purchases (Google Play Billing Library), app distribution and updates, and analytics (if enabled).

Children's Privacy
Our App is suitable for all ages. However: We do not knowingly collect personal information from children under 13. Parents can contact us if they believe their child has provided personal information. In-app purchases require Google Play authentication.

In-App Purchases
The App offers optional in-app purchases: Gems bundles and Energy refills. All purchases are processed through Google Play Billing. Prices are displayed before purchase. Purchases can be managed through your Google Play account.

Data Security
We prioritize your data security: All data is stored locally on your device. No personal data is transmitted to external servers. We use industry-standard security practices.

Your Rights
You have the right to: Access your data (stored locally on your device), Delete the App and all associated data, Opt-out of future data collection (by uninstalling the App).

Changes to This Privacy Policy
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the App and updating the "Last Updated" date.

Contact Us
If you have any questions about this Privacy Policy, please contact us at: theolin.nadasen@gmail.com

Consent
By using Card Squads, you consent to our Privacy Policy and agree to its terms.`
    }
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
