import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document to PDF Converter",
  description:
    "Easily convert .docx files to PDF using our online tool. Upload your document, and download the PDF with a simple click.",
  keywords: [
    "docx to pdf",
    "document converter",
    "pdf conversion",
    "online tool",
    "file converter",
  ],
  authors: [{ name: "Sushank", url: process.env.SITE_DOMAIN }],
  openGraph: {
    title: "Document to PDF Converter",
    description: "Easily convert .docx files to PDF using our online tool.",
    url: `${process.env.SITE_DOMAIN}/docx-to-pdf`,
    images: [
      {
        url: "../favicon.ico",
        alt: "Document to PDF Converter",
      },
    ],
  },
  twitter: {
    title: "Document to PDF Converter",
    description: "Convert .docx files to PDF quickly and easily.",
  },
  icons: {
    icon: "../favicon.ico",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen w-screen">{children}</div>;
}
