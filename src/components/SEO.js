/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {useStaticQuery, graphql} from "gatsby";

function SEO({description, lang, meta, title, slug, image}) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
            image
            url
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const seoImage = image || site.siteMetadata.image;
  const canonicalUrlMeta =
    slug && site.siteMetadata.url
      ? {
          property: `og:url`,
          content: `${site.siteMetadata.url}${slug}`,
        }
      : {};
  const fullTitle =
    title && site.siteMetadata.title
      ? `${title} | ${site.siteMetadata.title}`
      : title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          property: `og:title`,
          content: fullTitle,
        },
        {
          name: `twitter:title`,
          content: fullTitle,
        },
        {
          name: `og:site_name`,
          content: `HonestBias`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: seoImage,
        },
        {
          name: `og:image`,
          content: seoImage,
        },
        {
          name: `og:image:alt`,
          content: `Icon for HonestBias.com`,
        },
        {
          name: `twitter:image`,
          content: seoImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitterUsername,
        },
        canonicalUrlMeta,
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
