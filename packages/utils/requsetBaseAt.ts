export const getBaseAtEveryMinutes = (cur = new Date(), intervalMinute = 1) => {
  cur.setSeconds(0);
  cur.setMilliseconds(0);
  cur.setMinutes(cur.getMinutes() - (cur.getMinutes() % intervalMinute));

  return (
    new Date(cur.getTime() - cur.getTimezoneOffset() * 60000)
      .toISOString()
      .match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}/)?.[0] || ''
  );
};