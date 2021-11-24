const fs = require("fs"); //fileSystem

// reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log("last line");

// vai aparecer primeiro o ultimo log, por que o readFile é async e primeiro JS vai procurar por esse documento, enquanto isso vai rodar o que vem na sequencia. e aí sim vaia mostrar esse log que pedimos

// writing files
// fs.writeFile("./docs/blog1.txt", "hello world", () => {
//     console.log("file was written");
// });
// fs.writeFile("./docs/blog2.txt", "hello again", () => {
//     console.log("file was written");
// });

// directories
// if (!fs.existsSync("./assets")) {
//     fs.mkdir("./assets", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder created");
//     });
// } else {
//     fs.rmdir("./assets", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder deleted");
//     });
// }

// deleting files
// if (fs.existsSync("./docs/deleteme.txt")) {
//     fs.unlink("./docs/deleteme.txt", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("file deleted");
//     });
// }
