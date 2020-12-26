import React from "react";
import { graphql } from "gatsby";
import Pagination from "../../components/Pagination";
import PostItem from "../../components/PostItem";

const Tag = ({ data, pageContext }) => {
  return (
    <>
      {data.allWpPost.nodes.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
      <Pagination
        currentPage={pageContext.currentPage}
        pageCount={pageContext.pageCount}
        base="/tag"
      />
    </>
  );
};

export default Tag;

export const query = graphql`
  query($skip: Int!, $limit: Int!, $tagId: String!) {
    allWpPost(
      skip: $skip
      limit: $limit
      sort: { fields: [date], order: DESC }
      filter: { tags: { nodes: { elemMatch: { id: { eq: $tagId } } } } }
    ) {
      nodes {
        id
        date(formatString: "MMMM Do, YYYY")
        slug
        title
        excerpt
      }
    }
  }
`;
