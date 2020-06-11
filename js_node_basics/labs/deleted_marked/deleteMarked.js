const fs = require("fs");

// const sourcePath = process.argv[2];
// const targetPath = process.argv[3];
// We can use array destructuring instead of typing the above two lines
const [, , sourcePath, targetPath] = process.argv;


fs.readFile(sourcePath, "utf8", (err, data) => {  
  const filteredData = data

    .split("\n")
    .filter((line) => 
      
      line.split(",")[2].trim().toLowerCase() !== "yes")
    

    .join("\n");

  console.log(filteredData);

  fs.writeFile(targetPath, filteredData, (err) => {
    if (err) throw err;
    console.log("Marked lines deleted");
    console.log(`New file saved to "${targetPath}"`);
  });
});