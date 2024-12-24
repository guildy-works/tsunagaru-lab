/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    basePath: '/tsunagaru-lab',
    convertFormat: [
        ['png', 'webp'],
        ['jpg', 'webp'],
    ],
}

module.exports = config