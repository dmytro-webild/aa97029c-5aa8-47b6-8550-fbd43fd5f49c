import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Siegraphix | Cinematic Posters & Branding',
  description: 'High-quality, cinematic, and eye-catching poster design by Sienna (Siegraphix). Specializing in movie posters, advertisements, and custom branding with dramatic lighting and professional finishes.',
  openGraph: {
    "title": "Siegraphix | Cinematic Graphic Design",
    "description": "Professional cinematic posters and branding by Sienna.",
    "siteName": "Siegraphix"
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
