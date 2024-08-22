import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:5000/api/posts', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Home</h2>
            {posts.map((post) => (
                <div key={post._id}>
                    <h3>{post.user.username}</h3>
                    <p>{post.content}</p>
                    {post.image && <img src={`http://localhost:5000/${post.image}`} alt="Post" />}
                </div>
            ))}
        </div>
    );
}

export default Home;
