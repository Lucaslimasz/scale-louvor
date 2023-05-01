export const getDayWeek = (date: String) => {
  const weekdayBR = {Thu: 'QUIN', Sat: 'SÁB', Sun: 'DOM'}
  const dateFormated = new Date(String(date.split("/").reverse()));
  const weekdayUS = String(dateFormated).split(' ')[0]
  return weekdayBR[weekdayUS]
};
