import React from "react";
import Layout from "../../components/Layout";

const CommentsIgnorePage = () => (
  <Layout>
    <div>
      Let's put some comments below! <a href={`#commento`}>comments</a>
    </div>
    <div id="commento" data-auto-init="true" />
    <script defer src="https://cdn.commento.io/js/commento.js" />
    <script src="https://cdn.commento.io/js/count.js" />
  </Layout>
);

export default CommentsIgnorePage;
