import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BTE Capstone Pages",
  description: "a collection of NYU Stern BTE capstone projects",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className='light'>
      <body>
          {children}
      </body>
    </html>
  );
}
