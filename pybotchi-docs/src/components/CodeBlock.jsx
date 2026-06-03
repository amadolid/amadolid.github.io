import { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'

SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('json', json)

const customStyle = {
  background: '#1e293b',
  border: '1px solid #334155',
  borderRadius: '0.75rem',
  padding: '1.5rem',
  margin: '0',
  fontSize: '0.9rem',
  lineHeight: '1.6',
  overflowX: 'auto',
}

export default function CodeBlock({ language = 'python', children }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).trim()).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="code-block-wrapper">
      <button
        className={`copy-btn ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
        aria-label="Copy code"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <SyntaxHighlighter language={language} style={vscDarkPlus} customStyle={customStyle}>
        {String(children).trim()}
      </SyntaxHighlighter>
    </div>
  )
}
