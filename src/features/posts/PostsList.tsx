import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks"
import { Post } from "./postSlice"


export default function PostsList({}){
    const posts = useAppSelector((state) => state.posts)
    console.log(posts)
    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {posts.map((post: Post) =>{
                return (
                    <article className="post-excerpt" key={post.id}>
                        <h1><Link to={`posts/${post.id}`}>{post.title}</Link></h1>
                        <p className="post-content" >{post.content.substring(0, 100)}</p>
                    </article>
                )
            })}
        </section>
    ) 
}