
import { useState, useEffect } from 'react'

import BulletList from '@tiptap/extension-bullet-list'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import SideBarIcon from './SideBarIcon'
import { FaBold } from 'react-icons/fa'

import { MdFormatListBulleted } from 'react-icons/md'

import { MdOutlineFormatItalic } from "react-icons/md";

import { GrBlockQuote } from 'react-icons/gr'


const UpdateTextEditor = ( { onEditorContentChange, card } ) => {
 // const [editorContent, setEditorContent] = useState('');

  const editor = useEditor({
    extensions: [
        Document, Paragraph, Text, BulletList, ListItem, Bold, Italic, Blockquote
    
    ],
    editorProps: {
        attributes: {
          class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none text-white text-xs',
        },
      },
    content: card.journ,
    onUpdate: ({ editor }) => {
      const JournContent = editor.getHTML()
      const journObjectToUpdate = {
        title : "",
        journ : JournContent, 

      }
      //setEditorContent(JournContent)
      console.log(journObjectToUpdate);
      onEditorContentChange(journObjectToUpdate)
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
    {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
    <div className='flex justify-center '>
    
      <SideBarIcon 
        icon={<FaBold size="12" />} 
        onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
        className={editor.isActive('bold') ? 'active bubbleEditorIcon' : ' bubbleEditorIcon'} 
        classNameText={'sidebar-tooltip'} text="Delete Journ"
        />

        <SideBarIcon 
        icon={<MdOutlineFormatItalic size="12" />} 
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'active bubbleEditorIcon' : ' bubbleEditorIcon'} 
        classNameText={'sidebar-tooltip'} text="Delete Journ"
        />
        
      <SideBarIcon 
        icon={<GrBlockQuote size="12" />}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBlockquote()
            .run()
        }
        className={editor.isActive('blockquote') ? 'active bubbleEditorIcon' : 'bubbleEditorIcon'}
        classNameText={'sidebar-tooltip'} text="blockquote"
      >
        
      </SideBarIcon>

        <SideBarIcon  
          icon={<MdFormatListBulleted size="12" />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'active bubbleEditorIcon' : 'bubbleEditorIcon'} />

    </div>
    </BubbleMenu>}
    <div>

      <EditorContent  editor={editor} />
    </div>
    </>
  )
}

export default UpdateTextEditor