import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
const modules ={
    toolbar: [
        
['bold', 'italic', 'underline', 'strike'],        // toggled buttons
['blockquote', 'code-block'],

[{ 'header': 1 }, { 'header': 2 }],               // custom button values
[{ 'list': 'ordered'}, { 'list': 'bullet' }],
[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
[{ 'direction': 'rtl' }],                         // text direction

[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
[{ 'font': [] }],
[{ 'align': [] }],
['link'],
['image'],

['clean']                                         // remove formatting button
],
};
const formats = {
    formats :[
    'font-size',
    'font-color',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'list',
    'link',
    'image',
    'background',
    'blockquote',
    'code-block',
    'header',
    'script',
    'indent',
    
  ],
};
export default function CreatePost(){
    const[title,setTitle] = useState('');
    const[summary,setSummary] = useState('');
    const[content,setContent] = useState('');
    
    return(
        <form>
           <input type="title" placeholder={'Title'} value={title} onChange={ev => setTitle(ev.target.value)}/>
           <input type="summary" placeholder={'Summary'} value={summary} onChange={ev=> setSummary(ev.target.value)}/>
           <input type="file"/>
           <ReactQuill value={content} modules={modules} formats={formats}/>
           <button style={{marginTop:'5px'}}> Create post</button>
           </form>
    );
}