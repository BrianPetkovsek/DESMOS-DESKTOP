const fs = require('fs');
const fsPromises = fs.promises;

(async () => {
	try{await fsPromises.unlink('dist')}catch(err){}
	try{await fsPromises.symlink('AdvancedWebArchiver/dist', 'dist', type='dir')}catch(err){}
})();