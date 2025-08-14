/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    assetExts: ['glb', 'gltf', 'mtl', 'obj', 'png', 'jpg', 'jpeg', 'bmp', 'gif', 'ico', 'psd', 'svg', 'webp', 'tga', 'ttf', 'otf'],
  },
};

module.exports = config;
