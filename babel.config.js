module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-object-assign",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
};
