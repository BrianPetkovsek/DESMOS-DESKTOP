const fs = require('fs');
const fsPromises = fs.promises;
const FileSystem = require('pwd-fs');
const pfs = new FileSystem();

(async () => {
	await new Promise(r => setTimeout(r, 5000));
	try{await fsPromises.rename('node_modules/AdvancedWebArchiver', 'AdvancedWebArchiver')}catch(err){}
	try{await fsPromises.rename('node_modules', 'AdvancedWebArchiver/node_modules')}catch(err){}
	await new Promise(r => setTimeout(r, 5000));
	try{await pfs.remove('node_modules')}catch(err){}
})();