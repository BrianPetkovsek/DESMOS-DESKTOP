const fs = require('fs');
const fsPromises = fs.promises;

(async () => {
	await fsPromises.unlink('dist').catch(err){}
	await fsPromises.symlink('AdvancedWebArchiver/dist', 'dist', type='dir').catch(err){}
})();