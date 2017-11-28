const Generic = require('./generic.js').Generic;
const generic = new Generic();

test('generic ', () => {
    expect(generic.twoInts('00')).toEqual('nollnoll');
    expect(generic.twoInts('01')).toEqual('nollett');
    expect(generic.twoInts('02')).toEqual('nolltvå');
    expect(generic.twoInts('03')).toEqual('nolltre');
    expect(generic.twoInts('04')).toEqual('nollfyra');
    expect(generic.twoInts('05')).toEqual('nollfem');
    expect(generic.twoInts('06')).toEqual('nollsex');
    expect(generic.twoInts('07')).toEqual('nollsju');
    expect(generic.twoInts('08')).toEqual('nollåtta');
    expect(generic.twoInts('09')).toEqual('nollnio');
});

test('generic ', () => {
    expect(generic.twoInts('10')).toEqual('tio');
    expect(generic.twoInts('11')).toEqual('elva');
    expect(generic.twoInts('12')).toEqual('tolv');
    expect(generic.twoInts('13')).toEqual('tretton');
    expect(generic.twoInts('14')).toEqual('fjorton');
    expect(generic.twoInts('15')).toEqual('femton');
    expect(generic.twoInts('16')).toEqual('sexton');
    expect(generic.twoInts('17')).toEqual('sjutton');
    expect(generic.twoInts('18')).toEqual('arton');
    expect(generic.twoInts('19')).toEqual('nitton');
});

test('generic ', () => {
    expect(generic.twoInts('20')).toEqual('tjugo');
    expect(generic.twoInts('30')).toEqual('trettio');
    expect(generic.twoInts('40')).toEqual('fyrtio');
    expect(generic.twoInts('50')).toEqual('femtio');
    expect(generic.twoInts('60')).toEqual('sextio');
    expect(generic.twoInts('70')).toEqual('sjuttio');
    expect(generic.twoInts('80')).toEqual('åttio');
    expect(generic.twoInts('90')).toEqual('nittio');
});

test('generic ', () => {
    expect(generic.twoInts('21')).toEqual('tjugoett');
    expect(generic.twoInts('32')).toEqual('trettiotvå');
    expect(generic.twoInts('43')).toEqual('fyrtiotre');
    expect(generic.twoInts('54')).toEqual('femtiofyra');
    expect(generic.twoInts('65')).toEqual('sextiofem');
    expect(generic.twoInts('76')).toEqual('sjuttiosex');
    expect(generic.twoInts('87')).toEqual('åttiosju');
    expect(generic.twoInts('98')).toEqual('nittioåtta');
});

test('generic ', () => {
    expect(generic.twoInts('0123456789', 0)).toEqual('nollett');
    expect(generic.twoInts('0123456789', 1)).toEqual('tolv');
    expect(generic.twoInts('0123456789', 2)).toEqual('tjugotre');
    expect(generic.twoInts('0123456789', 3)).toEqual('trettiofyra');
    expect(generic.twoInts('0123456789', 4)).toEqual('fyrtiofem');
    expect(generic.twoInts('0123456789', 5)).toEqual('femtiosex');
    expect(generic.twoInts('0123456789', 6)).toEqual('sextiosju');
    expect(generic.twoInts('0123456789', 7)).toEqual('sjuttioåtta');
    expect(generic.twoInts('0123456789', 8)).toEqual('åttionio');
});
