const axios = require('axios');

async function checkInternet() {
    try {
        await axios.get('https://www.google.com');
        console.log('You are online now');
    } catch (error) {
        console.log('You are not online');
    }
}

checkInternet();