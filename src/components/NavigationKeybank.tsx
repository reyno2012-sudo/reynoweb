import React, { useState, useEffect, useRef, useMemo } from 'react';
import { NavigationItem } from '../types';

interface Props {
  navigation: NavigationItem[];
}

const INDEX_ITEM: NavigationItem = { label: '/INDEX', href: '#top' };

export const NavigationKeybank: React.FC<Props> = ({ navigation }) => {
  const items = useMemo(() => {
    return navigation.some((item) => item.href === INDEX_ITEM.href)
      ? navigation
      : [INDEX_ITEM, ...navigation];
  }, [navigation]);

  const [activeHref, setActiveHref] = useState<string>(INDEX_ITEM.href);
  const [pressedHref, setPressedHref] = useState<string | null>(null);
  const isNavigatingRef = useRef<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const fallbackScrollRef = useRef<() => void>(() => {});

  const clearNavTimeout = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const scheduleCheck = (delay: number) => {
    clearNavTimeout();
    timeoutRef.current = window.setTimeout(() => {
      const target = isNavigatingRef.current;
      isNavigatingRef.current = null;
      timeoutRef.current = null;

      window.requestAnimationFrame(() => {
        if (target) {
          const targetEl = document.getElementById(target.slice(1));
          const drawer = document.querySelector('.control-drawer-shell');
          if (targetEl && drawer) {
            const rect = targetEl.getBoundingClientRect();
            const drawerBottom = drawer.getBoundingClientRect().bottom + 16;
            const scrollBottom =
              document.documentElement.scrollHeight - window.innerHeight;
            const isAtBottom = window.scrollY >= scrollBottom - 4;
            const isVisible =
              rect.top < window.innerHeight && rect.bottom > drawerBottom;
            const isExact = Math.abs(rect.top - drawerBottom) <= 8;
            if (isExact || (isAtBottom && isVisible)) {
              setActiveHref(target);
              return;
            }
          }
        }
        fallbackScrollRef.current();
      });
    }, delay);
  };

  const releaseKey = (href: string) => {
    setPressedHref((curr) => (curr === href ? null : curr));
  };

  useEffect(() => {
    const targets = items
      .filter((item) => item.href.startsWith('#'))
      .map((item) => ({
        href: item.href,
        element: document.getElementById(item.href.slice(1)),
      }))
      .filter((item): item is { href: string; element: HTMLElement } => item.element !== null);

    const hrefSet = new Set(targets.map((t) => t.href));
    const ratios = new Map<string, number>();

    const updateActive = () => {
      if (isNavigatingRef.current !== null) return;
      if (window.scrollY <= 8 && hrefSet.has(INDEX_ITEM.href)) {
        setActiveHref(INDEX_ITEM.href);
        return;
      }
      const sorted = [...ratios.entries()]
        .filter(([, ratio]) => ratio > 0)
        .sort((a, b) => b[1] - a[1]);
      if (sorted.length > 0 && sorted[0]) {
        setActiveHref(sorted[0][0]);
      }
    };

    fallbackScrollRef.current = updateActive;

    const handleScroll = () => {
      if (isNavigatingRef.current !== null) {
        scheduleCheck(180);
      } else {
        updateActive();
      }
    };

    const handleHash = () => {
      if (hrefSet.has(window.location.hash)) {
        setActiveHref(window.location.hash);
      } else {
        updateActive();
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        updateActive();
      },
      {
        rootMargin: '-18% 0px -48% 0px',
        threshold: [0, 0.12, 0.25, 0.45, 0.65],
      }
    );

    targets.forEach(({ element }) => observer.observe(element));

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      fallbackScrollRef.current = () => {};
      clearNavTimeout();
    };
  }, [items]);

  const handleKeyClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    isNavigatingRef.current = href;
    scheduleCheck(1200);
    setActiveHref(href);
    releaseKey(href);
  };

  return (
    <div
      className="nav-tabs"
      data-control-style="mechanical"
      role="group"
      aria-label="机械键盘导航"
    >
      {items.map((item) => {
        const isCurrent = activeHref === item.href;
        const isPressed = pressedHref === item.href;

        return (
          <a
            key={item.href}
            className="nav-key"
            href={item.href}
            aria-current={isCurrent ? 'location' : undefined}
            data-press-phase={isPressed ? 'down' : undefined}
            onBlur={() => releaseKey(item.href)}
            onClick={(e) => handleKeyClick(e, item.href)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.repeat) {
                setPressedHref(item.href);
              }
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                releaseKey(item.href);
              }
            }}
            onPointerCancel={() => releaseKey(item.href)}
            onPointerDown={(e) => {
              if (e.isPrimary && e.button === 0) {
                try {
                  e.currentTarget.setPointerCapture(e.pointerId);
                } catch {
                  // ignore
                }
                setPressedHref(item.href);
              }
            }}
            onPointerLeave={() => releaseKey(item.href)}
            onPointerUp={(e) => {
              if (e.isPrimary && e.button === 0) {
                releaseKey(item.href);
              }
            }}
          >
            <span className="nav-key-art" aria-hidden="true">
              <img
                className="nav-key-raised"
                src="/navigation/mechanical-key-raised.webp"
                alt=""
                width={720}
                height={540}
              />
              <img
                className="nav-key-pressed"
                src="/navigation/mechanical-key-pressed.webp"
                alt=""
                width={720}
                height={540}
              />
            </span>
            <span className="nav-key-label">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
};
