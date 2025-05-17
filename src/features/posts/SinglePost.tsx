import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";

export default function SinglePost(){
    const {postId} = useParams()

    const post = useAppSelector(state => state.posts.find((Cpost) => Cpost.id === postId))

    if(!post){
        return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <Link to={`/editPost/${post.id}`} className="button"> Edit</Link>
            </article>
        </section>
    )
}