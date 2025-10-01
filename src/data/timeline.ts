/**
 * Centralne źródło danych dla osi czasu na stronie "O nas".
 */

// Definiujemy "kształt" danych dla pojedynczej sekcji
export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

// Eksportujemy tablicę z danymi
export const timelineData: TimelineItem[] = [
  {
    year: '2022',
    title: 'Początki i pierwsze sukcesy',
    description: 'Wierzymy, że kluczem do lepszej przyszłości jest dostęp do wiedzy. Organizujemy warsztaty, szkolenia i spotkania, które inspirują do działania i poszerzania horyzontów.',
    imageUrl: '/images/about/2022.jpg',
    imageAlt: 'Wydarzenia fundacji z roku 2022',
  },
  {
    year: '2023',
    title: 'Rozwój społeczności',
    description: 'Nasza siła tkwi w społeczności. Budujemy mosty między ludźmi, tworząc przestrzeń do wzajemnej pomocy i integracji. Działamy lokalnie, myśląc globalnie.',
    imageUrl: '/images/about/2023.png',
    imageAlt: 'Wydarzenia fundacji z roku 2023',
  },
  {
    year: '2024',
    title: 'Nowe horyzonty',
    description: 'Każdy projekt tworzymy z pasją i zaangażowaniem, dążąc do realnej zmiany i wspierania talentów w naszej społeczności.',
    imageUrl: '/images/about/2024.jpeg',
    imageAlt: 'Wydarzenia fundacji z roku 2024',
  },
  {
    year: '2025',
    title: 'Patrzymy w przyszłość',
    description: 'Nasze inicjatywy mają realny i trwały wpływ na otoczenie. Planujemy dalszy rozwój i nowe, ekscytujące projekty.',
    imageUrl: '/images/about/2025.jpg',
    imageAlt: 'Wydarzenia fundacji z roku 2025',
  },
];