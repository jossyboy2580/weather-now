export function getIconIndex(score) {
  if (score == 0) return 'clear';
  if (score >= 1 && score <= 3) return 'overcast';
  if (score >= 45 && score <= 48) return 'fog';
  if (score >=51  && score <= 57) return 'drizzle';
  if (score >= 61 && score <= 67) return 'rain';
  if (score >= 71 && score <= 77) return 'snow';
  if (score >= 80 && score <= 86) return '';
}
