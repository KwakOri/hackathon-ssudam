export interface TimeMapTypes {
  year: number;
  month: number;
  days: number;
  hour: number;
  minute: number;
}

export const getTimeMap = (date: Date): TimeMapTypes => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    days: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};

export interface IsSameTypes {
  prev: string | undefined;
  cur: string;
}

export interface isSameResponseTypes {
  isDateVisible: boolean;
  isTimeVisible: boolean;
  time: string;
  date: string;
}

export const isSame = ({ prev, cur }: IsSameTypes): isSameResponseTypes => {
  const curTimeMap = getTimeMap(new Date(cur));

  const response: isSameResponseTypes = {
    isDateVisible: false,
    isTimeVisible: false,
    date: `${curTimeMap.year}년 ${curTimeMap.month}월 ${curTimeMap.days}일`,
    time: `${curTimeMap.hour < 10 ? "0" + curTimeMap.hour : curTimeMap.hour}:${
      curTimeMap.minute < 10 ? "0" + curTimeMap.minute : curTimeMap.minute
    }`,
  };

  if (!prev) return { ...response, isDateVisible: true, isTimeVisible: true };
  const prevTimeMap = getTimeMap(new Date(prev));

  if (
    prevTimeMap.year !== curTimeMap.year ||
    prevTimeMap.month !== curTimeMap.month ||
    prevTimeMap.days !== curTimeMap.days
  ) {
    response.isDateVisible = true;
  }

  if (
    prevTimeMap.hour !== curTimeMap.hour ||
    prevTimeMap.minute !== curTimeMap.minute
  ) {
    response.isTimeVisible = true;
  }

  return response;
};
