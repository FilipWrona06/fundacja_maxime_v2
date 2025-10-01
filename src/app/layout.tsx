import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { fontYoungest } from '@/app/fonts';
import './globals.css';

// 1. Importujemy komponenty, które tworzą nasz stały szablon
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // <-- Upewnij się, że ten import istnieje

const montserrat = Montserrat({
  subsets: ['latin-ext'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Fundacja Maxime',
  description: 'Strona stworzona z pasji do muzyki',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${montserrat.variable} ${fontYoungest.variable}`}>
        
        {/* Navbar zawsze na górze */}
        <Navbar />

        {/* 
          Główna treść strony (Twoje pliki page.tsx) 
          jest renderowana tutaj, wewnątrz tagu <main>.
        */}
        <main>{children}</main>

        {/* 
          ============================================================
          2. Umieszczamy Footer na samym dole, po głównej treści.
          ============================================================
        */}
        <Footer />

      </body>
    </html>
  );
}