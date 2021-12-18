const tanggal = document.querySelector(".tanggal");
const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function jam() {
  setTimeout("jam()", 1000);
  let fulldate = new Date();
  day = fulldate.getDay();
  date = fulldate.getDate();
  month = fulldate.getMonth();
  year = fulldate.getFullYear();
  hours = fulldate.getHours();
  minutes = fulldate.getMinutes();
  second = fulldate.getSeconds();
  tanggal.innerHTML = `${hari[day]}, ${date} ${bulan[month]} ${year} ${hours} : ${minutes} : ${second}`;
  
}
jam();


