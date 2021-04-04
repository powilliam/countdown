import { useEffect, useState, useCallback } from 'react';

export interface Countdown {
  counting: boolean;
  elapsed: number;
  toggle(): void;
}

export function useCountdown(): Countdown {
  const [counting, countingSet] = useState<boolean>(false);
  const [elapsed, elapsedSet] = useState<number>(0);

  const toggle = useCallback(() => countingSet(!counting), [counting]);

  useEffect(() => {
    if (!counting) {
      return () => {};
    }

    const interval = setInterval(() => {
      elapsedSet(it => it + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counting]);

  return { counting, elapsed, toggle };
}
