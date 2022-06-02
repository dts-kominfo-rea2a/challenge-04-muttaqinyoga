// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (times, index = null) => {
    if(Array.isArray(times)){
      if(index != null && Number.isInteger(index) && index < times.length){
        let epochTimeFormat = new Date(times[index]);
        epochTimeFormatInSecond = Math.floor(epochTimeFormat.getTime() / 1000);
        return epochTimeFormatInSecond;
      }
      let epochTimeFormatInSecondArr = [];
      for(let i = 0; i<times.length; i++){
        epochTimeFormatInSecondArr.push(Math.floor(new Date(times[i]).getTime() / 1000));
        epochTimeFormatInSecondArr.sort();
      }
      return epochTimeFormatInSecondArr.join("-");
    }
    return "Parameter yang dikirim tidak tepat";
     
}

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
