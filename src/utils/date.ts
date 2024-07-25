import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const calculateDateDiff = (date: Date | string, date2?: Date | string) => {
  if (!date) {
    return {};
  }

  try {
    const secondDate = date2 ? date2 : new Date();

    const dayDiff = dayjs(secondDate, 'DD.MM.YYYY').diff(date, 'days');

    return { dayDiff };
  } catch (error) {
    return {};
  }
};
