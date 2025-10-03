'use client'; // Ten komponent jest interaktywny, więc musi być po stronie klienta.

import { useState, useEffect, FormEvent } from 'react';
import jsonp from 'jsonp';

/**
 * =================================================================
 *  Komponent Formularza Zapisu do Newslettera
 * =================================================================
 * Odpowiada za logikę i wygląd formularza zapisu. Zarządza
 * stanem wprowadzanych danych, komunikacją z Mailchimp
 * oraz wyświetlaniem komunikatów zwrotnych.
 * =================================================================
 */
const FooterNewsletterForm = () => {
  // --- STATE MANAGEMENT ---
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // --- SIDE EFFECTS ---
  // Efekt do automatycznego czyszczenia komunikatu o sukcesie/błędzie po 5 sekundach
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);

      // Funkcja czyszcząca, która uruchomi się, gdy komponent zostanie odmontowany
      return () => clearTimeout(timer);
    }
  }, [status]);

  // --- HANDLERS ---
  // Funkcja obsługująca wysyłkę formularza
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || email.indexOf('@') === -1) {
      setStatus('error');
      setMessage('Proszę podać prawidłowy adres e-mail.');
      return;
    }

    setStatus('loading');
    setMessage('');

    // URL subskrypcji Mailchimp (zastąp własnym)
    const mailchimpUrl = 'https://interia.us22.list-manage.com/subscribe/post?u=571c8b619e1df84cb6ac15b70&id=dfa3ed976c&f_id=00f1c2e1f0';
    // Modyfikacja URL-a na potrzeby zapytania JSONP
    const url = mailchimpUrl.replace('/post?', '/post-json?');

    jsonp(`${url}&EMAIL=${encodeURIComponent(email)}`, { param: 'c' }, (err, data) => {
      if (err || data.result !== 'success') {
        setStatus('error');
        // Wyświetlamy bardziej przyjazny komunikat błędu
        setMessage(data?.msg?.includes("is already subscribed") 
          ? 'Ten adres jest już zapisany.' 
          : 'Błąd. Sprawdź adres i spróbuj ponownie.'
        );
      } else {
        setStatus('success');
        setMessage('Dziękujemy! Sprawdź skrzynkę, by potwierdzić zapis.');
        setEmail(''); // Czyścimy pole po udanej subskrypcji
      }
    });
  };

  // --- RENDER ---
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input 
          type="email" 
          placeholder="Twój adres e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Adres e-mail do newslettera"
          className="w-full px-4 py-2 bg-black/50 placeholder-philippineSilver rounded-3xl focus:outline-none focus:ring-2 focus:ring-philippineSilver font-montserrat" 
        />
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-transparent border-2 border-philippineSilver font-montserrat font-bold px-4 py-2 rounded-3xl hover:bg-philippineSilver hover:text-raisinBlack transition-colors duration-250 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Zapisywanie...' : 'Zapisz się'}
        </button>
      </form>
      
      {/* 
        Kontener na komunikaty zwrotne. 
        Ma stałą wysokość, aby zapobiec "skakaniu" layoutu, gdy komunikat się pojawia.
      */}
      <div className="h-6 mt-2 text-center">
        {status === 'success' && <p className="text-sm font-montserrat text-green-400">{message}</p>}
        {status === 'error' && <p className="text-sm font-montserrat text-red-400">{message}</p>}
      </div>
    </>
  );
};

export default FooterNewsletterForm;