import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function getPost() {
            try {
                const response = await fetch(`https://wp-test.basiaszafraniec.dk/wp-json/wp/v2/tattoo-posts/${postId}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        }

        getPost();
    }, [postId]);

    if (!post) return <p>Loading post...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{post.title.rendered}</h1>
            {post.acf["photo-video-src"] && (
                <img
                    src={post.acf["photo-video-src"]}
                    alt={post.title.rendered}
                    style={{ width: "100%", height: "auto" }}
                />
            )}
            <p>{post.acf.caption}</p>
            <p>User ID: {post.acf["user-id"]}</p>
        </div>
    );
}
