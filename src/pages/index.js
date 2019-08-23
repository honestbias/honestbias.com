import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ArticleListing from "../components/ArticleListing";
import PageBody from "../components/PageBody";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" slug={`/`} />
    <PageBody body={data.sanityPage._rawBody} />
    <ArticleListing articles={data.allSanityArticle.nodes} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    allSanityArticle(filter: {published: {eq: true}}) {
      nodes {
        title
        publishedAt
        synopsis
        author {
          name
        }
        slug {
          current
        }
        mainImage {
          asset {
            url
          }
        }
      }
    }
    sanityPage(slug: {eq: "/"}) {
      _rawBody
    }
  }
`;
