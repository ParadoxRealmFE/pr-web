const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withVideos = require('next-videos')

const nextConfig = {
  images: {
    disableStaticImages: true
  },
  future: {
    webpack5: true,
  },
  //   distDir: "./dist/functions/next",
  webpack: (config, { isServer, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config

    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    config.optimization.minimize = false;

    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(mp4|webm|ogg|swf|ogv|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
                publicPath: `./.next/static/videos/`,
                outputPath: `${isServer ? "../" : ""}static/videos/`,
              name: "[name]-[hash].[ext]",
            },
          },
        ],
      }
    );

    // Important: return the modified config
    return config;
  },
};

module.exports = withPlugins(
  [
    withImages({
      webpack(config, options) {
        return config;
      },
    }),
  ],
  nextConfig
);

module.exports = withVideos()