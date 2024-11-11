import React from 'react';
import { Link } from "react-router-dom";  // Import Link to enable navigation to the post detail page

export default function PostCard({ post, user, onClick }) {
    // console.log(user);  // Optional: log the user data for debugging purposes

    return (
        <div className="post-card" onClick={onClick}>  {/* Container for each individual post card */}
            
            {/* Header with user profile picture and username */}
            <div className="post-header">
                {user && (  // Check if the user data exists
                    <>
                        <img 
                            src={user.profile_image_url}  // Display the user's profile picture
                            alt={user.title.rendered}  // Alt text for accessibility
                            className="profile-picture"  // Apply CSS class for styling
                        />
                        <span className="username">{user.title.rendered}</span>  {/* Display the user's name */}
                    </>
                )}
            </div>

            {/* Content section for displaying different types of posts */}
            <div className="post-content">
                <Link to={`/post/${post.slug}`} className="post-link">  {/* Link to navigate to the individual post detail */}
                    {/* Conditional rendering based on the type of post */}
                    {post.acf.type === 'photo-video' && (  // Check if the post is a photo/video type
                        <div className="photo-video">
                            <img 
                                src={post.acf["photo-video-src"]}  // Display the image or video
                                alt={post.title.rendered}  // Alt text for accessibility
                                className="post-image"  // Apply CSS class for styling
                            />
                            {post.acf.caption && <p>{post.acf.caption}</p>}  {/* Display caption if available */}
                        </div>
                    )}
                    {post.acf.type === 'short-text' && (  // Check if the post is a short text type
                        <div className="short-text">
                            <p>{post.acf["short-text-text"]}</p>  {/* Display the text content */}
                        </div>
                    )}
                    {post.acf.type === 'article' && (  // Check if the post is an article
                        <div className="article">
                            <h3>{post.acf["article-title"]}</h3>  {/* Display article title */}
                            <p>{post.acf["article-text"].slice(0, 100)}...</p>  {/* Display a snippet of the article */}
                        </div>
                    )}
                    {post.acf.type === 'event' && (  // Check if the post is an event
                        <div className="event">
                            <h3>{post.acf["event-name"]}</h3>  {/* Display event name */}
                            <p>{post.acf["event-description"].slice(0, 100)}...</p>  {/* Display event description snippet */}
                        </div>
                    )}
                </Link>
            </div>
        </div>
    );
}
