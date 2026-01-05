import Footer from "@/components/GlobalLayout/Footer";
import Navbar from "@/components/GlobalLayout/Navbar";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const vietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vietnam",
});

export const metadata: Metadata = {
  title: "B Kanhu | Frontend Developer",
  description:
    "B Kanhu Charan is a skilled Frontend Developer specializing in React.js, Next.js, and modern web technologies. Passionate about crafting high-performance, user-friendly web applications.",
  keywords:
    "Frontend Developer, React.js Developer, Next.js Developer, Web Developer, UI Engineer, JavaScript, TypeScript, Web App Development, User Experience, Boxobit",
  openGraph: {
    title: "B Kanhu | Frontend Developer",
    description:
      "Crafting high-performance, scalable web applications with React.js, Next.js, and modern web technologies.",
    url: "https://bkanhu.netlify.app",
    siteName: "B Kanhu | Portfolio",
    images: [
      {
        url: "https://bkanhu.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "B Kanhu - Frontend Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B Kanhu | Frontend Developer & UI Engineer",
    description: "Specialized in React.js, Next.js, and UI/UX development.",
    images: ["https://bkanhu.netlify.app/og-image.jpg"],
  },
};

const jsonLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "B Kanhu Charan",
  jobTitle: "Frontend Developer",
  url: "https://bkanhu.netlify.app",
  image: "https://bkanhu.netlify.app/profile-image.jpg",
  sameAs: [
    "https://www.linkedin.com/in/bkanhu",
    "https://github.com/bkanhu",
    "https://twitter.com/bkanhu7",
  ],
  description:
    "B Kanhu Charan is a skilled Frontend Developer specializing in React.js, Next.js, and modern web technologies. Passionate about crafting high-performance, user-friendly web applications.",
  knowsAbout: [
    "Frontend Development",
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "UI/UX",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sonepur College",
    url: "http://www.sonepurcollege.org.in/",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "iamkanhuc@gmail.com",
    contactType: "Business Inquiry",
    availableLanguage: ["English", "Hindi", "Odia"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vietnamPro.variable} scroll-smooth bg-woodsmoke-950 antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" theme="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
      </body>
    </html>
  );
}
