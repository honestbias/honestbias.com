import React, {Component} from "react";
import styled from "styled-components";
import {primaryColor, accentColor} from "../constants/style";

class ContactForm extends Component {
  render() {
    return (
      <form
        className={this.props.className}
        name="Contact Form"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className={`input-container`}>
          <label for="name">Your Name:</label>
          <input id="name" type="name" name="name" />
        </div>
        <div className={`input-container`}>
          <label for="email">Your Email:</label>
          <input id="email" type="email" name="email" />
        </div>
        <div className={`input-container`}>
          <label for="message">Message:</label>
          <textarea name="message" id="message" />
        </div>
        <button>Send</button>
      </form>
    );
  }
}

export default styled(ContactForm)`
  .input-container {
    width: 100%;
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  .input-container input,
  .input-container textarea {
    font-size: 1.1rem;
    padding: 16px;
    border: 2px solid ${primaryColor};
  }

  .input-container textarea {
    resize: vertical;
    min-height: 100px;
    line-height: 1.6;
  }

  .input-container label {
    padding: 16px 0 8px;
    text-align: left;
  }

  button {
    background-color: ${accentColor};
    border: none;
    font-size: 1.2rem;
    padding: 8px 16px;
    margin-top: 16px;
    color: white;
    border-radius: 3px;
  }

  @media (min-width: 680px) {
    margin: 32px 16px;

    .input-container {
      padding: 8px;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 1fr;
    }
    .input-container label {
      text-align: right;
      padding: 18px 12px;
    }
  }
`;
