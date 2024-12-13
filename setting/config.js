const fs = require('fs')

global.owner = "62"
global.status = false

global.mess = {
  owner: "khusus ongner bejir 😹"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
