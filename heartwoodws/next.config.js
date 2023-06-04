const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "heartwoodbooksandart-com.3dcartstores.com"
            }
        ]
    }
}

module.exports = nextConfig
