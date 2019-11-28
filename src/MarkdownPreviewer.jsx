import React, { Component } from 'react';
import marked from 'marked';

marked.setOptions({ //Options for marked.js.
	sanitize: true, //Sanitizes incoming text.
	//gfm: true, //Required for breaks.
	breaks: true, //User using carriage return is interpretted as a new line.
	//renderer: renderer //Clicking link opens a new tab.
})

//This section is used for clicking a link opens a new tab.
// const renderer = new marked.Renderer();
// renderer.link = function (href, title, text) {
//   return `<a target="_blank" href="${href}">${text}` + '</a>';
// }

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    let outputText = marked(event.target.value);

		this.setState({
      		text: outputText
    	});
  }


  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <textarea id="editor" onChange={this.handleChange} >
        </textarea>
        <div id="preview" >
            {this.state.text}
        </div>
      </div>
    )
  }
} 

export default MarkdownPreviewer;