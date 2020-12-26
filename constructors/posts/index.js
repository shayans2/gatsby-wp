const { PAGE_SIZE, POSTS_SLUG } = require("../../config");

exports.createSinglePost = ({ allWpPost }, createPage) => {
  allWpPost.nodes.forEach((post) => {
    createPage({
      path: decodeURIComponent(`/${POSTS_SLUG}/${post.slug}`),
      component: require.resolve(`../../src/templates/post/single`),
      context: { id: post.id },
    });
  });
};

exports.createCategory = ({ allWpCategory }, createPage) => {
  return allWpCategory.nodes.map((category) => {
    const pageCount = Math.ceil(
      category.count ? category.count / PAGE_SIZE : 0
    );
    return Array.from({ length: pageCount }).map((_, index) =>
      createPage({
        path: decodeURIComponent(`/category/${category.slug}/${index + 1}`),
        component: require.resolve(`../../src/templates/post/category`),
        context: {
          skip: index * PAGE_SIZE,
          limit: PAGE_SIZE,
          pageCount,
          currentPage: index + 1,
          categoryId: category.id,
        },
      })
    );
  });
};

exports.createTag = ({ allWpTag }, createPage) => {
  return allWpTag.nodes.map((tag) => {
    const pageCount = Math.ceil(tag.count ? tag.count / PAGE_SIZE : 0);
    return Array.from({ length: pageCount }).map((_, index) =>
      createPage({
        path: decodeURIComponent(`/tag/${tag.slug}/${index + 1}`),
        component: require.resolve(`../../src/templates/post/tag`),
        context: {
          skip: index * PAGE_SIZE,
          limit: PAGE_SIZE,
          pageCount,
          currentPage: index + 1,
          tagId: tag.id,
        },
      })
    );
  });
};

exports.createPagination = ({ allWpPost }, createPage) => {
  const pageCount = Math.ceil(allWpPost.totalCount / PAGE_SIZE);
  return Array.from({ length: pageCount }).map((_, index) =>
    createPage({
      path: `/${POSTS_SLUG}/page/${index + 1}`,
      component: require.resolve(`../../src/templates/post/list`),
      context: {
        skip: index * PAGE_SIZE,
        limit: PAGE_SIZE,
        pageCount,
        currentPage: index + 1,
      },
    })
  );
};
