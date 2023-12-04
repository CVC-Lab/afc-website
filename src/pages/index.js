import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../components/style.css"

export default function IndexPage({ data }) {
  const sortedEdges = data.allMarkdownRemark.edges.sort((a, b) => {
    return a.node.frontmatter.id - b.node.frontmatter.id;
  });
  console.log('sorted', sortedEdges)

  return (
    <Layout>
      <h1>Intelligent Machine Learning for Real Time Processing of Hyperspectral Video Streams</h1>
      <p>This project showcases various aspects of processing hyperspectral video streams in real-time using advanced machine learning techniques.</p>
      <p>Explore our documentation:</p>
      <ul className="documentation-links">
        {sortedEdges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            id
          }
        }
      }
    }
  }
`
