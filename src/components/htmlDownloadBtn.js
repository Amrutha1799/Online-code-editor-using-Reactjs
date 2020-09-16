import React, { Component } from "react";

class Button extends React.Component {
    DownloadTxtFile = () => {
        console.log(this.props.value)
        const element = document.createElement("a");
        const file = new Blob([this.props.html], {
            type: "text/plain",
        });
        element.href = URL.createObjectURL(file);
        element.download = "htmlfile.txt";
        document.body.appendChild(element);
        element.click();
        
    }

    render() {
        return (
            <div>
                <button class="btn" onClick={this.DownloadTxtFile}>Download</button>
            </div>
        );
    }
}

export default Button;
