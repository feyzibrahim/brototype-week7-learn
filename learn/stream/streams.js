const fs = require("fs");

const readStream = fs.createReadStream("./docs/data.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/new.txt");

readStream.on("data", (chunk) => {
  console.log("-------- New Chunk --------");
  console.log(chunk);
  writeStream.write("\n -------- New Chunk ---------- \n");
  writeStream.write(chunk);
});
