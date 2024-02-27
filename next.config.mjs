/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DIRECTUS_ENDPOINT: 'https://directus.area917.ph',
    DIRECTUS_USER_EMAIL: 'emailfortestingpurposesonly111@gmail.com',
    DIRECTUS_USER_PASSWORD: 'Ren72dVTQtZyzHbEhkg6',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

export default nextConfig
