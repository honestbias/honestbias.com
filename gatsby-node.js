/**
 * Use the createPages API (https://www.gatsbyjs.org/docs/node-apis/#createPages) to
 * query Sanity via GraphQL and build out static pages from the CMS.
 */
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const articleComponent = require.resolve(`./src/templates/Article.js`);
    const authorComponent = require.resolve(`./src/templates/Author.js`);
    // Create pages for published Articles and active Authors.
    resolve(
      graphql(
        `
          {
            allSanityArticle(filter: {published: {eq: true}}) {
              edges {
                node {
                  id
                  slug {
                    current
                  }
                  _rawBody
                  author {
                    name
                  }
                  publishedAt
                  title
                  synopsis
                  mainImage {
                    asset {
                      url
                    }
                  }
                }
              }
            }
            allSanityAuthor(filter: {active: {eq: true}}) {
              edges {
                node {
                  name
                  slug {
                    current
                  }
                  image {
                    asset {
                      url
                    }
                  }
                  _rawBio
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each article.
        result.data.allSanityArticle.edges.forEach(({node}) => {
          const path = `/articles/${node.slug.current}`;
          createPage({
            path,
            component: articleComponent,
            context: {
              article: node,
            },
          });
        });

        // Create pages for each author.
        result.data.allSanityAuthor.edges.forEach(({node}) => {
          const path = `/authors/${node.slug.current}`;
          createPage({
            path,
            component: authorComponent,
            context: {
              author: node,
            },
          });
        });
      })
    );
  });
};
