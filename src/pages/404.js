import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="Page Not found"
      description={`Well, this is embarrasing...there's no page here.`}
    />
    <h1>Four, oh four!</h1>
    <p>
      If we sent you here, please accept our apologies. If someone else sent you
      here, shame on them.
    </p>
  </Layout>
);

export default NotFoundPage;
