import React from "react";
import Layout from "../../components/Layout";
import Helmet from "react-helmet";

const CommentsIgnorePage = () => (
  <Layout>
    <Helmet>
      <script defer src="https://cdn.commento.io/js/commento.js" />
      <script src="https://cdn.commento.io/js/count.js" />
    </Helmet>
    <div>
      Let's put some comments below! <a href={`#commento`}>comments</a>
    </div>
    <div id="commento" data-auto-init="true" />
  </Layout>
);

export default CommentsIgnorePage;
