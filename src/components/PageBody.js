import React, {PureComponent} from "react";
import PortableText from "@sanity/block-content-to-react";
import serializers from "../sanity/Serializers";

class PageBody extends PureComponent {
  render() {
    return (
      <PortableText
        className={`page-body`}
        blocks={this.props.body}
        serializers={serializers}
      />
    );
  }
}

export default PageBody;
