/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql} from "gatsby";
import styled from "styled-components";
import "./base.css";

import {primaryColor, secondaryColor} from "../constants/style";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, className}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div className={`main-content ${className}`}>
        <Header />
        <main>
          {children}
          <div className={`footer-filler`} />
        </main>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default styled(Layout)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #333333;

  font-family: "Helvetica Neue", sans-serif;

  text-align: center;

  #commento {
    text-align: left;
  }

  a {
    color: inherit;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: ${secondaryColor};
    }
  }

  header {
    background: ${primaryColor};
    color: white;
    height: 5rem;
    font-size: 1rem;
  }

  main {
    margin: 3rem auto 0;
    padding: 0 24px;
    max-width: 800px;
  }

  .page-body {
    text-align: left;
  }

  footer,
  div.footer-filler {
    min-height: 5rem;
    font-size: 1rem;
    margin-top: 3rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.5;
  }

  p {
    font-size: 1.2em;
    line-height: 1.7;
  }

  footer {
    background: ${primaryColor};
    color: white;
    position: absolute;
    bottom: 0;
    width: 100%;

    .social-media {
      margin: 0.5rem 0;

      .icon {
        margin: 0 0.5rem;

        &:hover,
        &:focus {
          color: inherit;
          opacity: 0.6;
        }

        svg {
          height: 2rem;
          width: 2rem;
        }
      }
    }
  }
`;
