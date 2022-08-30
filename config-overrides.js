const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@Core': 'src/Core',
    '@Features': 'src/Features',
    '@Pages': 'src/Pages',
    '@Shared': 'src/Shared'
  })(config);

  return config;
};