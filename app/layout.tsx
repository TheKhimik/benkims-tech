import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Benkims Tech Limited | Electrical, CCTV, Plumbing & Construction Services in Kenya",
  description:
    "Benkims Tech Limited provides professional Electrical services, CCTV installation, Plumbing, Landscaping, Nursery plants, and Construction services in Kenya. Reliable and affordable solutions in Meru and across Kenya.",
  keywords: [
    "Electrical services Kenya",
    "CCTV installation Kenya",
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
    url: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}