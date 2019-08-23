import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageBody from "../components/PageBody";

const AboutPage = ({data}) => (
  <Layout>
    <SEO
      title="About"
      slug={`/about`}
      description={`Learn more about why HonestBias was created and what you can do to make a positive impact on facilitating civilized debate.`}
    />
    <PageBody body={data.sanityPage._rawBody} />
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query AboutPageQuery {
    sanityPage(slug: {eq: "/about"}) {
      _rawBody
    }
  }
`;
