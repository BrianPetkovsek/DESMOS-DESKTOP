const fs = require('fs');
const fsPromises = fs.promises;

(async () => {
	await fsPromises.copyFile("AdvancedWebArchiver/arguments.txt", "arguments.txt").catch(err){}
	fs.promises.mkdir('BACKUPS', { recursive: true }).catch(console.error);
	fs.promises.mkdir('DATA_PATCHES', { recursive: true }).catch(console.error);
	fs.promises.mkdir('LIVE_DATA_LINE', { recursive: true }).catch(console.error);
})();