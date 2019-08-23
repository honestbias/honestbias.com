import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageBody from "../components/PageBody";

const TermsOfUsePage = ({data}) => (
  <Layout>
    <SEO
      title="TermsOfUse"
      slug={`/terms-of-use`}
      description={`Read the terms and conditions regarding how you may and may not use HonestBias.com.`}
    />
    <PageBody body={data.sanityPage._rawBody} />
  </Layout>
);

export default TermsOfUsePage;

export const query = graphql`
  query TermsOfUsePageQuery {
    sanityPage(slug: {eq: "/terms-of-use"}) {
      _rawBody
    }
  }
`;
