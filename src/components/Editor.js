import React, {useState} from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import  {Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props)
{
    const{
        Name,
        language,
        onChange,
        value
    } = props

function handleChange(editor, data, value) {
    onChange(value)
}

const [open,setOpen] = useState(true);

    return(
        <div className =  {`editor-container ${open ? '' : 'collapsed'}`}>
            <div className = "editor-title">
            {Name}
            <button 
            onClick={() => setOpen(prevOpen => !prevOpen)}>{open ? 'Collapse' : 'Open'}</button>
            </div>
            <ControlledEditor 
            onBeforeChange = {handleChange}
            value = {value}
            className = "code-mirror-wrapper"
            options = {{
                linewrapping:true,
                lint:true,
                lineNumbers:true,
                mode:language,
                theme: 'material'
            }}
            />
        </div>
    )
}