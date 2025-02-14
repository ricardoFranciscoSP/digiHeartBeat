module.exports = {
  async rewrites() {
    return [
      {
        source: "/wp-content/uploads/:path*",
        destination: "https://digi.maneiraweb.com.br/wp-content/uploads/:path*",
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
