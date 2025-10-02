import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react'; // <-- DODANE Z POPRZEDNIEJ WERSJI
import { SpeedInsights } from '@vercel/speed-insights/next'; // <-- DODANE Z POPRZEDNIEJ WERSJI
import { fontYoungest } from '@/lib/fonts';
import '../globals.css';

// 1. Importujemy komponenty, które tworzą nasz stały szablon
import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';

const montserrat = Montserrat({
  subsets: ['latin-ext'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Fundacja Maxime',
  description: 'Strona stworzona z pasji do muzyki',
  // DODANE IKONY Z POPRZEDNIEJ WERSJI
  icons: {
    icon: [
      {
        url: '/favicon_white.svg',
        media: '(prefers-color-scheme: dark)'
      },
      {
        url: '/favicon_black.svg',
        media: '(prefers-color-scheme: light)'
      },
    ],
  },
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

        {/* DODANE KOMPONENTY VERCEL Z POPRZEDNIEJ WERSJI */}
        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}