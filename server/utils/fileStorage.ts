const multer = require('multer');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

const isProd = process.env.NODE_ENV === 'production';

const baseUploadPath = isProd
    ? path.join(__dirname, '..', 'uploads', 'avatars')
    : path.join(process.cwd(), 'uploads', 'avatars');

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        fs.mkdirSync(baseUploadPath, { recursive: true });
        cb(null, baseUploadPath)
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