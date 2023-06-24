import { TwitterApi } from 'twitter-api-v2';
import configJson from './config.json' assert { type: "json" };

import { scheduleJob } from 'node-schedule';

const twitterClientv1 = new TwitterApi({
    appKey: configJson.ckey,
    appSecret: configJson.csecret,
    accessToken: configJson.atkey,
    accessSecret: configJson.atsecret,
    
});

const post = async () => {
    try {
        const tweet = await twitterClientv1.v2.tweet('https://t.co/WYL7G4tYkV');
        console.log('Tweet posted successfully');
    } catch (error) {
        console.error('Error posting tweet:', error);
    }
};

const main = () => {
        const j = scheduleJob('0 18 * * 5', post);
        const keep = scheduleJob('12 12 * * *', keepalive);
        console.log('schedule started');

}


const keepalive = () => {
    console.log('I am still alive');
}

main();
post();

// https://t.co/WYL7G4tYkV