import React from 'react'
import { Link } from 'gatsby'
import { POSTS_SLUG } from '../../config'

const PostItem = ({ data: { slug, title, excerpt } }) => {
  return (
    <div>
      <Link to={`/${POSTS_SLUG}/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  )
}

export default PostItem
