import React from 'react'
import { useAppDispatch} from '../../hooks'
import { postAdded, type Post } from './postSlice'
import { nanoid } from '@reduxjs/toolkit'

interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLTextAreaElement
}
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields
}

export const AddPostForm = () => {
  const dispatch = useAppDispatch()
  const handleSubmit = (e: React.FormEvent<AddPostFormElements>) =>{
    e.preventDefault()

    const { elements } = e.currentTarget;
    const title = elements.postTitle.value
    const content = elements.postContent.value

    const newPost: Post = {
      title: title,
      content: content,
      id: nanoid()
    }
    dispatch(postAdded(newPost))
    e.currentTarget.reset()
  }
  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" defaultValue="" required />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue=""
          required
        />
        <button>Save Post</button>
      </form>
    </section>
  )
}
