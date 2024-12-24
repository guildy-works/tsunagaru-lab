import withExportImages from 'next-export-optimize-images'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/tsunagaru-lab',
    images: {
    },
    compiler: {
    },
    sassOptions: {

    },

};

export default withExportImages(nextConfig);
