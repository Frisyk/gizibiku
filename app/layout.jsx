import { Poppins, Knewave } from "next/font/google";
import "./globals.css";
import Navigation from "./components/TopNav";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500"] });
export const knewave = Knewave({subsets: ["latin"], weight: ["400"]})

export const metadata = {
  title: "Gizibiku",
  description: "Edukasi Gizi Seimbang Remaja Berbasis Website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation/>
          {children}
        </body>
    </html>
  );
}
