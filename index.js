const crypto = require('crypto');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');
var fileName = '';
readline.question('Enter API name (no spaces): ', (name) => {
    crypto.randomBytes(256, (err, buf) => {
        if (err){
            return console.log(err);
        }

        let token = buf.toString('hex');
        var filetxt = "// This is the API secret for " + name + "\n";
        filetxt += "module.exports = {\n";
        filetxt += "    'secret': '" + token + "'\n";
        filetxt += "}";
        fileName = name + '_config.js';
        fs.writeFile(fileName, filetxt, (err) => {
            if (err) throw err;
            console.log(fileName + " successfully written.");
            process.exit(0);
        });
    });
});

