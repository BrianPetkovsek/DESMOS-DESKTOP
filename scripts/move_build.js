const fs = require('fs');
const fsPromises = fs.promises;

(async () => {
	await fsPromises.unlink('dist').catch(console.error)
	await fsPromises.symlink('AdvancedWebArchiver/dist', 'dist', type='dir').catch(console.error)
})();