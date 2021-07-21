exports.allPostsQuery = `
{
  allWpPost {
    nodes {
      id
      slug
    }
    totalCount
  }

  allWpCategory {
    nodes {
      id
      slug
      count
    }
  }

  allWpTag {
    nodes {
      id
      slug
      count
    }
  }
}`;
