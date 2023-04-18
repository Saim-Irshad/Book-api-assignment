/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env : {
    PGHOST:'ep-cool-bird-204881.ap-southeast-1.aws.neon.tech',
    PGDATABASE:'neondb',
    PGUSER:'saimirshad77',
    PGPASSWORD:'wr4tgiEKv1oT'
  }
}

module.exports = nextConfig