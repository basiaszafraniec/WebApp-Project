import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
    return (
        <div className={`post-card ${post.acf.type}`}>
            <Link to={`/post/${post.slug}`} className="post-link">
                {post.acf.type === 'photo-video' && (
                    <div className="photo-video">
                        <img
                            src={post.acf["photo-video-src"]}
                            alt={post.title.rendered}
                            className="post-image"
                        />
                        {post.acf.caption && <p>{post.acf.caption}</p>}
                    </div>
                )}
                {post.acf.type === 'short-text' && (
                    <div className="short-text">
                        <p>{post.acf["short-text-text"]}</p>
                    </div>
                )}
                {post.acf.type === 'article' && (
                    <div className="article">
                        <h3>{post.acf["article-title"]}</h3>
                        <p>{post.acf["article-text"].slice(0, 100)}...</p>
                    </div>
                )}
                {post.acf.type === 'event' && (
                    <div className="event">
                        <h3>{post.acf["event-name"]}</h3>
                        <p>{post.acf["event-description"].slice(0, 100)}...</p>
                    </div>
                )}
            </Link>
        </div>
    );
}
