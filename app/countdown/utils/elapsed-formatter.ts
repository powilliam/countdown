import { FormatterProps } from 'app/countdown/hooks/use-countdown';

export function formatter({ elapsed, duration }: FormatterProps) {
  const time = duration - elapsed;
  const isSeconds = time < 60;
  const isMinutes = !isSeconds && time <= 60 * 59;

  if (isSeconds) {
    return `${time} seg`;
  }

  if (isMinutes) {
    return `${Math.ceil(time / 60)} min`;
  }

  return `${Math.ceil(time / (60 * 60))}h`;
}
