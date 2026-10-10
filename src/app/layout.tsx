import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansBody = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const monoCode = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ayan Aklekar — SEO Specialist & Social Media Manager",
  description:
    "Portfolio of Ayan Aklekar. Hands-on Google SEO optimization and full-service social media management for growing businesses.",
  keywords: [
    "Ayan Aklekar",
    "SEO Specialist",
    "Social Media Manager",
    "Google SEO",
    "Technical SEO",
    "Content Strategy",
    "Social Media Growth",
  ],
  authors: [{ name: "Ayan Aklekar" }],
  creator: "Ayan Aklekar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayanaklekar.com",
    title: "Ayan Aklekar — SEO Specialist & Social Media Manager",
    description:
      "Helping businesses rank on Google search and run high-engagement social media profiles.",
    siteName: "Ayan Aklekar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayan Aklekar — SEO & Social Media Manager",
    description:
      "Hands-on Google SEO optimization and full-service social media management.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansBody.variable} ${monoCode.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(t==="dark"){document.documentElement.classList.add("dark");document.documentElement.setAttribute("data-theme","dark");}else{document.documentElement.classList.remove("dark");document.documentElement.setAttribute("data-theme","light");}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#09090B] text-zinc-900 dark:text-zinc-100 font-[family-name:var(--font-sans)] transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
