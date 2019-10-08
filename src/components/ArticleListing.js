import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import {ARTICLE_BASE_URL} from "../constants/general";
import {primaryColor, accentColor} from "../constants/style";

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
            <Link
              className={`header-link`}
              to={`${ARTICLE_BASE_URL}${article.slug.current}`}
            >
              <h3>
                {article.title} - By {article.author.name}
              </h3>
            </Link>
            <p>
              {article.synopsis}{" "}
              <Link
                className={`article-link`}
                to={`${ARTICLE_BASE_URL}${article.slug.current}`}
              >
                Read article
              </Link>
            </p>
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

  .header-link {
    font-size: 1.2em;
    color: ${primaryColor};
    text-decoration: none;
  }

  .article-link {
    color: ${accentColor};
    text-decoration: underline;
  }
`;
