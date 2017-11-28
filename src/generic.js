const language = require('./language.js').language;

class Generic {
    constructor(lang) {
        this.numbers = language[lang] || language.se; //Defaults to Swedish
    }

    twoInts(source, startIndex) {
        startIndex = startIndex || 0;
        const number = parseInt(source.substr(startIndex,2));

        if(number < 10) {
            return this.numbers[source.substr(startIndex,1)] + this.numbers[source.substr(startIndex+1,1)];
        }
        else if(number<20) {
            return this.numbers[source.substr(startIndex,2)];
        }
        else if(number % 10===0 && number !== 10) {
            return this.numbers[source.substr(startIndex,2)];
        }
        else {
            return this.numbers[source.substr(startIndex,1)*10] + this.numbers[source.substr(startIndex+1,1)];
        }
    }
}

exports.Generic = Generic;
