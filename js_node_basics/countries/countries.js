const countries = [
    "Argentina",
    "Switzerland",
    "France",
    "Brazil",
    "Germany",
    "Japan",
    "Armenia",
    "Ejypt",
    "Canada",
    "Emirates",
  ];
  
  // Assign a value to 'module.exports' to make it available
  // to other JavaScript files in your node project. having a
  // 'module.exports' line makes this file a 'module'
  module.exports = countries;
  
  // To access countries array from another file, we use
  // 'require' function:
  // const countries = require('<path-to-countries>');