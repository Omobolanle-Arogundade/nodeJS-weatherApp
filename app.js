console.log('starting app.js');

const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather',
        string: true
    }
    })
    .help()
    .alias('help', 'h')
    .argv;


    console.log(argv);
    var encodedAddress = encodeURIComponent(argv.a);
    var API_key = 'AIzaSyCz1Cydq-nwDE99Wdxu8IjR2-_LHkBx6L0';

    geocode.geocode(encodedAddress, API_key);

