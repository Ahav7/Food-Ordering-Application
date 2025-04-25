import "dotenv/config"; // Loads .env variables
import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'sowjanya-food-ordering.s3.amazonaws.com',
      },

    ]
  },
  env: {
    MONGO_URL: process.env.MONGO_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    SECRET: process.env.SECRET,
  },
};
export default nextConfig;


