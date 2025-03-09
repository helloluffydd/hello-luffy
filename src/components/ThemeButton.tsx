'use client';

import { MoonStar, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeButton() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle(
      'dark',
      window.localStorage.theme === 'dark' ||
        (!('theme' in window.localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }, [theme]);

  return (
    <button
      type="button"
      className="w-8"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' && <Sun />}
      {theme === 'dark' && <MoonStar />}
    </button>
  );
}
