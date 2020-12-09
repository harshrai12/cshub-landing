import React from "react"

import Layout from "../components/layout"
import { Card,CardBody } from "reactstrap"
import { graphql } from "gatsby"


import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulCshub(slug: { eq: $slug }) {
      title
      author
      date
      body {
        json
      }
    }
  }
`

const SinglePost = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className="important" />
      },
    },
  }
  return (
    <Layout>
      <h1>{data.contentfulCshub.title}</h1>
      <div className="blog-info">
        <span>{data.contentfulCshub.date}</span> by{" "}
        <span>{data.contentfulCshub.author}</span>
      </div>

      <Card>
        <CardBody className="blog-text">
          <div>
            {documentToReactComponents(data.contentfulCshub.body.json, options)}
          </div>
        </CardBody>
      </Card>
    </Layout>
  )
}

export default SinglePost
