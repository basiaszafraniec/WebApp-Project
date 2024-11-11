// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PostCard from "../components/PostCard";
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
//             } catch (error) {
//                 console.error("Error fetching posts:", error);
//             }
//         }

//         async function getUsers() {
//             try {
//                 const response = await fetch("https://inkly-data.basiaszafraniec.dk/wp-json/wp/v2/users?acf_format=standard");
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 console.error("Error fetching users:", error);
//             }
//         }

//         getPosts();
//         getUsers();
//     }, []);

//     const handlePostClick = (slug) => {
//         navigate(`/post/${slug}`);
//     };

//     return (
//         <div className="explore-container">
//             <div className="grid-container">
//                 {posts.length > 0 ? (
//                     posts.map((post) => {
//                         console.log(users);
//                         const user = users.find((user) => user.id === post["user-id"]); // Match user by id
//                         return (
//                             <PostCard 
//                                 key={post.id} 
//                                 post={post}
//                                 user={user}
//                                 onClick={() => handlePostClick(post.slug)} 
//                             />
//                         );
//                     })
//                 ) : (
//                     <p>No posts available</p>
//                 )}
//             </div>
//         </div>
//     );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import Filter from "../components/Filter";  // Import the Filter component
import "../styles/explore.css";

export default function Explore() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [filterType, setFilterType] = useState('all'); // Default filter to 'all'
    const navigate = useNavigate();

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch("https://inkly-data.basiaszafraniec.dk/wp-json/wp/v2/tattoo-posts?acf_format=standard");
                const data = await response.json();
                setPosts(data);
                setFilteredPosts(data); // Initially show all posts
                console.log("Fetched Posts:", data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }

        getPosts();
    }, []);

    useEffect(() => {
        // Filter posts based on selected filterType
        if (filterType === 'all') {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(posts.filter(post => post.acf.type === filterType));
        }
    }, [filterType, posts]);

    const handlePostClick = (slug) => {
        navigate(`/post/${slug}`);
    };

    return (
        <div className="explore-container">
            <Filter filterType={filterType} setFilterType={setFilterType} />
            <div className="grid-container">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <PostCard key={post.id} post={post} onClick={() => handlePostClick(post.slug)} />
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </div>
        </div>
    );
}
