import React, {useState, useEffect} from 'react'
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'

function App() {

const[html, setHtml] = useLocalStorage('html', '')
const[css, setCss] = useLocalStorage('css', '')
const[js, setJs] = useLocalStorage('js', '')
const[srcDoc, setSrcDoc] = useState('')

useEffect(() => {
  const timeout = setTimeout(() => {
    setSrcDoc(
      `
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `
    )
  }, 550)
  return () => clearTimeout(timeout)
}, [html, css, js])

  return (
    <>
    <div className = "pane top-pane">
      <Editor
      value = {html}
      onChange = {setHtml}
      Name = "HTML"
      language = "xml"
      />
      <Editor
      value = {css}
      onChange = {setCss}
      Name = "CSS"
      language = "css"
      />
      <Editor
      value = {js}
      onChange = {setJs}
      Name = "JS"
      language = "javascript"
      />
    </div>
    <div className = "pane">
      <iframe 
      srcDoc = {srcDoc}
      title= "output"
      sandbox = "allow-scripts"
      height = "100%"
      width = "100%"
      frameBorder = "0"
      />
    </div>
    </>
    );
}

export default App;
