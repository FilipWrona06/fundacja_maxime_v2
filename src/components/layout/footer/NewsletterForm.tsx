'use client'; // Ten komponent jest interaktywny, więc musi być po stronie klienta.

import { useState, useEffect } from 'react';
import jsonp from 'jsonp';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // Efekt do czyszczenia komunikatu po 5 sekundach
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Funkcja obsługująca wysyłkę formularza
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const mailchimpUrl = 'https://interia.us22.list-manage.com/subscribe/post?u=571c8b619e1df84cb6ac15b70&id=dfa3ed976c&f_id=00f1c2e1f0';
    const url = mailchimpUrl.replace('/post?', '/post-json?');

    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (err, data) => {
      if (err || data.result !== 'success') {
        setStatus('error');
        setMessage('Błąd. Sprawdź adres i spróbuj ponownie.');
      } else {
        setStatus('success');
        setMessage('Dziękujemy! Sprawdź skrzynkę, by potwierdzić zapis.');
        setEmail('');
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input 
          type="email" 
          placeholder="Twój adres e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
      
      {/* Wyświetlanie komunikatów zwrotnych */}
      <div className="h-6 mt-2 text-center"> {/* Kontener, aby layout nie "skakał" */}
        {status === 'success' && <p className="text-sm font-montserrat text-green-400">{message}</p>}
        {status === 'error' && <p className="text-sm font-montserrat text-red-400">{message}</p>}
      </div>
    </>
  );
};

export default NewsletterForm;