/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  // images: {
  //   domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  // },images: {
  //   domains: ['https://i.imgur.com/HgHCkL8.jpg'],
  // },
 // https://i.imgur.com/DLhB8RJ.jpg
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                port: '',
                pathname: '/HgHCkL8.jpg',
            },
        ],
    },
    // images2: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'i.imgur.com',
    //             port: '',
    //             pathname: '/DLhB8RJ.jpg',
    //         },
    //     ],
    // },

}

module.exports = nextConfig;
