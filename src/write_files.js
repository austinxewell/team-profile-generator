const fs = require('fs');

// writing files
const writeFile = fileContent => {
    return new Promise(reject => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
        })
    })
}

// copying file
const copyFile = () => {
    fs.copyFile('./src/style.css', './dist/style.css', err =>{
        if (err) {
            reject(err);
            return;
        }
    })
}