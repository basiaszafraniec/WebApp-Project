import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  console.log(post);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://wp-test.basiaszafraniec.dk/index.php/wp-json/wp/v2/tattoo-posts?slug=${slug}`);
      const data = await response.json();
      setPost(data[0]);
    };
    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail">
      {post.acf.type === 'photo-video' && (
        <div className="photo-video">
          <img src={post.acf["photo-video-src"]} alt={post.title.rendered} />
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
          <p>{post.acf["article-text"]}</p>
        </div>
      )}
      {post.acf.type === 'event' && (
        <div className="event">
          <h3>{post.acf["event-name"]}</h3>
          <p>{post.acf["event-description"]}</p>
        </div>
      )}
    </div>
  );
}
