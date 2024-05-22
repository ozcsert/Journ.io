
import { useState, useEffect } from 'react'

import BulletList from '@tiptap/extension-bullet-list'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import SideBarIcon from './Card/SideBarIcon'
import { FaBold } from 'react-icons/fa'

import { MdFormatListBulleted } from 'react-icons/md'

import { MdOutlineFormatItalic } from "react-icons/md";

import { GrBlockQuote } from 'react-icons/gr'

const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
   
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

const NewTextEditor = ( { onEditorContentChange } ) => {
 // const [editorContent, setEditorContent] = useState('');

  const editor = useEditor({
    extensions: [
        Document, Paragraph, Text, BulletList, ListItem, Bold, Italic, Blockquote
    
    ],
    editorProps: {
        attributes: {
          class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-2 focus:outline-none text-white',
        },
      },
    content: `
      <blockquote>
        Nothing is impossible, the word itself says “I’m possible!”
      </blockquote>
      <p>Audrey Hepburn</p>
    `,
    onUpdate: ({ editor }) => {
      const JournContent = editor.getHTML()
      const journObjectToAdd = {
        title : "",
        journ : JournContent, 

      }
      //setEditorContent(JournContent)
      console.log(journObjectToAdd);
      onEditorContentChange(journObjectToAdd)
    },
  })

//  useEffect(() => {
//    if (!editor) {
//      return undefined
//    }
//
//    editor.setEditable(editable)
//  }, [editor, editable])
//
//
//  }

  if (!editor) {
    return null
  }

  return (
    <>
    <div className='flex justify-center mt-2 '>
      
      <SideBarIcon 
        icon={<FaBold size="15" />} 
        onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
        className={editor.isActive('bold') ? 'active editorIcon' : ' editorIcon'} 
        classNameText={'sidebar-tooltip'} text="Delete Journ"
        />

        <SideBarIcon 
        icon={<MdOutlineFormatItalic size="15" />} 
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'active editorIcon' : ' editorIcon'} 
        classNameText={'sidebar-tooltip'} text="Delete Journ"
        />
        
      <SideBarIcon 
        icon={<GrBlockQuote size="15" />}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBlockquote()
            .run()
        }
        className={editor.isActive('blockquote') ? 'active editorIcon' : 'editorIcon'}
        classNameText={'sidebar-tooltip'} text="blockquote"
      >
        
      </SideBarIcon>

        <SideBarIcon  
          icon={<MdFormatListBulleted size="15" />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'active editorIcon' : 'editorIcon'} />

    </div>
    <div>

      <EditorContent  editor={editor} />
    </div>
    </>
  )
}

export default NewTextEditor