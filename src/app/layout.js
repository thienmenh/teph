import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/ReactToastify.min.css';
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HOME",
  description: "Hệ thống lưu trữ ảnh",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
