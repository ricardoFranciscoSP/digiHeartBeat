const config = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  getImageUrl: (path) => `${config.baseUrl}${path}`,
};

export default config;
