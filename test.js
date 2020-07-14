const replace = require('replace-in-file');





async function findreplace () {

  const options = {
    files: 'D:/CODE/watch folder/paste/*.ply',
    encoding: 'utf16LE',
    from: /"E:/g,
    to: '"\\\\Pbneo-500-0719\\e\\'
};

  try {
    const results = await replace(options)
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}
 
findreplace();


 