let fs = require("fs");
let axios = require("axios");

let songs = ["Aashiqui", "Jannat", "Rockstar", "Shinning"];
let durations = ["02:20", "02:10", "02:19", "02:40"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `https://ipfs.moralis.io:2053/ipfs/QmZNdQXzBq3VT5L96CPFLpFYkzErG9u3n7DktJ3YiB5Js7/media/4`, //xxx = hash
      name: songs[i],
      animation_url: `https://ipfs.moralis.io:2053/ipfs/QmZNdQXzBq3VT5L96CPFLpFYkzErG9u3n7DktJ3YiB5Js7/media/${i}`, //xxx = hash
      duration: durations[i],
      artist: "KK",
      year: "1998",
    },
  });
}

console.log(ipfsArray);

axios
  .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
        "1AuMg7Z4CHV3ZF3qrMgqXl2QlRC80MdSFo9g72omTbBBw3qPNIfPCiLorBWt3EJ8",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(ipfsArray);
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
