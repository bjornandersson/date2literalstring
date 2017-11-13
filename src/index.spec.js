const Personnummer = require('./index.js').Personnummer;
const pnr = new Personnummer();

test('Personnummer klassen ska finnas', function() {
    expect(pnr).toBeDefined();
});

test('Personnummer 1', () => {
    const pnr = new Personnummer('19790102-0304');
    expect(pnr.translate()).toEqual('nittonhundrasjuttionio nollett nolltvå nolltre nollfyra');
});

test('Personnummer 2', () => {
    const pnr = new Personnummer('19901011-1213');
    expect(pnr.translate()).toEqual('nittonhundranittio tio elva tolv tretton');
});

test('Personnummer 3', () => {
    const pnr = new Personnummer('20001220-2122');
    expect(pnr.translate()).toEqual('tjugohundra tolv tjugo tjugoett tjugotvå');
});

test('Personnummer 4', () => {
    const pnr = new Personnummer('20171231-9067');
    expect(pnr.translate()).toEqual('tjugohundrasjutton tolv trettioett nittio sextiosju');
});

test('Personnummer 5', () => {
    const pnr = new Personnummer('20051231-9067');
    expect(pnr.translate()).toEqual('tjugohundrafem tolv trettioett nittio sextiosju');
});
