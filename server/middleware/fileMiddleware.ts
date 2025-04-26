const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(_: any, __: any, cb: any) {
        cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: function(_: any, file: any, cb: any) {
        const uniqueName = `${Date.now()}-${file.originalName}`;
        cb(null, uniqueName);
    }
})

const upload = multer({ storage });

module.exports = {
    uploadSingle: upload.single('img')
}