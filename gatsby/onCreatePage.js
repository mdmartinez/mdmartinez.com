module.exports = exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  return new Promise(resolve => {
    if (page.path.match(/^\/experiments/)) {
      page.layout = 'experiments';
      createPage(page);
    }
    resolve();
  });
};
