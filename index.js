const Sheet = require('./sheet');
const fetch = require('node-fetch');
// const cheerio = require('cheerio');

(async function() {

    const res = await fetch('https://www.moneyweb.co.za/tools-and-data/click-a-company/ANH/');
    const text = await res.text();
    console.log(typeof text);




    // const sheet = new Sheet();
    // await sheet.load()
    // await sheet.addRows([{title: 'windowCleaner',location: 'Fourways'}])
})()