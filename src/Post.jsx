import './Post.css'
export default function Post({post}){
const {userId, title, body}=post;
    return(
        <div className="post">
            <h3>UserId: {userId}</h3>
            <p>Title: {title} </p>
            <p><small>Body: {body}</small></p>
        </div>
    )
}