const { width, height } = require("robotjs").getScreenSize()

fs = require('fs');

var checkErr = function(err) {
    if (err) {
        console.log(err)
    }
    return ""
}

var getYoutubeAliasVideo = function() {
    let youtubeVideoAlias = process.argv[2]
    if (!youtubeVideoAlias) {
        console.log("You forget to provides the first argument to be the video alias.")
        process.exit(0)
    }
    return youtubeVideoAlias
}

module.exports = {

    writeFile: function(fileContent, filePath) {
        fs.writeFile(filePath, fileContent, checkErr)
    },

    getHomeDir: function() {
        return require('os').homedir()
    },

    getFileName: function() {
        let fileName = process.argv[3]
        if (!fileName) {
            console.log("You forget to provides the second argument to be the filename.")
            process.exit(0)
        }
        return fileName
    },

    transformHtmlTemplatedata: function() {
        let rawTemplate = fs.readFileSync('./assets/htmltemplate').toString()
        let embWidth = width * 0.618
        let embHeight = height * 0.618 - 160
        let youtubeAlias = getYoutubeAliasVideo()

        return rawTemplate.replace("@1", embWidth)
            .replace("@2", embHeight)
            .replace("@3", youtubeAlias)
    }

}