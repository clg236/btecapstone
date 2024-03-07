import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BTE Capstone Archive",
  description: "created by xtian",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
