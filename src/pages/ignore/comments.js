import React from "react";
import Layout from "../../components/Layout";
import {Link} from "gatsby";

const CommentsIgnorePage = () => (
  <Layout>
    <div>
      Let's put some comments below! <a href={`#commento`}>comments</a>
    </div>
    <div id="commento" />
    <script defer src="https://cdn.commento.io/js/commento.js" />
    <script src="https://cdn.commento.io/js/count.js" />
  </Layout>
);

export default CommentsIgnorePage;
