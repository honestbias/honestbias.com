import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageBody from "../components/PageBody";

const ContactPage = ({data}) => (
  <Layout>
    <SEO
      title="Contact"
      slug={`/contact`}
      description={`Have a question or feedback? Do you want to help provide content or otherwise improve the site? Get in touch with us.`}
    />
    <PageBody body={data.sanityPage._rawBody} />
  </Layout>
);

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    sanityPage(slug: {eq: "/contact"}) {
      _rawBody
    }
  }
`;
