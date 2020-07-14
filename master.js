const chokidar = require('chokidar');
const fs = require('fs');
const nodepath = require('path');
const replace = require('replace-in-file');

const watcher = chokidar.watch('Z:\\Daily playlist 2019\\', {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
    usePolling: true
});

const log = console.log.bind(console);

watcher
    .on('change', path => {

        const filename = nodepath.basename(path)
        const copyFileLocation = 'Z:\\Daily_playlist\\'+filename;

        fs.copyFile(path, copyFileLocation, (err) => {
            if (err) throw err;

            const options = {
                files: copyFileLocation,
                encoding: 'utf16le',
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



