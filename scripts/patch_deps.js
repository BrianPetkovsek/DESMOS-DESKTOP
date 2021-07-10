const fs = require('fs');
const fsPromises = fs.promises;
const FileSystem = require('pwd-fs');
const pfs = new FileSystem();

(async () => {
	try{await pfs.copy('DATA_PATCHES', 'AdvancedWebArchiver/LIVE_DATA_LINE')}catch(err){}
	try{await fsPromises.copyFile("arguments.txt", "AdvancedWebArchiver/arguments.txt")}catch(err){}
})();