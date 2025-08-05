// const message = (name) => {
//   console.log(`Hello ${name}!`);
// };
// message("John");

// const memoryInformation = process.memoryUsage();
// console.log(memoryInformation);

// const moment = require("moment");
// const date = moment().format("MMM Do YY");
// console.log(date);

// const fs = require("fs");
// const fileReadCallback = (error, data) => {
//   if (error) {
//     console.log("Gagal membaca berkas");
//     return;
//   }
//   console.log(data);
// };
// fs.readFile("package.json", "utf-8", fileReadCallback);
// const data = fs.readFileSync("package.json", "utf-8");x`
// console.log(data);

// const fs = require("fs");
// const readableStream = fs.createReadStream("article.txt", {
//   highWaterMark: 10,
// });
// readableStream.on("readable", () => {
//   try {
//     process.stdout.write(`[${readableStream.read()}]`);
//   } catch (error) {}
// });
// readableStream.on("end", () => {
//   console.log("Done");
// });

const fs = require("fs");
const writeableStream = fs.createWriteStream("output.txt");
writeableStream.write("Ini merupakan teks baris pertama!\n");
writeableStream.write("Ini merupakan teks baris kedua!\n");
writeableStream.end("Akhir dari writable stream!");
