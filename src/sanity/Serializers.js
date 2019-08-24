import React from "react";
import {Link} from "gatsby";
import {OutboundLink} from "gatsby-plugin-google-analytics";

const serializers = {
  marks: {
    internalLink: ({mark, children}) => {
      const {to} = mark;
      return <Link to={to}>{children}</Link>;
    },
    link: ({mark, children}) => {
      const {href, newWindow, track} = mark;
      const title = href; // For now, set the title for external links as the url so it's visible on hover.
      const rel = newWindow ? `noopener noreferrer` : null;
      const target = newWindow ? `_blank` : null;

      if (track === true) {
        return (
          <OutboundLink href={href} rel={rel} target={target} title={title}>
            {children}
          </OutboundLink>
        );
      }

      return (
        <a href={href} rel={rel} target={target} title={title}>
          {children}
        </a>
      );
    },
  },
};

export default serializers;
