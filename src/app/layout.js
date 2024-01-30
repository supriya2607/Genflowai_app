import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/assets/css/login.css";
import "@/app/admin/assets/css/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GenflowAi",
  description: "GenflowAi app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <title>Genflow Ai</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"  crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"/>
       </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
