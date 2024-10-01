// p
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image to PDF Converter",
  description:
    "Convert your images (.jpg, .png) to PDF with ease. Upload your image and download the converted PDF instantly.",
  keywords: [
    "image to pdf",
    "jpg to pdf",
    "png to pdf",
    "image converter",
    "pdf conversion",
  ],
  authors: [{ name: "Sushank Ghimire" }],
  openGraph: {
    title: "Image to PDF Converter",
    description: "Easily convert .jpg and .png images to PDF format.",
    url: `${process.env.SITE_DOMAIN}/image-to-pdf`,
    images: [
      {
        url: "../favicon.ico",
        alt: "Image to PDF Converter",
      },
    ],
  },
  twitter: {
    title: "Image to PDF Converter",
    description: "Convert .jpg and .png images to PDF quickly and easily.",
  },
  icons: {
    icon: "../favicon.ico",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen w-screen">{children}</main>;
}
