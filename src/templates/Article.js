import React, {Component} from "react";
import PortableText from "@sanity/block-content-to-react";
import serializers from "../sanity/Serializers";
import styled from "styled-components";
import Layout from "../components/Layout";
import {ARTICLE_BASE_URL} from "../constants/general";
import SEO from "../components/SEO";

class Article extends Component {
  parseDate(date) {
    if (date) {
      const dateObj = new Date(date);
      if (dateObj) {
        return dateObj.toDateString();
      }
    }

    return null;
  }

  render() {
    const article = this.props.pageContext.article;
    const mainImageBaseUrl = article.mainImage
      ? article.mainImage.asset.url
      : null;
    const title = <h1>{article.title}</h1>;
    const body = article._rawBody;
    const author = <p className={`author`}>By {article.author.name}</p>;
    const publishedAt = this.parseDate(article.publishedAt);
    const publishedAtP = publishedAt ? (
      <p className={`date-published`}>{publishedAt}</p>
    ) : null;

    const seoProps = {
      title: article.title,
      slug: `${ARTICLE_BASE_URL}${article.slug.current}`,
      description: article.synopsis,
    };

    if (mainImageBaseUrl) seoProps.image = `${mainImageBaseUrl}?w=1200`;

    return (
      <Layout>
        <SEO {...seoProps} />
        <div className={`article-content ${this.props.className}`}>
          {title}
          {author}
          {publishedAtP}
          <PortableText blocks={body} serializers={serializers} />
        </div>
      </Layout>
    );
  }
}

export default styled(Article)`
  text-align: left;

  .main-image {
    width: 100%;
  }

  .author,
  .date-published {
    font-size: 0.8em;
  }
`;
