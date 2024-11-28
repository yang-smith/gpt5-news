/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      'via.placeholder.com',
      'abs.twimg.com',
      'github.githubassets.com',
      'example.com',
      'upload.wikimedia.org',
      'cdn.prod.website-files.com',
      'miro.medium.com',
      'cdn.prod.website-files.com',
      'cdnjs.cloudflare.com',
    ],
  },
};

export default nextConfig;
