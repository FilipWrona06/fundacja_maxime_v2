// data/news-data.ts

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageSrc: string;
  slug: string;
  content: string; // Pełna treść artykułu (może zawierać HTML)
}

export const newsData: NewsArticle[] = [
  {
    id: 1,
    title: 'Wielkie otwarcie nowego oddziału Fundacji',
    date: '12 września 2025',
    excerpt: 'Z radością informujemy, że otworzyliśmy nowy oddział w Krakowie. Dziękujemy wszystkim za wsparcie i zaangażowanie w rozwój naszej misji.',
    imageSrc: '/images/news/news1.jpg',
    slug: 'wielkie-otwarcie-nowego-oddzialu-fundacji',
    content: `
      <p>To był dla nas wyjątkowy dzień! Z dumą i radością otworzyliśmy nowy oddział naszej fundacji w sercu Krakowa. Nowa placówka pozwoli nam dotrzeć z pomocą do jeszcze większej liczby potrzebujących w regionie Małopolski.</p>
      <p>Uroczystość uświetnili swoją obecnością przedstawiciele władz miasta, nasi wieloletni darczyńcy oraz wolontariusze. Dziękujemy za każde dobre słowo i wsparcie, które otrzymaliśmy. Przed nami wiele wyzwań, ale jesteśmy pełni optymizmu i energii do działania!</p>
    `,
  },
  {
    id: 2,
    title: 'Podsumowanie akcji charytatywnej "Zima 2025"',
    date: '28 sierpnia 2025',
    excerpt: 'Dzięki Waszej hojności udało nam się zebrać rekordową kwotę, która pozwoli na pomoc ponad 200 rodzinom w trudnej sytuacji. Zobaczcie szczegóły!',
    imageSrc: '/images/news/news2.jpg',
    slug: 'podsumowanie-akcji-charytatywnej-zima-2025',
    content: `
      <p>Akcja "Zima 2025" przerosła nasze najśmielsze oczekiwania. Zebraliśmy łącznie 50 000 zł, które w całości zostały przeznaczone na zakup opału, ciepłej odzieży oraz żywności dla ponad 200 rodzin. Wasze wielkie serca rozgrzały tę zimę dla wielu osób. Dziękujemy!</p>
    `,
  },
  {
    id: 3,
    title: 'Zapraszamy na warsztaty kreatywne dla dzieci',
    date: '15 sierpnia 2025',
    excerpt: 'Już w najbliższą sobotę odbędą się darmowe warsztaty plastyczne dla dzieci w wieku 6-12 lat. Liczba miejsc ograniczona, zapisz się już dziś.',
    imageSrc: '/images/news/news3.jpg',
    slug: 'zapraszamy-na-warsztaty-kreatywne-dla-dzieci',
    content: `
      <p>Kreatywność to supermoc! W najbliższą sobotę zapraszamy wszystkie dzieci w wieku od 6 do 12 lat na bezpłatne warsztaty plastyczne. Będziemy malować, wycinać i tworzyć niesamowite dzieła sztuki. Zapewniamy wszystkie materiały i świetną zabawę. Zapisy trwają do piątku.</p>
    `,
  },
];