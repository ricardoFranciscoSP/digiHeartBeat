module.exports = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  async rewrites() {
    return [
      {
        source: "/wp-content/uploads/:path*",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}wp-content/uploads/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/wp-content/uploads/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};
