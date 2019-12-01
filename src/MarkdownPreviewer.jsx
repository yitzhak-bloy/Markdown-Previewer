import React, { Component } from 'react';
import initialText from './initialtext'
import marked from 'marked';

marked.setOptions({ 
	breaks: true
})

const renderer = new marked.Renderer();
renderer.link = function(href, text) {
  return `<a target="_blank" href=${href}>${text}</a>`;
};

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initialText
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
        <textarea id="editor" value={this.state.text} onChange={this.handleChange} >
        </textarea>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.text, { renderer })}} />
      </div>
    )
  }
} 

export default MarkdownPreviewer;