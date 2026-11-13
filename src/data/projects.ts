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
  hasTermsOfService: boolean;
  termsOfServiceUrl?: string;
  detailContent?: {
    overview: string;
    features: string[];
    technologies: string[];
    privacyPolicy?: string;
    termsOfService?: string;
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
    hasPrivacyPolicy: false,
    hasTermsOfService: false
  },
  {
    id: "pdf-merge-split-delete",
    name: "PDF Merge Split Delete",
    description: "An offline PDF utility app for merging, splitting, and deleting PDF pages. All processing happens locally on your device with no internet required.",
    image: "/pdf_merge_icon.png",
    tags: ["PDF", "Tools", "Offline", "Mobile App"],
    hasDetailPage: true,
    hasPrivacyPolicy: true,
    hasTermsOfService: true,
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
If you have any questions about this Privacy Policy or our practices, please contact us at: theolin.nadasen@gmail.com`,
      termsOfService: `Terms of Service for PDF Merge Split Delete

Last updated: 13 November 2026

Agreement
These Terms of Service ("Terms") form an agreement between you and the developer of PDF Merge Split Delete ("the App", "we", "us"). By downloading, installing, or using the App you accept these Terms. If you do not agree with them, please uninstall the App and do not use it.

Who we are
The App is published by Code With Me, an independent software business operated by Theolin Nadasen in South Africa. You can reach us at theolin.nadasen@gmail.com. Our trader details are those declared to Google Play on our store listing.

Licence to use the App
We grant you a personal, non-exclusive, non-transferable, revocable licence to install and use the App on devices you own or control, for private, non-commercial use. The App is distributed through Google Play, so Google Play's own terms also apply to your download and use of the store.

What the App does
The App merges, splits, and deletes pages in PDF files. All processing happens locally on your device. The App does not upload your documents anywhere and does not require an internet connection.

Your documents
You keep all rights to the documents you process. You confirm that you have the right to open, modify, and save the files you use with the App, and that you will not use the App to alter documents you are not authorised to alter. You are responsible for keeping backups: keep the original files until you have checked the output. We cannot recover documents that you overwrite or delete.

Acceptable use
You agree not to reverse engineer, decompile, resell, sublicense, or redistribute the App; not to remove or alter any copyright or branding notices; and not to use the App for any unlawful purpose, including handling documents in breach of copyright, privacy, or confidentiality obligations.

No fees
The App is free to download and use. It contains no advertising, no subscriptions, and no in-app purchases.

Availability and changes
We may release updates, change features, or discontinue the App. We do not guarantee that the App will work with every version of Android or with every PDF file. Some documents, such as password-protected or heavily encrypted files, may not be supported.

Disclaimer
The App is provided "as is" and "as available", without warranties of any kind, whether express or implied, including fitness for a particular purpose or that the output will be free of errors. You use the App at your own risk.

Limitation of liability
To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential loss, or for loss of data, documents, profits, or goodwill arising from your use of the App. Nothing in these Terms limits rights you have under mandatory consumer law in your country.

Termination
You may stop using the App at any time by uninstalling it. We may end the licence if you breach these Terms. The sections on your documents, disclaimers, liability, and governing law survive termination.

Changes to these Terms
We may update these Terms when the App or the law changes. The revised version will be posted on this page with a new "Last updated" date. Continuing to use the App after a change means you accept the updated Terms.

Governing law
These Terms are governed by the laws of the Republic of South Africa. Consumer rights you hold under the law of your own country of residence are not affected.

Contact
Questions about these Terms? Email theolin.nadasen@gmail.com.`
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
    hasTermsOfService: true,
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
By using Card Squads, you consent to our Privacy Policy and agree to its terms.`,
      termsOfService: `Terms of Service for Card Squads

Last updated: 13 November 2026

Agreement
These Terms of Service ("Terms") form an agreement between you and the developer of Card Squads ("the App", "we", "us"). By downloading, installing, or using the App you accept these Terms. If you do not agree, please uninstall the App and do not use it.

Who we are
The App is published by Code With Me, an independent software business operated by Theolin Nadasen in South Africa. You can reach us at theolin.nadasen@gmail.com. Our trader details are those declared to Google Play on our store listing.

Licence to use the App
We grant you a personal, non-exclusive, non-transferable, revocable licence to install and use the App on devices you own or control, for private, non-commercial entertainment. The App is distributed through Google Play, so Google Play's own terms also apply to your download and use of the store.

In-app purchases
The App offers optional in-app purchases, such as gem bundles and energy refills, processed by Google Play Billing. Prices are shown in the App before you confirm a purchase and are charged to your Google Play payment method. We never see or store your card details.

Refunds
Refunds are handled by Google Play under its refund policy. Because purchases unlock digital content immediately, your statutory cancellation right may not apply once the content has been delivered. If a purchase fails to deliver an item, contact us and we will put it right.

Virtual items
Gems, energy, cards, and other in-game items are a limited licence to use digital content inside the App. They have no cash value, cannot be exchanged for money, and cannot be transferred, sold, or traded outside the App. We may adjust, rebalance, or retire items and features to keep the game fair and working.

Fair play
You agree not to modify, hack, cheat, or use third-party tools to alter the App or its economy; not to reverse engineer or redistribute the App; and not to use the App for any unlawful purpose or in a way that harms other players.

Progress and data
Game progress, cards, and gem balances are stored locally on your device. Uninstalling the App, clearing its storage, or losing your device may permanently delete that progress. Purchases are tied to your Google Play account and can be restored through Google Play where the App supports it.

Availability and changes
We may update, change, or discontinue the App or any of its features, including game modes, cards, and events. We do not guarantee uninterrupted availability or that the App will work on every device.

Disclaimer
The App is provided "as is" and "as available", without warranties of any kind, whether express or implied, including fitness for a particular purpose. You play at your own risk.

Limitation of liability
To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential loss, or for loss of data, progress, virtual items, profits, or goodwill arising from your use of the App. Nothing in these Terms limits rights you have under mandatory consumer law in your country.

Termination
You may stop using the App at any time by uninstalling it. We may suspend or end your licence if you breach these Terms, including by cheating or tampering with the App. The sections on virtual items, disclaimers, liability, and governing law survive termination.

Changes to these Terms
We may update these Terms when the App or the law changes. The revised version will be posted on this page with a new "Last updated" date. Continuing to use the App after a change means you accept the updated Terms.

Governing law
These Terms are governed by the laws of the Republic of South Africa. Consumer rights you hold under the law of your own country of residence are not affected.

Contact
Questions about these Terms? Email theolin.nadasen@gmail.com.`
    }
  },
  {
    id: "prism-chain",
    name: "Prism Chain",
    description: "A fully offline puzzle game with optional in-app purchases. No internet connection is required and no personal data is ever collected.",
    image: "/prism_chain_icon.png",
    tags: ["Game", "Puzzle", "Mobile App", "Android", "In-App Purchases"],
    hasDetailPage: true,
    hasPrivacyPolicy: true,
    hasTermsOfService: true,
    detailContent: {
      overview: "Prism Chain is a fully offline puzzle game. The app does not collect, store, transmit, or share any personal data. No internet connection is required to play. Optional in-app purchases (crystal packs and cosmetic themes) are processed entirely by Google Play, so complete privacy is maintained while you play.",
      features: [
        "120 levels across 12 worlds",
        "Daily Challenge and Endless modes",
        "Earn and spend crystals on hints and power-ups",
        "Achievements and rotating daily quests",
        "Cosmetic themes to restyle your board",
        "Game progress saved locally on your device",
        "Fully offline - no internet connection required",
        "Optional in-app purchases (crystal packs and themes) via Google Play"
      ],
      technologies: ["Flutter"],
      privacyPolicy: `Privacy Policy for Prism Chain

Last updated: September 22, 2026

Overview
Prism Chain ("the App") is a fully offline puzzle game. The App does not collect, store, transmit, or share any personal data. No internet connection is required to play. The App offers optional in-app purchases, which are processed entirely by Google Play (see below).

Data Collection
The App collects no data whatsoever. No personal information (name, email, address, etc.), no device identifiers (IMEI, advertising ID, etc.), no location data, no usage analytics or crash logs sent off-device, no cookies or tracking technologies, and no third-party SDKs that collect data.

Local Storage
The App uses SharedPreferences (Android) to save game progress locally on your device — including completed levels, high scores, crystal balance, unlocked themes, and settings. This data never leaves your device. You can clear it at any time via your device's App Settings.

In-App Purchases
The App offers optional in-app purchases, such as crystal packs and cosmetic themes. All payment processing is handled by Google Play Billing. We never see or store your payment details — the App only receives a confirmation that a purchase succeeded so it can grant the item. Google's handling of payment data is governed by Google's own privacy policy.

Third-Party Services
The App contains no third-party analytics, advertising, crash reporting, or social media SDKs. The only third-party component is Google Play Billing, used solely to process optional in-app purchases.

Children's Privacy
The App does not collect any data from anyone, including children under 13. In-app purchases require Google Play authentication.

Changes to This Policy
If this policy changes, the "Last updated" date at the top will be revised. Since the App collects no data, any future changes would be minimal and would not affect your privacy negatively.

Contact
If you have questions about this privacy policy, please contact us at: theolin.nadasen@gmail.com`,
      termsOfService: `Terms of Service for Prism Chain

Last updated: 13 November 2026

Agreement
These Terms of Service ("Terms") form an agreement between you and the developer of Prism Chain ("the App", "we", "us"). By downloading, installing, or using the App you accept these Terms. If you do not agree, please uninstall the App and do not use it.

Who we are
The App is published by Code With Me, an independent software business operated by Theolin Nadasen in South Africa. You can reach us at theolin.nadasen@gmail.com. Our trader details are those declared to Google Play on our store listing.

Licence to use the App
We grant you a personal, non-exclusive, non-transferable, revocable licence to install and use the App on devices you own or control, for private, non-commercial entertainment. The App is distributed through Google Play, so Google Play's own terms also apply to your download and use of the store.

The App and its content
The App is a puzzle game with levels, daily challenges, endless mode, achievements, and cosmetic themes. It works fully offline and does not collect personal data. The levels, artwork, music, and code in the App belong to us or are used under licence, and you may not copy, extract, or redistribute them.

In-app purchases
The App offers optional in-app purchases, such as crystal packs and cosmetic themes, processed by Google Play Billing. Prices are shown in the App before you confirm a purchase and are charged to your Google Play payment method. We never see or store your card details.

Refunds
Refunds are handled by Google Play under its refund policy. Because purchases unlock digital content immediately, your statutory cancellation right may not apply once the content has been delivered. If a purchase fails to deliver an item, contact us and we will put it right.

Virtual items
Crystals, power-ups, hints, and cosmetic themes are a limited licence to use digital content inside the App. They have no cash value, cannot be exchanged for money, and cannot be transferred, sold, or traded outside the App. We may adjust or retire items and features to keep the game fair and working.

Acceptable use
You agree not to modify, hack, or tamper with the App or its saved progress; not to reverse engineer, decompile, resell, or redistribute the App; and not to use the App for any unlawful purpose.

Progress and data
Progress, high scores, crystal balance, and unlocked themes are stored locally on your device. Uninstalling the App, clearing its storage, or losing your device permanently deletes that progress. Purchases are tied to your Google Play account and can be restored where the App supports it.

Availability and changes
We may update, change, or discontinue the App or any of its features, including levels, modes, and themes. We do not guarantee uninterrupted availability or that the App will work on every device.

Disclaimer
The App is provided "as is" and "as available", without warranties of any kind, whether express or implied, including fitness for a particular purpose. You play at your own risk.

Limitation of liability
To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential loss, or for loss of data, progress, virtual items, profits, or goodwill arising from your use of the App. Nothing in these Terms limits rights you have under mandatory consumer law in your country.

Termination
You may stop using the App at any time by uninstalling it. We may end your licence if you breach these Terms. The sections on virtual items, disclaimers, liability, and governing law survive termination.

Changes to these Terms
We may update these Terms when the App or the law changes. The revised version will be posted on this page with a new "Last updated" date. Continuing to use the App after a change means you accept the updated Terms.

Governing law
These Terms are governed by the laws of the Republic of South Africa. Consumer rights you hold under the law of your own country of residence are not affected.

Contact
Questions about these Terms? Email theolin.nadasen@gmail.com.`
    }
  },
  {
    id: "shard-breaker",
    name: "Shard Breaker",
    description: "An idle brick breaker you barely have to touch. A neon ship orbits a giant block shape, fires itself, and turns everything it breaks into upgrades - offline, no ads.",
    image: "/shard_breaker_icon.png",
    tags: ["Game", "Idle", "Brick Breaker", "Mobile App", "Android", "In-App Purchases"],
    hasDetailPage: true,
    hasPrivacyPolicy: true,
    hasTermsOfService: true,
    detailContent: {
      overview: "Shard Breaker is a portrait idle brick breaker. A neon ship orbits a huge block shape, aims and fires on its own, and every block it breaks pays shards that you spend on six upgrades. Clear a shape and a bigger one takes its place; Collapse when the wall gets too slow and trade the run for permanent perks. The game works fully offline, shows no ads, and optional in-app purchases are handled entirely by Google Play.",
      features: [
        "24x24 block shapes with a boss every tenth shape",
        "Six upgrades: Cannon, Autoloader, Split, Pierce, Magnet, Focus",
        "Collapse to earn cores and permanent perks",
        "Five ship skins, all cosmetic",
        "Free daily chest, daily missions and gems",
        "Keeps earning while you are away",
        "Fully offline - no internet connection required",
        "No ads",
        "Optional in-app purchases via Google Play"
      ],
      technologies: ["Flutter", "Flame"],
      privacyPolicy: `Privacy Policy for Shard Breaker

Last updated: 13 November 2026

Overview
Shard Breaker ("the App") is a fully offline idle brick breaker. The App does not collect, store, transmit, or share any personal data. No internet connection is required to play. The App offers optional in-app purchases, which are processed entirely by Google Play (see below).

Data Collection
The App collects no data whatsoever. No personal information (name, email, address, etc.), no device identifiers (IMEI, advertising ID, etc.), no location data, no usage analytics or crash logs sent off-device, no cookies or tracking technologies, and no third-party SDKs that collect data.

Local Storage
The App uses SharedPreferences (Android) to save game progress locally on your device - including the current shape, shards, module levels, gems, cores, perks, unlocked skins, daily chest and mission state, and audio settings. This data never leaves your device. You can clear it at any time from Settings inside the App or via your device's App Settings.

In-App Purchases
The App offers optional in-app purchases, such as shard crates, gem crates, core crates, the Founder Pack, and a permanent shard multiplier. All payment processing is handled by Google Play Billing. We never see or store your payment details - the App only receives a confirmation that a purchase succeeded so it can grant the item. Google's handling of payment data is governed by Google's own privacy policy.

Third-Party Services
The App contains no third-party analytics, advertising, crash reporting, or social media SDKs. The only third-party component is Google Play Billing, used solely to process optional in-app purchases.

Children's Privacy
The App does not collect any data from anyone, including children under 13. The App is not directed at children. In-app purchases require Google Play authentication.

Changes to This Policy
If this policy changes, the "Last updated" date at the top will be revised. Since the App collects no data, any future changes would be minimal and would not affect your privacy negatively.

Contact
If you have questions about this privacy policy, please contact us at: theolin.nadasen@gmail.com`,
      termsOfService: `Terms of Service for Shard Breaker

Last updated: 13 November 2026

Agreement
These Terms of Service ("Terms") form an agreement between you and the developer of Shard Breaker ("the App", "we", "us"). By downloading, installing, or using the App you accept these Terms. If you do not agree, please uninstall the App and do not use it.

Who we are
The App is published by Code With Me, an independent software business operated by Theolin Nadasen in South Africa. You can reach us at theolin.nadasen@gmail.com. Our trader details are those declared to Google Play on our store listing.

Licence to use the App
We grant you a personal, non-exclusive, non-transferable, revocable licence to install and use the App on devices you own or control, for private, non-commercial entertainment. The App is distributed through Google Play, so Google Play's own terms also apply to your download and use of the store.

The App and its content
The App is an idle brick breaker with block shapes, bosses, upgrades, permanent perks, ship skins, a daily chest and daily missions. It works fully offline and does not collect personal data. The artwork, audio, game code and text in the App belong to us or are used under licence, and you may not copy, extract, or redistribute them.

In-app purchases
The App offers optional in-app purchases, such as shard crates, gem crates, core crates, the Founder Pack, and a permanent shard multiplier, processed by Google Play Billing. Prices are shown in the App before you confirm a purchase and are charged to your Google Play payment method. We never see or store your card details. Every purchase grants a known amount or a clearly described item - there are no loot boxes and nothing random is sold.

Refunds
Refunds are handled by Google Play under its refund policy. Because purchases unlock digital content immediately, your statutory cancellation right may not apply once the content has been delivered. If a purchase fails to deliver an item, contact us and we will put it right.

Virtual items
Shards, gems, cores, perks and skins are a limited licence to use digital content inside the App. They have no cash value, cannot be exchanged for money, and cannot be transferred, sold, or traded outside the App. Shards and module levels belong to a single run and reset when you Collapse; gems, cores, perks and skins are kept. We may adjust or retire items and features to keep the game fair and working.

Acceptable use
You agree not to modify, hack, or tamper with the App or its saved progress; not to reverse engineer, decompile, resell, or redistribute the App; and not to use the App for any unlawful purpose.

Progress and data
Progress, shards, gems, cores, perks and unlocked skins are stored locally on your device. Uninstalling the App, clearing its storage, or losing your device permanently deletes that progress. Purchases are tied to your Google Play account and can be restored where the App supports it.

Availability and changes
We may update, change, or discontinue the App or any of its features, including shapes, upgrades, perks and cosmetics. We do not guarantee uninterrupted availability or that the App will work on every device.

Disclaimer
The App is provided "as is" and "as available", without warranties of any kind, whether express or implied, including fitness for a particular purpose. You play at your own risk.

Limitation of liability
To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential loss, or for loss of data, progress, virtual items, profits, or goodwill arising from your use of the App. Nothing in these Terms limits rights you have under mandatory consumer law in your country.

Termination
You may stop using the App at any time by uninstalling it. We may end your licence if you breach these Terms. The sections on virtual items, disclaimers, liability, and governing law survive termination.

Changes to these Terms
We may update these Terms when the App or the law changes. The revised version will be posted on this page with a new "Last updated" date. Continuing to use the App after a change means you accept the updated Terms.

Governing law
These Terms are governed by the laws of the Republic of South Africa. Consumer rights you hold under the law of your own country of residence are not affected.

Contact
Questions about these Terms? Email theolin.nadasen@gmail.com.`
    }
  },
  {
    id: "submora",
    name: "Submora",
    description: "An offline subscription tracker for Android. See the real monthly cost of everything you pay for and get a reminder before each renewal - no account, no bank login, no tracking.",
    image: "/submora_icon.png",
    tags: ["Finance", "Productivity", "Mobile App", "Android", "Offline"],
    hasDetailPage: true,
    hasPrivacyPolicy: true,
    hasTermsOfService: true,
    detailContent: {
      overview: "Submora is a calm, private subscription tracker. Add each subscription once - streaming, music, cloud storage, software, the gym - and Submora shows the true monthly cost, the yearly total, what renews next, and where the money goes. It works entirely offline: no account, no bank connection, no analytics, and no ads.",
      features: [
        "One honest monthly and yearly total",
        "Upcoming renewals grouped by the next 7 days, 30 days and later",
        "A local reminder at 9am before each renewal",
        "Mark a renewal as paid and roll the date forward",
        "Category breakdown of monthly spend",
        "Works completely offline - no account, no bank login, no tracking",
        "Optional one-time Pro unlock for unlimited subscriptions via Google Play"
      ],
      technologies: ["Flutter"],
      privacyPolicy: `Overview
Submora ("the App") is an offline subscription tracker. You enter your subscriptions manually; the App does not connect to your bank, does not require an account, and does not send your list anywhere. The App offers one optional in-app purchase, processed entirely by Google Play (see below). This policy explains what is stored, where it is stored, and what is not collected.

Data Collection
The App collects no personal data. There is no analytics, advertising, crash-reporting, or social SDK, and the App makes no network requests of its own. Specifically, the App does not collect your name, email address, phone number, device identifiers, advertising ID, location, contacts, or usage statistics.

What You Enter
Subscription names, amounts, billing cycles, renewal dates, categories, notes, reminder settings, and your currency choice are stored only in local storage on your device, using Android SharedPreferences. This information never leaves your device. There is no server, no backup service, and no sync.

Notifications
If you enable reminders, the App schedules local notifications on your device. These are created and delivered by Android on your device; no notification content is sent to us or anyone else. You can turn reminders off in Settings or revoke the notification permission in Android settings at any time.

In-App Purchases
The App offers one optional one-time purchase ("Submora Pro") that unlocks unlimited subscriptions. Payment is handled entirely by Google Play Billing. We never see or store your payment details, card number, or billing address. The App only receives confirmation from Google Play that the purchase was completed so it can unlock the feature. Google's handling of payment data is governed by Google's own privacy policy. Purchases can be restored on a new installation through Google Play.

Data Retention and Deletion
All App data lives on your device. You can delete individual subscriptions in the App, or remove all data by clearing the App's storage in Android settings or uninstalling the App. Uninstalling removes the local list permanently; no copy is held by us.

Children's Privacy
The App is not directed at children and does not knowingly collect information from anyone, including children under 13. In-app purchases require Google Play authentication.

Third-Party Services
The only third-party component is Google Play Billing, used solely to process the optional purchase. No other third-party services are included.

Changes to This Policy
If this policy changes, the "Last updated" date will be revised. Material changes will be reflected in an app update.

Contact
If you have any questions about this privacy policy, please contact us at: theolin.nadasen@gmail.com`,
      termsOfService: `Terms of Service for Submora

Last updated: 13 November 2026

Agreement
These Terms of Service ("Terms") form an agreement between you and the developer of Submora ("the App", "we", "us"). By downloading, installing, or using the App you accept these Terms. If you do not agree, please uninstall the App and do not use it.

Who we are
The App is published by Code With Me, an independent software business operated by Theolin Nadasen in South Africa. You can reach us at theolin.nadasen@gmail.com. Our trader details are those declared to Google Play on our store listing.

Licence to use the App
We grant you a personal, non-exclusive, non-transferable, revocable licence to install and use the App on devices you own or control, for private, non-commercial use. The App is distributed through Google Play, so Google Play's own terms also apply to your download and use of the store.

What the App does
Submora is an offline subscription tracker. You add your subscriptions manually, and the App calculates monthly and yearly totals, groups upcoming renewals, and can remind you before a renewal date. The App does not connect to your bank, does not require an account, and does not send your list anywhere.

Not financial advice
The App is a record-keeping tool, not a financial, tax, or legal adviser. Totals, conversions, and reminders are based only on what you enter, so their accuracy depends on your entries. Nothing in the App is financial advice, and you remain responsible for your own subscriptions, payments, and cancellations. Always confirm renewal dates and amounts with the service provider.

Reminders
Renewal reminders are local notifications scheduled by Android on your device. They can be delayed or suppressed by battery optimisation, do not-disturb settings, device restarts, or a revoked notification permission, so do not rely on them as your only reminder.

Your data
Everything you enter is stored locally on your device. We hold no copy, so we cannot recover your list if you clear the App's storage, uninstall the App, or lose your device. Keep your own record of anything important.

In-app purchases
The App offers one optional one-time purchase, "Submora Pro", which unlocks unlimited subscriptions. It is processed by Google Play Billing, and prices are shown in the App before you confirm. We never see or store your payment details. Refunds are handled by Google Play under its refund policy. Because the purchase unlocks digital content immediately, your statutory cancellation right may not apply once it has been delivered. Purchases can be restored on a new installation through Google Play.

Acceptable use
You agree not to modify, hack, or tamper with the App; not to reverse engineer, decompile, resell, or redistribute it; and not to use it for any unlawful purpose.

Availability and changes
We may update, change, or discontinue the App or any of its features. We do not guarantee uninterrupted availability or that the App will work on every device or Android version.

Disclaimer
The App is provided "as is" and "as available", without warranties of any kind, whether express or implied, including fitness for a particular purpose or that calculations and reminders will be free of error. You use the App at your own risk.

Limitation of liability
To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential loss, including missed renewals, missed cancellations, unexpected charges, or loss of data, profits, or goodwill arising from your use of the App. Nothing in these Terms limits rights you have under mandatory consumer law in your country.

Termination
You may stop using the App at any time by uninstalling it. We may end your licence if you breach these Terms. The sections on your data, disclaimers, liability, and governing law survive termination.

Changes to these Terms
We may update these Terms when the App or the law changes. The revised version will be posted on this page with a new "Last updated" date. Continuing to use the App after a change means you accept the updated Terms.

Governing law
These Terms are governed by the laws of the Republic of South Africa. Consumer rights you hold under the law of your own country of residence are not affected.

Contact
Questions about these Terms? Email theolin.nadasen@gmail.com.`
    }
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}


