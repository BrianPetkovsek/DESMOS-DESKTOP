const fs = require('fs');
const fsPromises = fs.promises;

(async () => {
	try{await fs.promises.mkdir('BACKUPS', { recursive: true })}catch(err){}
	try{await fsPromises.copyFile("AdvancedWebArchiver/arguments.txt", "arguments-new.txt")}catch(err){}
	try{await fsPromises.copyFile("AdvancedWebArchiver/arguments.txt", "BACKUPS/arguments-bak.txt")}catch(err){}
	try{await fs.promises.mkdir('DATA_PATCHES', { recursive: true })}catch(err){}
	try{await fs.promises.mkdir('LIVE_DATA_LINE', { recursive: true })}catch(err){}
})();