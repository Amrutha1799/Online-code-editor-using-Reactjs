import React, { Component } from "react";
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/css/css';
import '../../App.css'
import Button from "../cssDownloadBtn.js";



export default class CssEditor extends Component {
  constructor() {
    super();
    this.state = {
      css: "",
    };
  }
  render() {
    const { css } = this.state;

    const codeMirrorOptions = {
      theme: "material",
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };
    return ( 
      <pre>
        <code>
      <div className="code-editor css-code">
      <Button css={css}/>

        <div className="editor-header">CSS</div>
        <CodeMirror 
        id='css'
          value={css}
          options={{
            mode: "css",
            ...codeMirrorOptions,
          }}
          onBeforeChange={(editor, data, css) => {
            this.setState({ css }, () => {
            this.props.onCssChange(css);
            });
          
          }}
        />
      </div>
      </code>
      </pre>
    );
  }
}
