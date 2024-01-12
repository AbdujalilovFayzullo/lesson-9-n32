import { useEffect, useState } from "react"
import './Comments.scss'

const Comments = () => {

    const [comment, setComment] = useState([]);
    const [comments, setComments] = useState([]);

    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
        setComment(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getComment = async (id) => {
        try {
          const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          const data = await res.json()
          setComments(data)
        } catch (error) {
          console.log(error);
        }
      }


    useEffect(() => {
        fetchUsers();
      }, []);


  return (
    <div>
        
        <div className="box">

        <div className="comments">
        {comment.map((comment) => (
            <div key={comment.id} className="commentsss">
            <h2>{comment.id}</h2>
            <h2>{comment.name}</h2>
            <button onClick={() => getComment(comment.id)}>Comments</button>

          </div>
        ))}
        </div>



        <div className="commentss">
        {comments.map((comments) => (
          <div key={comments.id} className="commentss">
            <p>{comments.id}</p>
            <p>{comments.body}</p>
          </div>
        ))}
      </div>
        </div>








    </div>
  )
}

export default Comments