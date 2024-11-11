import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import "../styles/postdetail.css";

// Default export of the PostDetail component
export default function PostDetail() {
  // Extract the slug from the URL parameters using React Router's useParams hook
  const { slug } = useParams();
  const [post, setPost] = useState(null); // State to store the fetched post data
  const [error, setError] = useState(null); // State to handle errors in the data fetching

  // useEffect hook to fetch the post data when the slug changes
  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch the post details from the API using the slug in the URL
        const response = await fetch(`https://inkly-data.basiaszafraniec.dk/wp-json/wp/v2/tattoo-posts?acf_format=standard&slug=${slug}`);

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON data returned by the API
        const data = await response.json();
        if (data.length > 0) {
          // Set the first post (assuming there is only one post for the given slug)
          setPost(data[0]);
        } else {
          // If no post is found, set an error message
          setError("No post found with the given slug.");
        }
      } catch (error) {
        // Handle any errors during the fetch operation
        console.error("Error fetching post details:", error);
        setError("Failed to load post details.");
      }
    };
    fetchPost();
  }, [slug]); // Dependency array ensures the fetch operation runs only when the slug changes

  // Show an error message if there was an issue fetching the post
  if (error) {
    return <div>{error}</div>;
  }

  // Show a loading state while the post data is being fetched
  if (!post) {
    return <div>Loading...</div>;
  }

  // Render the post content based on its type
  return (
    <div className="post-detail">
      {/* Conditionally render the content based on the type of post */}
      {post.acf.type === 'photo-video' && (
        <div className="photo-video">
          {/* Render the photo/video if the type is 'photo-video' */}
          <img src={post.acf["photo-video-src"]} alt={post.title.rendered} />
          {post.acf.caption && <p>{post.acf.caption}</p>} {/* Display the caption if available */}
        </div>
      )}
      {post.acf.type === 'short-text' && (
        <div className="short-text">
          {/* Render the short text if the type is 'short-text' */}
          <p>{post.acf["short-text-text"]}</p>
        </div>
      )}
      {post.acf.type === 'article' && (
        <div className="article">
          {/* Render the article if the type is 'article' */}
          <h3>{post.acf["article-title"]}</h3>
          <p>{post.acf["article-text"]}</p>
        </div>
      )}
      {post.acf.type === 'event' && (
        <div className="event">
          {/* Render the event if the type is 'event' */}
          <h3>{post.acf["event-name"]}</h3>
          <p>{post.acf["event-description"]}</p>
        </div>
      )}
    </div>
  );
}
