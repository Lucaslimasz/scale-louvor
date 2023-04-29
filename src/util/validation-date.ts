export const validateDate = (dateNow: Date, dateScale: string) => {
  const scaleDate = new Date(dateScale);
  const isPastDate = scaleDate > dateNow;
  const isSameDate = scaleDate.getDate() === dateNow.getDate();

  if(isSameDate){
    return 'bg-yellow-500';
  }

  return isPastDate ? 'bg-lime-600' : 'bg-red-700';
}
