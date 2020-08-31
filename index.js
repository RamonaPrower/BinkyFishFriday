const Twitter = require('twitter');
const config = require('./config.json');
const schedule = require('node-schedule');

const tclient = new Twitter({
    consumer_key: config.ckey,
        consumer_secret: config.csecret,
        access_token_key: config.atkey,
        access_token_secret: config.atsecret,
});

const main = () => {
    const j = schedule.scheduleJob('0 18 * * 5', post);
    const keep = schedule.scheduleJob('12 12 * * *', keepalive);
    console.log('schedule started');
}

const post = () => {
    console.log('posting');
    const status = {
        status: 'https://t.co/WYL7G4tYkV',
    }
    tclient.post('statuses/update', status, function (err, _tweet, _response) {
    })
}

const keepalive = () => {
    console.log('I am still alive');
}

main();