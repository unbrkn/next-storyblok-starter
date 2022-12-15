module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['img.storyblok.com', 'a.storyblok.com']
  },
  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
    PREVIEW_TOKEN: process.env.PREVIEW_TOKEN,
    NEXT_PUBLIC_APP_URL: process.env.VERCEL_URL || process.env.APP_URL || 'localhost:3000'
  }
}
