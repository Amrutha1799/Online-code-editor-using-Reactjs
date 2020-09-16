import React, { Component } from "react";
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/htmlmixed/htmlmixed';
import Button from "../htmlDownloadBtn.js";
import '../../App.css'

export default class HtmlEditor extends Component {
  constructor() {
    super();
    this.state = {
      html: "",
    };
  }

  componentDidUpdate = () => {};

  render() {
    const { html } = this.state;

    const codeMirrorOptions = {
      theme: "material",
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };
    return (
      <>
      <pre>
        <code>

        <script src="https://apis.google.com/js/platform.js" async defer></script>
<div class="g-savetodrive"
   data-src="//example.com/path/to/myfile.pdf"
   data-filename="My Statement.pdf"
   data-sitename="My Company Name">
</div>
      
        <div className="code-editor html-code">
        <Button html={html}/>

          <div className="editor-header">HTML</div>
          <CodeMirror id='html'
            value={html}
            options={{
              mode: "htmlmixed",
              ...codeMirrorOptions,
            }}
            onBeforeChange={(editor, data, html) => {
              this.setState({ html }, ()=> {
              this.props.onHtmlChange(html);
              });
              
            }}
            
          />
        </div>
        </code>
        </pre>
      </>

    );
  }
}

