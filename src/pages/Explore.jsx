// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PostCard from "../components/PostCard"; // Import the PostCard component
// import "../styles/explore.css";

// export default function Explore() {
//     const [posts, setPosts] = useState([]);
//     const [users, setUsers] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         async function getPosts() {
//             try {
//                 const response = await fetch("https://inkly-data.basiaszafraniec.dk/wp-json/wp/v2/tattoo-posts?acf_format=standard");
//                 const data = await response.json();
//                 setPosts(data);
//                 console.log("Fetched Posts:", data); 
//             } catch (error) {
//                 console.error("Error fetching posts:", error);
//             }
//         }

//         getPosts();
//     }, []);

//     const handlePostClick = (slug) => {
//         navigate(`/post/${slug}`);
//     };

//     useEffect(() => {
//         async function getUsers() {
//             try {
//                 const response = await fetch("https://inkly-data.basiaszafraniec.dk/wp-json/wp/v2/users?acf_format=standard");
//                 const data = await response.json();
//                 setUsers(data);
//                 console.log("Fetched Users:", data); 
//             } catch (error) {
//                 console.error("Error fetching users:", error);
//             }
//         }

//         getUsers();
//     }, []);

//     return (
//         <div className="explore-container">
//             <h1>Explore Tattoos</h1>
//             <div className="grid-container">
//                 {posts.length > 0 ? (
//                     posts.map((post) => (
//                         <PostCard key={post.id} post={post} onClick={() => handlePostClick(post.slug)} />
//                     ))
//                 ) : (
//                     <p>No posts available</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// Explore.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import "../styles/explore.css";

export default function Explore() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch("https://inkly-data.basiaszafraniec.dk/wp-json/wp/v2/tattoo-posts?acf_format=standard");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }

        async function getUsers() {
            try {
                const response = await fetch("https://inkly-data.basiaszafraniec.dk/wp-json/wp/v2/users?acf_format=standard");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }

        getPosts();
        getUsers();
    }, []);

    const handlePostClick = (slug) => {
        navigate(`/post/${slug}`);
    };

    return (
        <div className="explore-container">
            <div className="grid-container">
                {posts.length > 0 ? (
                    posts.map((post) => {
                        console.log(users);
                        const user = users.find((user) => user.id === post["user-id"]); // Match user by id
                        return (
                            <PostCard 
                                key={post.id} 
                                post={post}
                                user={user}
                                onClick={() => handlePostClick(post.slug)} 
                            />
                        );
                    })
                ) : (
                    <p>No posts available</p>
                )}
            </div>
        </div>
    );
}
