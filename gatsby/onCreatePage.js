module.exports = exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise(resolve => {
    if (page.path.match(/^\/experiments/)) {
      page.layout = 'experiments';
      createPage(page);
    }
    resolve();
  });
};
