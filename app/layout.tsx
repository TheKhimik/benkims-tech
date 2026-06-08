import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title:
    "Benkims Tech Limited | Electrical, CCTV, Plumbing & Construction Services in Kenya",

  description:
    "Benkims Tech Limited provides professional Electrical services, CCTV installation, Plumbing, Landscaping, Nursery plants, and Construction services in Kenya. Reliable and affordable solutions in Meru and across Kenya.",

  keywords: [
    "Electrical services Kenya",
    "Electrical services Ololulung'a",
    "CCTV installation Kenya",
    "CCTV installation Ololulung'a",
    "Plumbing services Kenya",
    "Construction company Kenya",
    "Landscaping Kenya",
    "Nursery plants Kenya",
  ],

  authors: [{ name: "Benkims Tech Limited" }],

  openGraph: {
    title: "Benkims Tech Limited",
    description:
      "Electrical, CCTV, Plumbing, Landscaping and Construction services in Kenya.",
    type: "website",
    url: "https://benkims-tech.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="NaMc3Z_9tkVwG9Z-HYWYkyeftVO88SsY-5-i5krVejw"
        />
      </head>

      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}