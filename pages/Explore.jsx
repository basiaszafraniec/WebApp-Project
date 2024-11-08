import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import PostCard from "../components/PostCard";
import "../styles/explore.css"

export default function Explore() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch("https://wp-test.basiaszafraniec.dk/wp-json/wp/v2/tattoo-posts");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }

        getPosts();
    }, []);

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    return (
        <div className="explore-container">
            <h1>Explore Tattoos</h1>
            <div className="grid-container">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="post-card" onClick={() => handlePostClick(post.id)}>
                            <p className="user-id">User ID: {post.acf["user-id"]}</p>
                            {post.acf["photo-video-src"] && (
                                <img
                                    src={post.acf["photo-video-src"]}
                                    alt={post.title.rendered}
                                    className="post-image"
                                />
                            )}
                            <p className="caption">{post.acf.caption}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </div>
        </div>
    );
}

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PostCard from "../components/PostCard"; // Import the PostCard component
// import "../styles/explore.css";

// export default function Explore() {
//     const [posts, setPosts] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         async function getPosts() {
//             try {
//                 const response = await fetch("https://wp-test.basiaszafraniec.dk/wp-json/wp/v2/tattoo-posts");
//                 const data = await response.json();
//                 setPosts(data);
//             } catch (error) {
//                 console.error("Error fetching posts:", error);
//             }
//         }

//         getPosts();
//     }, []);

//     return (
//         <div className="explore-container">
//             <h1>Explore Tattoos</h1>
//             <div className="grid-container">
//                 {posts.length > 0 ? (
//                     posts.map((post) => (
//                         <PostCard key={post.id} post={post} />
//                     ))
//                 ) : (
//                     <p>No posts available</p>
//                 )}
//             </div>
//         </div>
//     );
// }
