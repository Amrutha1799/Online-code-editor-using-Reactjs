import React, { Component } from "react";
import "../App.css";
import HtmlEditor from "./codeEditor.js/htmlEditor";
import CssEditor from "./codeEditor.js/cssEditor";



export default class output extends Component {
  constructor() {
    super();
    this.state = {
      html: "",
      css: "",
    };
  }


  onHtmlChange = (e) => {
    this.setState({ html: e });
  };
  onCssChange = (e) => {
    this.setState({ css: e });
  };
  

  componentDidUpdate() {
    this.runCode();
  }


  runCode = () => {
    const { html, css } = this.state;
    const iframe = this.refs.iframe;
    const document = iframe.contentDocument;
    const documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
              ${css}
            </style>
          </head>
          <body>
            ${html}
          </body>
          </html>
        `;

    document.open();
    document.write(documentContents);
    document.close();
  };


  

  render() {
    const { html, css } = this.state;
    return (
      <>
        <HtmlEditor onHtmlChange={this.onHtmlChange} />
        <CssEditor onCssChange={this.onCssChange} />
        <section className="result">OUTPUT
          <iframe title="result" className="iframe" ref="iframe" />

        </section>
      </>
    );
  }
}