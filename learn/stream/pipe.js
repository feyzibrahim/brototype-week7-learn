const fs = require("fs");

const readStream = fs.createReadStream("./docs/data.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/new2.txt");

readStream.pipe(writeStream);
