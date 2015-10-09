var specRequire = require.context(
  './specs',
  true,
  /\.(js|jsx)$/);

for (var i = 0; i < specRequire.keys().length; i++) {
  specRequire(specRequire.keys()[i]);
}
