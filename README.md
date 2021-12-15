# FairDataSociety Registry

Registry is located here: https://registry.fairdatasociety.org/

Current registry reference is `5bb2cd9d685a7d98866eb00782a29ec9e8d0384210b455497c29382e85493edc`.

You can view the file content with site above or manually by receiving all actual content with FairOS
command `pod receive 5bb2cd9d685a7d98866eb00782a29ec9e8d0384210b455497c29382e85493edc`

### How it works?

There is a FairOS user run by an organization. With this user created pod and json inside it. The file contains a list
of references to various files from third-party providers. All of these files are stored in Swarm using FairOS. Knowing
the reference file, any user can download it to his computer.

### Registry management

```
cd cmd
yarn
cp example.env .env
```

Fill .env file with your credentials.

Upload file updates with this command

`node upload.js`

Download latest updates

`node download.js`

Registry list structure

```js
[
    {
        "key": "Top directory/Sub directory/file.png",
        "size": 1572864, // bytes
        "reference-type": "fairos-dfs", // fairos-dfs or swarm
        "reference": "e3f8008136cae4550bf14dbf62640e7011a92bfeabfb36b736c684c98f3999301639402745",
        "license-information": "", // optional
        "description": ""
    }
]
```
