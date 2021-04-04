import { useEffect, useState, useMemo, useCallback } from 'react';

export interface FormatterProps extends Omit<CountdownConfig, 'formatter'> {
  elapsed: number;
}

export interface CountdownConfig {
  duration: number;
  interval?: number;
  formatter?(p0: FormatterProps): any;
}

export interface Countdown {
  counting: boolean;
  elapsed: any;
  toggle(): void;
  reset(): void;
}

export function useCountdown(config: CountdownConfig): Countdown {
  const [counting, countingSet] = useState<boolean>(false);
  const [elapsed, elapsedSet] = useState<number>(0);

  const memoizedElapsed = useMemo(
    () =>
      config?.formatter
        ? config?.formatter({
            elapsed,
            duration: config.duration,
            interval: config?.interval,
          })
        : elapsed,
    [config, elapsed],
  );

  const toggle = useCallback(() => countingSet(!counting), [counting]);
  const reset = useCallback(() => {
    countingSet(false);
    elapsedSet(0);
  }, []);

  useEffect(() => {
    if (!counting) {
      return () => {};
    }

    const interval = setInterval(() => {
      if (elapsed === config.duration) {
        reset();
      } else {
        elapsedSet(it => it + 1);
      }
    }, config?.interval ?? 1000);

    return () => clearInterval(interval);
  }, [counting, elapsed, config, reset]);

  return { counting, elapsed: memoizedElapsed, toggle, reset };
}
