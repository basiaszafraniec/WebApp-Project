import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard"; // Import the PostCard component
import "../styles/explore.css";

export default function Explore() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch("https://inkly-data.basiaszafraniec.dk/wp-json/wp/v2/tattoo-posts?acf_format=standard");
                const data = await response.json();
                setPosts(data);
                console.log("Fetched Posts:", data); 
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }

        getPosts();
    }, []);

    const handlePostClick = (slug) => {
        navigate(`/post/${slug}`);
    };

    return (
        <div className="explore-container">
            <h1>Explore Tattoos</h1>
            <div className="grid-container">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <PostCard key={post.id} post={post} onClick={() => handlePostClick(post.slug)} />
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </div>
        </div>
    );
}

