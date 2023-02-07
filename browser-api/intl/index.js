// Intl provides language sensitive number formatting , data and time formatting and string comparison as well
// Example for each 

function numberFormatting(number,locale,options) {
  return new Intl.NumberFormat(locale, { ...options }).format(number);
}

function dateFormatting(date, locale) {
  return new Intl.DateTimeFormat(locale).format(date);
}

const number =12000;
const date = new Date("05-07-1994");

const indian = numberFormatting(number,'hi-IN', {
  style: 'currency',
  currency: 'INR'
});

const japanese = numberFormatting(number, 'ja-JP', {
  style: 'currency',
  currency: 'JPY'
});

const indianDate = dateFormatting(date, 'hi-IN');
const japaneseDate = dateFormatting(date, 'ja-JP');

const dates = [
  { 
    value: indianDate,
    label: 'Indian'
  },
  {
    value: japaneseDate,
    label: 'Japanese'
  }
]


const currencies = [
  { 
    value: indian,
    label: 'Indian Rupee'
  },
  {
    value: japanese,
    label: 'Japanese Yen'
  }
];


document.querySelector("#number-formatting #items").innerHTML=currencies.reduce((acc, item , index, arr) =>{
  if(!acc) {
    acc += "<span>";
  }
  
  acc += `${item.label} : ${item.value}, `;
  
  if (index == arr.length -1) {
    acc = acc.substring(0, acc.length-2);
    acc += "</span>";
  } 
  return acc;
}, '');

document.querySelector("#date-time-formatting #items").innerHTML=dates.reduce((acc, item , index, arr) =>{
  if(!acc) {
    acc += "<span>";
  }
  
  acc += `${item.label} : ${item.value}, `;
  
  if (index == arr.length -1) {
    acc = acc.substring(0, acc.length-2);
    acc += "</span>";
  } 
  return acc;
}, '');
