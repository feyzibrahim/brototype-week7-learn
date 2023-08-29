const fs = require("fs");

// Reading Files
// fs.readFile("./data.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data); // Prints the buffer
//   console.log(data.toString()); // prints actual string
// });

// fs.writeFile("./data.txt", "New text", () => {
//   console.log("File updated");
// });

// Creates file if doesn't exits change the below name next to see the change
// fs.writeFile("./dataa.txt", "New text", () => {
//   console.log("File updated");
// });

// Creating a folder

// fs.mkdir("./assets", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Folder created");
// });

// Creating folder if it doesn't exists.

// if (!fs.existsSync("./assetss")) {
//   fs.mkdir("./assetss", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder created");
//   });
// } else {
//   console.log("Folder already exists");
// }

// Deleting folder

// if (fs.existsSync("./assetss")) {
//   fs.rmdir("./assetss", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder deleted");
//   });
// }

// File delete

if (fs.existsSync("./dataa.txt")) {
  fs.unlink("./dataa.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File deleted");
    }
  });
}
