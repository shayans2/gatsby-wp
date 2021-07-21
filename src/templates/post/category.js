import React from 'react'
import { graphql } from 'gatsby'
import Pagination from '../../components/Pagination'
import PostItem from '../../components/PostItem'

const Category = ({ data, pageContext }) => {
  return (
    <>
      {data.allWpPost.nodes.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
      <Pagination
        currentPage={pageContext.currentPage}
        pageCount={pageContext.pageCount}
        base={pageContext.base}
      />
    </>
  )
}

export default Category

export const query = graphql`
  query($skip: Int!, $limit: Int!, $categoryId: String!) {
    allWpPost(
      skip: $skip
      limit: $limit
      sort: { fields: [date], order: DESC }
      filter: {
        categories: { nodes: { elemMatch: { id: { eq: $categoryId } } } }
      }
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
`
