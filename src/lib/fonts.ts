/**
 * ===================================================================================
 *  CENTRALNY MANAGER FONTÓW LOKALNYCH
 * ===================================================================================
 * Ten plik jest dedykowanym miejscem do zarządzania wszystkimi fontami,
 * które trzymasz lokalnie w swoim projekcie (w folderze /fonts).
 * Dzięki temu cała logika związana z fontami jest w jednym, czystym miejscu.
 * ===================================================================================
 */

// 1. Importujemy narzędzie `localFont` z pakietu `next/font`.
// To jest specjalna funkcja od twórców Next.js, która została stworzona,
// aby w najwydajniejszy możliwy sposób ładować lokalne pliki fontów.
import localFont from 'next/font/local';

// 2. Tworzymy i eksportujemy skonfigurowany obiekt fontu.
// `export const` sprawia, że będziemy mogli zaimportować `fontYoungest` w innych plikach,
// przede wszystkim w naszym głównym `layout.tsx`.
export const fontYoungest = localFont({
  /**
   * Ścieżka do pliku z fontem.
   * To jest najważniejsza właściwość. Ścieżka jest względna w stosunku
   * do lokalizacji TEGO pliku (czyli `src/app/fonts.ts`).
   * './fonts/...' oznacza: "w tym samym folderze (`app`), znajdź podfolder `fonts`...".
   */
  src: '../assets/fonts/the-youngest-script.ttf',

  /**
   * Tworzenie zmiennej CSS - "Most do świata CSS i Tailwinda".
   * Ta opcja mówi Next.js, aby automatycznie stworzył i udostępnił
   * w całej aplikacji globalną zmienną CSS o nazwie `--font-youngest`.
   * To właśnie tej zmiennej użyjemy później w pliku globals.css,
   * aby "nauczyć" Tailwinda nowej klasy `font-youngest`.
   */
  variable: '--font-youngest',

  /**
   * Strategia wyświetlania fontu.
   * `display: 'swap'` to najlepsza praktyka dla wydajności.
   * Oznacza, że przeglądarka najpierw wyświetli tekst w domyślnym foncie,
   * a gdy tylko font 'Youngest' się załaduje, podmieni go ("swap").
   * Dzięki temu użytkownik od razu widzi treść, a strona nie "czeka" na font.
   */
  display: 'swap',
});

// Jeśli w przyszłości dodasz kolejny lokalny font, zrobisz to tutaj, np.:
// export const fontDrugiCustomowy = localFont({ src: '...', variable: '...' });