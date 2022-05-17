function HolidayCalculater() {
  const yearArr = [];
  const month = [];
  for (let i = 1; i < 31; i++) {
    month.push(i);
  }
  const thisYear = (new Date()).getFullYear();

  return yearArr;
}

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

function judgeDate(date) {
  if (date instanceof Date) {
    const thisYear = (new Date()).getFullYear();
    const thisMonth = date.getMonth()+1;
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
  } else {
    console.warn("judgeDate函数只能接收一个Date类型的参数");
  }
}

HolidayCalculater.judgeDate = judgeDate;

export {
  HolidayCalculater,
}
