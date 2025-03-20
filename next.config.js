/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hello-luffy.s3.ap-southeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
}
