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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
