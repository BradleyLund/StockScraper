const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
    constructor() {
        this.doc = new GoogleSpreadsheet('1PRT7v27GMg1ttOdZB8WKbcxSu5EYgtvl-8NkSTlrgLk');
    }

    async load() {
        // OR load directly from json file if not in secure environment
        await this.doc.useServiceAccountAuth(require('./creds.json'));
        await this.doc.loadInfo(); // loads document properties and worksheets
    }

    async addRows(rows) {
        const sheet = this.doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
        await sheet.addRows(rows);
    }
}

//used this to test the class was working 

//first time really using a class with functions and stuff I think, and it makes sense.

//

//can't run this without taking away the module exports = class. can only be run in other files i guess where it has been imported

// (async function() {
//     const sheet = new Sheet();
//     await sheet.load()
//     await sheet.addRows([{title: 'windowCleaner',location: 'Fourways'}])
// })()
