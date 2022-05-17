function HolidayCalculater() { }

const holidays = {};
holidays[2022] = {
  // [月份]: [日期，放假（true）或加班（false）]
  // 2022法定假日及串休 2022.5.17更新
  [1]: [[1, true], [2, true], [3, true], [29, false], [30, false], [31, true]],
  [2]: [[1, true], [2, true], [3, true], [4, true], [5, true], [6, true]],
  [3]: [],
  [4]: [[2, false], [3, true], [4, true], [5, true], [24, false], [30, true]],
  [5]: [[1, true], [2, true], [3, true], [4, true], [7, false]],
  [6]: [[3, true], [4, true], [5, true]],
  [7]: [],
  [8]: [],
  [9]: [[10, true], [11, true], [12, true]],
  [10]: [[1, true], [2, true], [3, true], [4, true], [5, true], [6, true], [7, true], [8, false], [9, false]],
  [11]: [],
  [12]: [],
}
holidays[2023] = {
  // [月份]: [日期，放假（true）或加班（false）]
  // 未收录2023法定假日
  [1]: [],
  [2]: [],
  [3]: [],
  [4]: [],
  [5]: [],
  [6]: [],
  [7]: [],
  [8]: [],
  [9]: [],
  [10]: [],
  [11]: [],
  [12]: [],
}

function judgeDate(date) {
  checkDate(date);
  const thisYear = (new Date()).getFullYear();
  const thisMonth = date.getMonth() + 1;
  const thisDate = date.getDate();
  // 尝试看看是不是法定假日，或者加班日
  const tryHolidayIdx = holidays[thisYear][thisMonth].findIndex(d => d[0] === thisDate);
  if (tryHolidayIdx >= 0) { // 是法定假日
    return holidays[thisYear][thisMonth][tryHolidayIdx][1];
  } else { // 不是法定假日，看看是不是周末
    const day = date.getDay();
    // 0 或 6 代表周末放假
    return day === 0 || day === 6;
  }
}

function getNextDate(date) {
  checkDate(date);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

// 获取最近的假期，返回 Date 类型(当天0点0时0分)，如果传入的日期就是假期，则返回 null
function getRecentHoliday(date) {
  checkDate(date);
  if (judgeDate(date)) return null;
  let nextDate = getNextDate(date);
  while (1) {
    if (judgeDate(nextDate)) {
      return nextDate;
    } else {
      nextDate = getNextDate(nextDate);
    }
  }
}

// 获取最近的工作日，返回 Date 类型，如果传入的日期就是工作日，返回 null
function getRecentWorkDay(date) {
  checkDate(date);
  if (!judgeDate(date)) return null;
  let nextDate = getNextDate(date);
  while (1) {
    if (!judgeDate(nextDate)) {
      return nextDate;
    } else {
      nextDate = getNextDate(nextDate);
    }
  }
}

function checkDate(date) {
  if (!(date instanceof Date)) {
    throw (new Error('参数必须为 Date 类型'));
  }
}

HolidayCalculater.judgeDate = judgeDate;
HolidayCalculater.getRecentHoliday = getRecentHoliday;
HolidayCalculater.getRecentWorkDay = getRecentWorkDay;

export {
  HolidayCalculater,
}
