import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import React from "react";
import { postUpdated } from "./postSlice";


interface EditPostFormFields extends HTMLFormControlsCollection{
    postTitle: HTMLInputElement;
    postContent: HTMLTextAreaElement;
}

interface EditPostFormElements extends HTMLFormElement{
    readonly elements: EditPostFormFields
}
export default function EditPostForm() {
  const { postId } = useParams();

  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onSavePostClicked = function(e: React.FormEvent<EditPostFormElements>){
     e.preventDefault()
    
    const { elements } = e.currentTarget
    const title = elements.postTitle.value
    const content = elements.postContent.value
    
    if(content && title){
        dispatch(postUpdated({title, content, id: post.id}))
        navigate(`/posts/${postId}`)
    }
  }
  return (
    <section>
      <h2>Edit Post</h2>
      <form onSubmit={onSavePostClicked}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          defaultValue={post.title}
          required
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue={post.content}
          required
        />

        <button>Save Post</button>
      </form>
    </section>
  );
}
