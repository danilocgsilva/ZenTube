const { exception } = require('console');

fs = require('fs');

var checkErr = function(err) {
    if (err) {
        console.log(err)
    }
    return ""
}

module.exports = {

    getContentTemplace: function() { 
        return fs.readFileSync('./assets/htmltemplate').toString()
    },
    
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

    getYoutubeAliasVideo: function() {
        let youtubeVideoAlias = process.argv[2]
        if (!youtubeVideoAlias) {
            console.log("You forget to provides the first argument to be the video alias.")
            process.exit(0)
        }
        return youtubeVideoAlias
    }

}