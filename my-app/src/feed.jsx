import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3001/feed")

        setPosts(response.data)
      } catch (error) {
        console.error("Erro ao consumir a Api", error)
      }
    }
    
    fetch();
  }, []) 
  return (
    <div>
      <h2>Feed</h2>
      <ul>
        {posts.map(item => (
          <li key={item.id}>
            <p>ID: {item.id}</p>
            <p>Imagem: {item.imagem}</p>
            <p>Post: {item.post}</p>
            <p>Data de Postagem: {item.data_postagem}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
