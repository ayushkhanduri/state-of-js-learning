import { Temporal } from 'proposal-temporal';
// Temporal - Modern data time API for JS , made to be available globally and replace Date API in JS
// Not available yet, have to use a polyfill , the API is still isn't stable yet , a lot of functions
// present in the documentation are not working(https://tc39.es/proposal-temporal/docs/index.html)
console.log(Temporal.PlainDate.from({ year: 2006, month: 8, day: 24 }).toString());

