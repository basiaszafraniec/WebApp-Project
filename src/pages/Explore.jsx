import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";  // Import the PostCard component to display each post
import Filter from "../components/Filter";  // Import the Filter component for filtering posts
import "../styles/explore.css";  // Import the CSS for styling

export default function Explore() {
    const [posts, setPosts] = useState([]);  // State to hold all fetched posts
    const [filteredPosts, setFilteredPosts] = useState([]);  // State to hold filtered posts based on the selected filter
    const [filterType, setFilterType] = useState('all');  // Default filter type is 'all' (no filter)
    const navigate = useNavigate();  // Hook to navigate to a specific post detail page

    // Fetch posts from the API when the component is mounted
    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch("https://inkly-data.basiaszafraniec.dk/wp-json/wp/v2/tattoo-posts?acf_format=standard");
                const data = await response.json();
                setPosts(data);  // Set fetched posts to the 'posts' state
                setFilteredPosts(data);  // Initially show all posts (no filter applied)
                console.log("Fetched Posts:", data);  // Log the fetched data for debugging
            } catch (error) {
                console.error("Error fetching posts:", error);  // Handle errors in the fetch request
            }
        }

        getPosts();  // Call the function to fetch posts
    }, []);

    // Update filtered posts whenever the filter type or posts change
    useEffect(() => {
        if (filterType === 'all') {
            setFilteredPosts(posts);  // If filter is 'all', show all posts
        } else {
            setFilteredPosts(posts.filter(post => post.acf.type === filterType));  // Filter posts by the selected type
        }
    }, [filterType, posts]);  // Re-run this effect when filterType or posts change

    // Navigate to the post detail page when a post is clicked
    const handlePostClick = (slug) => {
        navigate(`/post/${slug}`);  // Navigate to the dynamic post detail page using the post's slug
    };

    return (
        <div className="explore-container">
            {/* Filter Component: allows users to filter posts based on the filterType */}
            <Filter filterType={filterType} setFilterType={setFilterType} showAllButton={true} />
            
            <div className="grid-container">
                {/* Display filtered posts, or show a message if no posts are available */}
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        // Display each post using PostCard component
                        <PostCard key={post.id} post={post} onClick={() => handlePostClick(post.slug)} />
                    ))
                ) : (
                    <p>No posts available</p>  // Show a message if no posts are available after filtering
                )}
            </div>
        </div>
    );
}
