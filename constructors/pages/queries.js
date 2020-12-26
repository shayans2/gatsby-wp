exports.allPagesQuery = `
{
    allWpPage {
      nodes {
        slug
        title
        content
      }
    }
  }`;
