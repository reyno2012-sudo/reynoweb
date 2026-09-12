import React, { useState, useEffect } from 'react';

export const ThemeToggle: React.FC = () => {
  const [isNight, setIsNight] = useState(() => document.documentElement.dataset.theme === 'night');

  useEffect(() => {
    const theme = isNight ? 'night' : 'day';
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem('reyno-theme', theme);
    } catch {
      // The switch still works when the browser disallows persistent storage.
    }
  }, [isNight]);

  const toggleTheme = () => {
    setIsNight((prev) => !prev);
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
