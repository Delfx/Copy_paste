const chokidar = require('chokidar');
const fs = require('fs');
const nodepath = require('path');
const replace = require('replace-in-file');
const encoding = require('encoding-japanese');

const watcher = chokidar.watch('Z:\\Daily playlist 2019\\', {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
    usePolling: true
});

const log = console.log.bind(console);





watcher
    .on('change',  path => {

        const filename = nodepath.basename(path);
        const copyFileLocation = 'Z:\\Daily_playlist\\' + filename;

        fs.copyFile(path, copyFileLocation,  (err) => {
            
        const fileBuffer = fs.readFileSync(copyFileLocation);
        const encoderName = encoding.detect(fileBuffer)
        let encodingToOptions = 'utf16le'

           
            if (encoderName === 'SJIS') {
                encodingToOptions = 'ascii'
            }

            const options = {
                files: copyFileLocation,
                encoding: encodingToOptions,
                from: /"E:\\/g,
                to: '"\\\\Pbneo-500-0719\\e\\',
            };

            replace(options)
                .then(results => {
                    console.log('Replacement results:', results);
                })
                .catch(error => {
                    console.error('Error occurred:', error);
                });


            console.log('source.txt was copied to destination.txt');
        });


        console.log(path)

    });



