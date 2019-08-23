import React, {Component} from "react";
import PortableText from "@sanity/block-content-to-react";
import serializers from "../sanity/Serializers";
import styled from "styled-components";
import Layout from "../components/Layout";
import {AUTHOR_BASE_URL} from "../constants/general";
import SEO from "../components/SEO";

class Author extends Component {
  render() {
    const author = this.props.pageContext.author;
    const title = `Author Profile: ${author.name}`;
    const h1 = <h1>{title}</h1>;
    const bio = author._rawBio;

    const seoProps = {
      title,
      slug: `${AUTHOR_BASE_URL}${author.slug.current}`,
    };

    return (
      <Layout>
        <SEO {...seoProps} />
        <div className={`author-content ${this.props.className}`}>
          {h1}
          <PortableText blocks={bio} serializers={serializers} />
        </div>
      </Layout>
    );
  }
}

export default styled(Author)`
  text-align: left;
`;
