




const encoding = require('encoding-japanese');
const fs = require('fs');
const fileBuffer = fs.readFileSync('/mnt/d/CODE/watch_folder/master.ply');

console.log(encoding.detect(fileBuffer))



var jschardet = require("jschardet")
console.log(jschardet.detect(fileBuffer));




// { encoding: "UTF-8", confidence: 0.9690625 }