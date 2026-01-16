import { Epilogue, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const epilogue = Epilogue({
  weight: ["500", "600", "800", "900"],
});

const metadata = {
  title: {
    default: "Hero Kidz - Premium Toys & Gear for Little Heroes",
    template: "%s | Hero Kidz",
  },
  description:
    "Discover the best toys, clothes, and gear for your little ones. Quality, comfort, and style designed to spark imagination and adventure.",
  openGraph: {
    title: "Hero Kidz - Premium Toys & Gear for Little Heroes",
    description:
      "Discover the best toys, clothes, and gear for your little ones. Quality, comfort, and style designed to spark imagination and adventure.",
    url: "https://herokidz.com",
    siteName: "Hero Kidz",
    images: [
      {
        url: "https://i.ibb.co.com/rKwfgmqV/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz - Premium Toys & Gear for Little Heroes",
    description:
      "Discover the best toys, clothes, and gear for your little ones. Quality, comfort, and style designed to spark imagination and adventure.",
    images: ["https://i.ibb.co.com/rKwfgmqV/image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-10/12 mx-auto  md:px-0">
          <Navbar />
        </header>
        <main className="py-2 md:w-10/12 mx-auto px-5 md:px-0">{children}</main>
      </body>
    </html>
  );
}
