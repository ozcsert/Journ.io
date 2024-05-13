import { EditorProvider, useCurrentEditor } from '@tiptap/react'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { styled } from '@mui/material/styles';
import StarterKit from '@tiptap/starter-kit'

import Button from '@mui/material/Button';
//import ButtonGroup from '@mui/material/ButtonGroup';


const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    color: '#FFFFFF',
    fontSize: 13,
    padding: '6px 12px',
    
    lineHeight: 1.5,
    backgroundColor: 'none',
    borderColor: '#FFFFFF',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color: '#3d2753',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'none',
      borderColor: '#005cbf',
      
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });




const MenuBar = () => {
    const { editor } = useCurrentEditor()
  
    if (!editor) {
      return null
    }
  
    return (
      <>

        <CustomButton  onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={ editor.isActive('bold') ? 'is-active' : ''} >Bold
        </CustomButton>
        
        <CustomButton onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}>Italic</CustomButton>
        

        
        <CustomButton onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''} >Paragraph
        </CustomButton>

    
        
        <CustomButton onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''} >Code
        </CustomButton>
        
        <CustomButton  onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''} >quote</CustomButton>
        
        <CustomButton  onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''} >BulletList</CustomButton>

      
      </>
    )
  }
  


const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: true, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
  ]


  const content= `
        <p>
          The focus extension adds a class to the focused node only. That enables you to add a custom styling to just that node. By default, it’ll add <code>.has-focus</code>, even to nested nodes.
        </p>
        <ul>
          <li>Nested elements (like this list item) will be focused with the default setting of <code>mode: all</code>.</li>
          <li>Otherwise the whole list will get the focus class, even when just a single list item is selected.</li>
        </ul>
      `


  

  const TextEditor = () => {
    return (
      <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}>

       
      </EditorProvider>
    )
  }
  
  export default TextEditor