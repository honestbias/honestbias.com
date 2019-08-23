import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageBody from "../components/PageBody";

const PrivacyPolicyPage = ({data}) => (
  <Layout>
    <SEO
      title="PrivacyPolicy"
      slug={`/privacy-policy`}
      description={`Read the Privacy Policy for HonestBias.com in order to understand how we collect and use information.`}
    />
    <PageBody body={data.sanityPage._rawBody} />
  </Layout>
);

export default PrivacyPolicyPage;

export const query = graphql`
  query PrivacyPolicyPageQuery {
    sanityPage(slug: {eq: "/privacy-policy"}) {
      _rawBody
    }
  }
`;
