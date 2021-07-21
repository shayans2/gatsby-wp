exports.createSinglePage = ({ allWpPage }, createPage) => {
  allWpPage.nodes.forEach((page) => {
    createPage({
      path: decodeURIComponent(`/${page.slug}`),
      component: require.resolve(`../../src/templates/page/single`),
      context: { page },
    });
  });
};
