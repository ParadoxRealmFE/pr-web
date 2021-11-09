const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withVideos = require('next-videos')
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
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
            loader: 'responsive-loader',
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

module.exports = withPlugins([],
  // [
  //   // withImages({
  //   //   webpack(config, options) {
  //   //     return config;
  //   //   },
  //   // }),
  //   [optimizedImages, {
  //     // these are the default values so you don't have to provide them if they are good enough for your use-case.
  //     // but you can overwrite them here with any valid value you want.
  //     inlineImageLimit: 8192,
  //     imagesFolder: 'public',
  //     imagesName: '[name]-[hash].[ext]',
  //     handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  //     removeOriginalExtension: false,
  //     optimizeImages: true,
  //     optimizeImagesInDev: false,
  //     mozjpeg: {
  //       quality: 80,
  //     },
  //     optipng: {
  //       optimizationLevel: 3,
  //     },
  //     pngquant: false,
  //     gifsicle: {
  //       interlaced: true,
  //       optimizationLevel: 3,
  //     },
  //     svgo: {
  //       // enable/disable svgo plugins here
  //     },
  //     webp: {
  //       preset: 'default',
  //       quality: 75,
  //     },
  //     defaultImageLoader: 'responsive-loader'
  //   }]
  // ],
  nextConfig
);

module.exports = withOptimizedImages();

module.exports = withVideos()

