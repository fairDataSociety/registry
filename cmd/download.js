const FairOS = require('@fairdatasociety/fairos-js');
const fs = require('fs');
require('dotenv').config();

const url = process.env.FAIROS_URL;
const pod = process.env.FAIROS_DOWNLOAD_POD;
const podFile = process.env.FAIROS_DOWNLOAD_FILE;
const localFile = process.env.FAIROS_DOWNLOAD_LOCAL_FILE;
const username = process.env.FAIROS_DOWNLOAD_USERNAME;
const password = process.env.FAIROS_DOWNLOAD_PASSWORD;
console.log('FairOS url', url);

async function run() {
    const fairOS = new FairOS(url);

    let data = (await fairOS.userLogin(username, password)).data;
    console.log(data);

    data = (await fairOS.podOpen(pod, password)).data;
    console.log(data);

    data = (await fairOS.podSync(pod)).data;
    console.log(data);

    data = (await fairOS.fileDownload(pod, '/' + podFile, podFile)).data.toString();
    console.log('Downloaded, length', data.length);
    fs.writeFileSync(localFile, data);
    console.log('saved');
}

run().then();
