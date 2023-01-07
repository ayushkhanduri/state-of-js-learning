// Intl provides language sensitive number formatting , data and time formatting and string comparison as well
// Example for each 

function numberFormatting(number,locale,options) {
  return new Intl.NumberFormat(locale, { ...options }).format(number);
}

const indian = numberFormatting(12000,'hi-IN', {
  style: 'currency',
  currency: 'INR'
});

document.getElementById('number-formatting').innerHTML=`<span>Indian: ${indian} </span>`;
