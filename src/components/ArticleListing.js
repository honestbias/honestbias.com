import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import {ARTICLE_BASE_URL} from "../constants/general";

class ArticleListing extends Component {
  render() {
    const articles =
      this.props.articles && this.props.articles.length
        ? this.props.articles
        : [];
    const articlesList = articles.length ? (
      articles.map((article, index) => {
        const hr = articles.length - index > 1 ? <hr /> : null;
        return (
          <div className={`article-listing`}>
            {hr}
            <Link to={`${ARTICLE_BASE_URL}${article.slug.current}`}>
              <h3>
                {article.title} - By {article.author.name}
              </h3>
              <p>{article.synopsis}</p>
            </Link>
          </div>
        );
      })
    ) : (
      <p>No articles found (yet).</p>
    );
    return (
      <div className={`article-list ${this.props.className}`}>
        <h2>Articles</h2>
        {articlesList}
      </div>
    );
  }
}

export default styled(ArticleListing)`
  text-align: left;

  .article-listing {
    a {
      text-decoration: none;
    }
  }
`;
