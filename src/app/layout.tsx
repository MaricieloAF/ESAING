import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header/Header";

// Importa las fuentes de Google Fonts
import { Titillium_Web, Trirong, Forum } from "next/font/google";

// Define los pesos necesarios para cada fuente
const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "700"], // Pesos utilizados para Titillium Web
});

const trirong = Trirong({
  subsets: ["latin"],
  weight: ["400", "700"], // Pesos utilizados para Trirong
});

const forum = Forum({
  subsets: ["latin"],
  weight: ["400"], // Forum solo necesita peso 400
});

export const metadata = {
  title: "Landing Page",
  description: "Header demo con Next.js y TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${titilliumWeb.className} ${trirong.className} ${forum.className}`}>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
