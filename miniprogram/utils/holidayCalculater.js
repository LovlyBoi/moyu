function HolidayCalculater() { }

const holidays = {};
holidays[2022] = {
  // [月份]: [日期，放假（true）或加班（false）]
  // 2022法定假日及串休 2022.5.17更新
  [1]: [[1, true, '元旦'], [2, true, '元旦'], [3, true, '元旦'], [29, false], [30, false], [31, true, '春节']],
  [2]: [[1, true, '春节'], [2, true, '春节'], [3, true, '春节'], [4, true, '春节'], [5, true, '春节'], [6, true, '春节']],
  [3]: [],
  [4]: [[2, false], [3, true, '清明节'], [4, true, '清明节'], [5, true, '清明节'], [24, false], [30, true, '劳动节']],
  [5]: [[1, true, '劳动节'], [2, true, '劳动节'], [3, true, '劳动节'], [4, true, '劳动节'], [7, false]],
  [6]: [[3, true, '端午节'], [4, true, '端午节'], [5, true, '端午节']],
  [7]: [],
  [8]: [],
  [9]: [[10, true, '中秋节'], [11, true, '中秋节'], [12, true, '中秋节']],
  [10]: [[1, true, '国庆节'], [2, true, '国庆节'], [3, true, '国庆节'], [4, true, '国庆节'], [5, true, '国庆节'], [6, true, '国庆节'], [7, true, '国庆节'], [8, false], [9, false]],
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

function isHoliday(date) {
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

// 日期往后一天（0时0分）
function getNextDate(date) {
  checkDate(date);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

// 获取最近的假期名
function getRecentHolidayName(date) {
  checkDate(date);
  if (isHoliday(date)) return null;
  const nextHoliday = getRecentHoliday(date);
  let holidayIdx = holidays[nextHoliday.getFullYear()][nextHoliday.getMonth() + 1].findIndex(d => d[0] === nextHoliday.getDate());
  if (holidayIdx >= 0) {
    return holidays[nextHoliday.getFullYear()][nextHoliday.getMonth() + 1][holidayIdx][2];
  } else {
    return '周末';
  }
}

// 获取最近的假期，返回 Date 类型(当天0点0时0分)，如果传入的日期就是假期，则返回 null
function getRecentHoliday(date) {
  checkDate(date);
  if (isHoliday(date)) return null;
  let nextDate = getNextDate(date);
  while (1) {
    if (isHoliday(nextDate)) {
      return nextDate;
    } else {
      nextDate = getNextDate(nextDate);
    }
  }
}

// 获取最近的工作日，返回 Date 类型，如果传入的日期就是工作日，返回 null
function getRecentWorkDay(date) {
  checkDate(date);
  if (!isHoliday(date)) return null;
  let nextDate = getNextDate(date);
  while (1) {
    if (!isHoliday(nextDate)) {
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

HolidayCalculater.isHoliday = isHoliday;
HolidayCalculater.getRecentHoliday = getRecentHoliday;
HolidayCalculater.getRecentWorkDay = getRecentWorkDay;
HolidayCalculater.getRecentHolidayName = getRecentHolidayName;

export {
  HolidayCalculater,
}
