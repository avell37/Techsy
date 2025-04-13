const multer = require('multer');
const uuid = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, process.env.HOME + '/Desktop/frontend/techsy/server/uploads/avatars')
    },
    filename: function (req: any, file: any, cb: any) {
        const ext = path.extname(file.originalname);
        cb(null, `${uuid.v4()}${ext}`)
    }
})

const fileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Разрешено загружать только изображения!'), false);
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
})

module.exports = upload;