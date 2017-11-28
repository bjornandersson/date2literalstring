const Generic = require('./generic.js').Generic;
const generic = new Generic();
const language = require('./language.js').language;

class Personnummer {
    constructor(personnummer) {
        this.personnummer = personnummer;
        this.numbers = language.se;         //Personnummer only available in Swedish
    }

    translate() {
        return this.hundreds()  +
                this.year() +
                this.month() +
                this.day() +
                this.last4();
    }

    hundreds() {
        return (this.numbers[this.personnummer.substr(0,2)]) + this.numbers[100];
    }

    year() {
        const iYear = parseInt(this.personnummer.substr(2,2));
        let year = '';

        if (iYear >= 20) {
            year += this.numbers[this.personnummer.substr(2,1)*10];

            if (iYear % 10 !== 0) {
                year += this.numbers[this.personnummer.substr(3,1)];
            }
        }
        else if(iYear > 0) {
            year += this.numbers[iYear];
        }

        return year + ' ';
    }

    month() {
        return generic.twoInts(this.personnummer, 4) + ' ';
    }

    day() {
        return generic.twoInts(this.personnummer, 6) + ' ';
    }

    last4() {
        return generic.twoInts(this.personnummer, 9) + ' ' + generic.twoInts(this.personnummer, 11);
    }
}

exports.Personnummer = Personnummer;
