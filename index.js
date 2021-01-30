const mymodule = require('./src/functions');
const getContentTemplace = mymodule.getContentTemplace
const writeFile = mymodule.writeFile
const getHomeDir = mymodule.getHomeDir
const getFileName = mymodule.getFileName
const getYoutubeAliasVideo = mymodule.getYoutubeAliasVideo
const path = require('path')

let fileContentTemplate = getContentTemplace()
let fileName = getFileName()
let youtubeVideoAlias = getYoutubeAliasVideo()
let fullFilePath = getHomeDir() + path.sep + fileName + ".html"

writeFile(
    fileContentTemplate.replace("@", youtubeVideoAlias),
    fullFilePath
)
