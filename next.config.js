/** @type {import('next').NextConfig} */
const nextConfig = {
  // 这个设置可以避免重复执行fetch代码，即便在useEffect中也不会重复执行
  reactStrictMode: false
}

module.exports = nextConfig
