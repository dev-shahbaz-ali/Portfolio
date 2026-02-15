import { NavbarDemo } from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Zia ul Qamar - Full Stack Developer & AI Integrations Expert",
  description:
    "Full-Stack Web Developer specializing in Office 365 Add-ins, AI Integrations, and modern web applications. Building smart digital solutions that automate workflows and enhance productivity.",
  keywords:
    "full stack developer, office 365 add-ins, ai integrations, web developer, react developer, next.js, microsoft 365, automation",
  authors: [{ name: "Zia ul Qamar" }],
  creator: "Zia ul Qamar",
  publisher: "Zia ul Qamar",
  robots: "index, follow",
  openGraph: {
    title: "Zia ul Qamar - Full Stack Developer & AI Integrations Expert",
    description:
      "Building smart digital solutions that automate workflows and enhance productivity.",
    url: "https://ziaulqamar.com",
    siteName: "Zia ul Qamar Portfolio",
    images: [
      {
        url: "https://www.ziaulqamar.com/ZiaulQamar-min.jpg",
        width: 800,
        height: 800,
        alt: "Zia ul Qamar",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zia ul Qamar - Full Stack Developer",
    description: "Full-Stack Web Developer & AI Integrations Expert",
    images: ["https://www.ziaulqamar.com/ZiaulQamar-min.jpg"],
  },
  icons: {
    icon: "/ZiaulQamar.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-slate-100">
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}
