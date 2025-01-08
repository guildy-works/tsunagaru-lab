/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    basePath: '/',
    convertFormat: [
        ['png', 'webp'],
        ['jpg', 'webp'],
    ],
}

module.exports = config