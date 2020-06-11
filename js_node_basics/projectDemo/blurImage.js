const jimp = require("jimp");

const fileName = "./secretFile.png";

jimp.read(fileName, (err, image) => {
  if (err) {
    console.error(err);
  }

  image.blur(2).write(fileName);
});
