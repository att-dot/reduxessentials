import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./api/components/NavBar";
import SinglePost from "./features/posts/SinglePost";
import PostsMainPage from "./features/posts/PostsMainPage";
import EditPostForm from "./features/posts/EditPostForm";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<PostsMainPage />}></Route>
          <Route path="posts/:postId" element={<SinglePost />}></Route>
          <Route path="editPost/:postId" element= {<EditPostForm />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
