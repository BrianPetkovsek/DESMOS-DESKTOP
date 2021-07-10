const fs = require('fs');
const fsPromises = fs.promises;

(async () => {
	await fsPromises.copyFile("AdvancedWebArchiver/arguments.txt", "arguments.txt").catch(err){}
})();