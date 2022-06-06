let fs = require("fs");
let axios = require("axios");

let media = [
  "Aashiqui.mp3",
  "Jannat.mp3",
  "Rockstar.mp3",
  "Shinning.mp3",
  "Jannat.jpg",
];

let ipfsArray = [];
let promises = [];

for (let i = 0; i < media.length; i++) {
  promises.push(
    new Promise((res, rej) => {
      fs.readFile(`${__dirname}/export/${media[i]}`, (err, data) => {
        // console.log(data);
        if (err) rej();
        ipfsArray.push({
          path: `media/${i}`,
          content: data.toString("base64"),
        });
        res();
      });
    }),
  );
}

Promise.all(promises).then(() => {
  axios
    .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
      headers: {
        "X-API-KEY":
          "1AuMg7Z4CHV3ZF3qrMgqXl2QlRC80MdSFo9g72omTbBBw3qPNIfPCiLorBWt3EJ8",
        accept: "application/json",
        "Content-Type": "application/json",
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log("error");
      console.log(error);
    });
});
