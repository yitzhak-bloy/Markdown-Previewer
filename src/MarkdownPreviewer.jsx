import React, { Component } from 'react';
import initialText from './initialtext'
import marked from 'marked';
import './MarkdownPreviewer.css';

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
      inputString: initialText,
    }
  }

  handleChange = (event) => {
		this.setState({
      inputString: event.target.value,
    	});
  }


  render() {
    const {inputString } = this.state;
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div className='twoboxes'>
          <textarea id="editor" value={inputString} onChange={this.handleChange} />
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(inputString, { renderer })}} />
        </div>
      </div>
    )
  }
} 

export default MarkdownPreviewer;