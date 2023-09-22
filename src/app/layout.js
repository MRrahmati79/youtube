import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "youtube.com",
  description: "its a personal project in next js and Designed by Mojtaba Ahmadpour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
