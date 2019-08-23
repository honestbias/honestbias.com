import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import PageBody from "../../components/PageBody";

const AboutFeaturesPage = ({ data }) => (
  <Layout>
    <SEO title="Website Information"
      slug={`/about/features`}
      description={`Learn more about the plans for development of new feature for HonestBias.com.`}
    />
    <PageBody
      body={data.sanityPage._rawBody}
    />
  </Layout>
)

export default AboutFeaturesPage

export const query = graphql`
  query AboutFeaturesPageQuery {
    sanityPage(slug: {eq: "/about/features"}) {
      _rawBody
    }
  }
`