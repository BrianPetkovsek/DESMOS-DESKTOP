const fs = require('fs');
const fsPromises = fs.promises;
const FileSystem = require('pwd-fs');
const pfs = new FileSystem();

(async () => {
	await pfs.copy('DATA_PATCHES', 'AdvancedWebArchiver/LIVE_DATA_LINE').catch(console.error)
	await fsPromises.copyFile("arguments.txt", "AdvancedWebArchiver/arguments.txt").catch(console.error)
})();