import React, {Component} from "react";
import styled from "styled-components";
import {IoIosMail, IoLogoTwitter, IoLogoGithub} from "react-icons/io";
import {OutboundLink} from "gatsby-plugin-google-analytics";
import {Link} from "gatsby";

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.className}>
        <div className={`social-media`}>
          <OutboundLink
            className={`icon`}
            title={`HonestBias Twitter Profile`}
            href="https://twitter.com/realhonestbias"
            target={`_blank`}
            rel={`noopener noreferrer`}
          >
            <IoLogoTwitter />
          </OutboundLink>
          <OutboundLink
            className={`icon`}
            title={`HonestBias Email Address`}
            href="mailto:honestbias@mail.com"
            target={`_blank`}
            rel={`noopener noreferrer`}
          >
            <IoIosMail />
          </OutboundLink>
          <OutboundLink
            className={`icon`}
            title={`HonestBias GitHub Repository`}
            href="https://github.com/honestbias/honestbias.com"
            target={`_blank`}
            rel={`noopener noreferrer`}
          >
            <IoLogoGithub />
          </OutboundLink>
        </div>
        <div className={`copyright terms privacy`}>
          <span>© {new Date().getFullYear()} HonestBias.com</span>
          <span className={`terms`}>
            <Link to={`/terms-of-use`}>Terms</Link>
          </span>
          <span className={`privacy`}>
            <Link to={`/privacy-policy`}>Privacy</Link>
          </span>
        </div>
      </footer>
    );
  }
}

export default styled(Footer)`
  span.terms,
  span.privacy {
    margin-left: 2em;
  }
`;
