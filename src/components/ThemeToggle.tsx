import React, { useState, useEffect } from 'react';

export const ThemeToggle: React.FC = () => {
  const [isNight, setIsNight] = useState<boolean>(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('reyno-theme') || window.localStorage.getItem('jintao-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const night = saved ? saved === 'night' : prefersDark;
    setIsNight(night);
    document.documentElement.dataset.theme = night ? 'night' : 'day';
  }, []);

  const toggleTheme = () => {
    setIsNight((prev) => {
      const next = !prev;
      const themeVal = next ? 'night' : 'day';
      document.documentElement.dataset.theme = themeVal;
      window.localStorage.setItem('reyno-theme', themeVal);
      window.localStorage.setItem('jintao-theme', themeVal);
      return next;
    });
  };

  return (
    <button
      className="theme-switch"
      type="button"
      aria-label={
        isNight
          ? 'DAY / NIGHT：当前为夜间模式，点击切换到日间模式'
          : 'DAY / NIGHT：当前为日间模式，点击切换到夜间模式'
      }
      aria-pressed={isNight}
      onClick={toggleTheme}
    >
      <span className="theme-switch-screw theme-switch-screw-top" aria-hidden="true" />
      <span className="theme-switch-label">DAY</span>
      <span className="theme-switch-rocker" aria-hidden="true">
        <span className="theme-switch-lever" />
      </span>
      <span className="theme-switch-label">NIGHT</span>
      <span className="theme-switch-screw theme-switch-screw-bottom" aria-hidden="true" />
    </button>
  );
};
