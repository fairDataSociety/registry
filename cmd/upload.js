const FairOS = require('@fairdatasociety/fairos-js');
const {FormData, File} = require("formdata-node");
const fs = require('fs');
require('dotenv').config();

const url = process.env.FAIROS_URL;
const pod = process.env.FAIROS_UPLOAD_POD;
const podFile = process.env.FAIROS_UPLOAD_FILE;
const localFile = process.env.FAIROS_UPLOAD_LOCAL_FILE;
const username = process.env.FAIROS_UPLOAD_USERNAME;
const password = process.env.FAIROS_UPLOAD_PASSWORD;
console.log('FairOS url', url);

async function run() {
    const fairOS = new FairOS(url);

    let data = (await fairOS.userLogin(username, password)).data;
    console.log(data);

    data = (await fairOS.podOpen(pod, password)).data;
    console.log(data);

    data = (await fairOS.podSync(pod)).data;
    console.log(data);

    data = (await fairOS.fileDelete(pod, '/' + podFile)).data;
    console.log(data);

    const formData = new FormData();
    const file = new File([fs.readFileSync(localFile)], podFile);
    formData.set('files', file);

    data = (await fairOS.fileUpload(pod, '/', formData)).data;
    console.log(data);
}

run().then();
