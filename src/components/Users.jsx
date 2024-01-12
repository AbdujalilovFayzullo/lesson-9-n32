import React, { useEffect, useState } from 'react';
import './Users.scss'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  // const [comment, setComment] = useState([]);
  // const [albums, setAlbums] = useState([])



  const fetchUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPosts = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    fetchUsers();
  }, []);

  // const fetchAlbums = async () => {
  //   try {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  //     const data = await res.json();
  //     setAlbums(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getUserAlbums = async (id) => {
  //   try {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  //     );
  //     const data = await res.json();
  //     setPosts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //     fetchAlbums()
  // }, []);


  // const fetchComment = async () => {
  //   try {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  //     const data = await res.json()
  //     console.log(data);
  //     setComment(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const getComment = async (id) => {
  //   try {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`)
  //     const data = await res.json()
  //     setComment(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchComment()
  // }, [])

  return (
    <>
      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user">
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
            <h2>{user.username}</h2>
            <button onClick={() => getUserPosts(user.id)}>Posts</button>
            {/* <button onClick={() => getUserAlbums(user.id)}>Albums</button> */}
            {/* <button onClick={() => getComment(comment.id)}>Comments</button> */}


          </div>
        ))}
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.userId}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>


      {/* <div className="posts">
        {albums.map((albums) => (
          <div key={albums.id} className="post">
            <h2>{albums.id}</h2>
            <h2>{albums.title}</h2>
          </div>
        ))}
      </div> */}

      

      {/* <div className="posts">
        {comment.map((comment) => (
          <div key={comment.id} className="post">
            <h2>{comment.id}</h2>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
          </div>
        ))}
      </div> */}
      










    </>
  );
};

export default Users;
