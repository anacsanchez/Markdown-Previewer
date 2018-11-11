import React, {Component} from 'react';
import { Editor, Preview } from './index';
import marked from 'marked';
marked.setOptions({
  breaks: true
})

class Markdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: defaultInput
    }
  }

  handleChange = (evt) => {
    this.setState({
      text: evt.target.value
    })
  }

  render() {
    return (
      <div id="markdown">
        <div className="container left">
        <div className="container-title right-border">Editor</div>
          <Editor default={this.state.text} updateText={this.handleChange} />
        </div>
        <div className="container right">
          <div className="container-title left-border">Preview</div>
          <Preview preview={marked(this.state.text)}/>
        </div>
      </div>
    )
  }
}

export default Markdown;

const defaultInput = `# h1

## h2
\`inline code\`

[Link](www.google.com)
\`\`\`
let codeblock
\`\`\`
* List1
* List2

> Blockquote

Image: ![image](GitHub-Mark-32px.png)

**Bold**
`;
