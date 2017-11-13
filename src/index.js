class Personnummer {
    constructor(personnummer) {
        this.personnummer = personnummer;
        this.ones = ['noll', 'ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio',
            'tio', 'elva', 'tolv', 'tretton', 'fjorton', 'femton', 'sexton', 'sjutton', 'arton', 'nitton',
            'tjugo','','','','','','','','','',
            'trettio','','','','','','','','','',
            'fyrtio','','','','','','','','','',
            'femtio','','','','','','','','','',
            'sextio','','','','','','','','','',
            'sjuttio','','','','','','','','','',
            'åttio','','','','','','','','','',
            'nittio'];
    }

    translate() {
        return this.hundreds()  +
                this.year() +
                this.month() +
                this.day() +
                this.last4();
    }

    hundreds() {
        return (this.ones[this.personnummer.substr(0,2)]) + 'hundra';
    }

    year() {
        const iYear = parseInt(this.personnummer.substr(2,2));
        let year = '';

        if (iYear >= 20) {
            year += this.ones[this.personnummer.substr(2,1)*10];

            if (iYear % 10 !== 0) {
                year += this.ones[this.personnummer.substr(3,1)];
            }
        }
        else if(iYear > 0) {
            year += this.ones[iYear];
        }

        return year + ' ';
    }

    month() {
        return this.genericTwoInts(4) + ' ';
    }

    day() {
        return this.genericTwoInts(6) + ' ';
    }

    last4() {
        return this.genericTwoInts(9) + ' ' + this.genericTwoInts(11);

    }

    genericTwoInts(startIndex) {
        const number = parseInt(this.personnummer.substr(startIndex,2));

        if(number < 10) {
            return this.ones[this.personnummer.substr(startIndex,1)] + this.ones[this.personnummer.substr(startIndex+1,1)];
        }
        else if(number<20) {
            return this.ones[this.personnummer.substr(startIndex,2)];
        }
        else if(number % 10===0 && number !== 10) {
            return this.ones[this.personnummer.substr(startIndex,2)];
        }
        else {
            return this.ones[this.personnummer.substr(startIndex,1)*10] + this.ones[this.personnummer.substr(startIndex+1,1)];
        }
    }
}

exports.Personnummer = Personnummer;
