import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Profile = () => {
    const { id } = useParams();
    const { user: currentUser } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:5000/api/users/${id}`);
            setUser(res.data);
            setIsFollowing(currentUser.following.includes(id));
        };
        fetchUser();
    }, [id, currentUser]);

    const handleFollow = async () => {
        if (isFollowing) {
            await axios.put(`http://localhost:5000/api/users/${id}/unfollow`, {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setIsFollowing(false);
        } else {
            await axios.put(`http://localhost:5000/api/users/${id}/follow`, {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setIsFollowing(true);
        }
    };

    return (
        <div>
            {user && (
                <div>
                    <h2>{user.username}'s Profile</h2>
                    <p>{user.bio}</p>
                    <img src={`http://localhost:5000/${user.profilePicture}`} alt="Profile" />
                    {currentUser._id !== id && (
                        <button onClick={handleFollow}>
                            {isFollowing ? 'Unfollow' : 'Follow'}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Profile;
