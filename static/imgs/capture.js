const capture = require('capture-chrome')
const fs = require('fs')
const url = process.argv[2];
const path = process.argv[3];
capture({
  url: url,
  wait: 200
}).then(screenshot => {
  fs.writeFileSync(`${__dirname}/${path}.png`, screenshot)
  console.log(`open ${path}.png`)
})