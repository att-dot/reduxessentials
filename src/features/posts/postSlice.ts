import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id: string;
  title: string;
  content: string;
}

const initialState: Post[] = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postAdded(state, action: PayloadAction<Post>) {
      state.push(action.payload);
    },
    postUpdated(state, action: PayloadAction<Post>){
      const existingPost = state.find(post =>post.id === action.payload.id)
      const {title, content} = action.payload
      if(existingPost){
        existingPost.title = title;
        existingPost.content = content;
      }
    }
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;
export default postsSlice.reducer;
