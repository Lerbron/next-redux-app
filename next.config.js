const withSass = require('@zeit/next-sass');
module.exports = withSass({distDir: 'dist'});
// module.exports = {
//   style: withSass(),
//   dist
// }