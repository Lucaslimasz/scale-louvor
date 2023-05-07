interface IConvertionDay {
  [key: string]: string;
}

export const getDayWeek = (date: String) => {
  const weekdayBR: IConvertionDay = {Thu: 'QUIN', Sat: 'SÁB', Sun: 'DOM'}
  const dateFormated = new Date(String(date.split("/")));
  const weekdayUS = String(dateFormated).split(' ')[0]
  return weekdayBR[weekdayUS]
};
