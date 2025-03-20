'use client';

import { MoonStar, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeButton() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const theme = window.localStorage.getItem('theme') || 'light';
    setTheme(theme);
  }, []);

useEffect(() => {
  // Toggle the 'dark' class on the document's root element based on the theme state.
  // If the theme is 'dark', or if the theme is not set in localStorage and the user prefers a dark color scheme,
  // the 'dark' class will be applied.
  document.documentElement.classList.toggle(
    'dark',
    theme === 'dark' ||
    (!('theme' in window.localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}, [theme]);
  
  const onClickThemeButton = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button type="button" className="w-8" onClick={onClickThemeButton}>
      {theme === 'light' && <Sun />}
      {theme === 'dark' && <MoonStar />}
    </button>
  );
}
