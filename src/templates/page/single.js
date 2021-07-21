import React from 'react'

const Page = ({ pageContext: { page } }) => {
  return (
    <>
      <h1> {page.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  )
}

export default Page
