module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/env', '@babel/preset-react'];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime'
  ];

  return {
    presets,
    plugins
  };
}