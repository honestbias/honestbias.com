import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageBody from "../components/PageBody";

const ContributePage = ({data}) => (
  <Layout>
    <SEO
      title="Contribute"
      slug={`/contribute`}
      description={`Can you make a difference? Whether it's providing content, improving the site or helping otherwise, learn how you can contribute.`}
    />
    <PageBody body={data.sanityPage._rawBody} />
  </Layout>
);

export default ContributePage;

export const query = graphql`
  query ContributePageQuery {
    sanityPage(slug: {eq: "/contribute"}) {
      _rawBody
    }
  }
`;
