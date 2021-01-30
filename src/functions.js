fs = require('fs');

let getContent = () => "function generated content"

let writeFile = function(fileContent) {
    fs.writeFile("juca.txt", fileContent, function (err) {
        if (err) {
            console.log(err)
        }
        return ""
    })
}

module.exports = {
    getContent: getContent,
    writeFile: writeFile
}