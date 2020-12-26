import React from "react";
import { graphql } from "gatsby";

const SinglePost = ({ data: { wpPost } }) => {
  return (
    <>
      <h1>{wpPost.title}</h1>
      <p>{wpPost.date}</p>
      <div dangerouslySetInnerHTML={{ __html: wpPost.content }} />
    </>
  );
};

export default SinglePost;
export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      date
      categories {
        nodes {
          name
          link
        }
      }
    }
  }
`;
