import React, {PureComponent} from "react";
import styled from "styled-components";
import {IoMdMenu, IoMdClose} from "react-icons/io";

class MobileNavMenuToggle extends PureComponent {
  render() {
    return this.props.isMobileNavOpen ? (
      <IoMdClose
        className={this.props.className}
        onClick={this.props.onClick}
      />
    ) : (
      <IoMdMenu
        className={`hamburger ${this.props.className}`}
        onClick={this.props.onClick}
      />
    );
  }
}

export default styled(MobileNavMenuToggle)`
  position: absolute;
  padding: 10px;
  right: 5px;
  width: 2.5rem;
  height: 2.5rem;

  &:hover,
  &:focus {
    color: inherit;
    opacity: 0.6;
  }

  &:hover {
    cursor: pointer;
  }

  &.hamburger {
    top: 12px;
  }
`;
