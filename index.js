const mymodule = require('./src/functions');
const writeFile = mymodule.writeFile
const getHomeDir = mymodule.getHomeDir
const getFileName = mymodule.getFileName
const getYoutubeAliasVideo = mymodule.getYoutubeAliasVideo
const transformHtmlTemplatedata = mymodule.transformHtmlTemplatedata
const path = require('path')

let fileName = getFileName()
let fullFilePath = getHomeDir() + path.sep + fileName + ".html"
let templateTransformed = transformHtmlTemplatedata()

writeFile(
    templateTransformed,
    fullFilePath
)

console.log("Finished. Check the generated file: " + fullFilePath)
