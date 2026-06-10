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
    "Electrical services Narok",
    "Electrical services Ololulung'a",
    "CCTV installation Narok",
    "CCTV installation Ololulung'a",
    "Printing services Narok",
    "Printing services Ololulung'a",
    "Branding services Narok",
    "Branding services Ololulung'a",
    "Plumbing services Narok",
    "Plumbing services Ololulung'a",
    "Construction company Narok",
    "Construction company Ololulung'a",
    "Landscaping Narok",
    "Landscaping Ololulung'a",
    "Nursery plants Narok",
    "Nursery plants Ololulung'a",
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