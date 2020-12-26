const { allPostsQuery } = require("./constructors/posts/queries");
const { allPagesQuery } = require("./constructors/pages/queries");
const {
  createSinglePost,
  createPagination,
  createCategory,
  createTag,
} = require("./constructors/posts");
const { createSinglePage } = require("./constructors/pages");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // Create Posts, Pagination, Categories and Tags
  const posts = await graphql(allPostsQuery);
  if (posts.errors) console.error(posts.errors);

  createSinglePost(posts.data, createPage);
  createPagination(posts.data, createPage);
  createCategory(posts.data, createPage);
  createTag(posts.data, createPage);

  // Create Pages
  const pages = await graphql(allPagesQuery);
  if (pages.errors) console.error(pages.error);

  createSinglePage(pages.data, createPage);
};
