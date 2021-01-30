const mymodule = require('./src/functions');
const getContent = mymodule.getContent
const writeFile = mymodule.writeFile

writeFile(getContent())
