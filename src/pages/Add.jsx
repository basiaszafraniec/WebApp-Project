import React, { useState } from "react";
import "../styles/add.css";
import Filter from "../components/Filter";  // Import the Filter component to choose post type

export default function AddPost() {
    // State to manage the selected filter type (post type: 'photo-video', 'short-text', 'article', 'event')
    const [filterType, setFilterType] = useState('photo-video');

    // State to manage the form data for different post types
    const [postData, setPostData] = useState({
        shortTextText: "",
        photoVideoSrc: "",
        caption: "",
        articleTitle: "",
        articleText: "",
        eventName: "",
        eventLocation: "",
        eventDate: "",
        eventDescription: "",
    });

    // Handle input changes to update the postData state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value,
        });
    };

    // Handle form submission to send data to the API
    const handleSubmit = async (e) => {
        e.preventDefault();

        // API URL to submit the post
        const apiUrl = "https://inkly-data.basiaszafraniec.dk/wp-json/wp/v2/tattoo-posts?scf_format=standard&_embed";

        // Sending the POST request with the post data
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual access token
            },
            body: JSON.stringify({
                title: "New Tattoo Post",  // Title for the post
                content: "",  // Content (could be empty or added as needed)
                status: "publish",  // Set the post status to 'publish'
                acf: {  // ACF (Advanced Custom Fields) data
                    "short-text-text": filterType === 'short-text' ? postData.shortTextText : "",
                    "photo-video-src": filterType === 'photo-video' ? postData.photoVideoSrc : "",
                    "caption": filterType === 'photo-video' ? postData.caption : "",
                    "article-title": filterType === 'article' ? postData.articleTitle : "",
                    "article-text": filterType === 'article' ? postData.articleText : "",
                    "event-name": filterType === 'event' ? postData.eventName : "",
                    "event-location": filterType === 'event' ? postData.eventLocation : "",
                    "event-date": filterType === 'event' ? postData.eventDate : "",
                    "event-description": filterType === 'event' ? postData.eventDescription : "",
                },
            }),
        });

        // Notify the user of the result
        if (response.ok) {
            alert("Post created successfully!");  // Success
        } else {
            alert("Error creating post.");  // Failure
        }
    };

    return (
        <div className="add-post-container">
            <h2>Create a New Post</h2>

            {/* Filter selection for post type (photo-video, short-text, etc.) */}
            <Filter filterType={filterType} setFilterType={setFilterType} showAllButton={false} />

            {/* Post creation form */}
            <form onSubmit={handleSubmit}>
                {/* Conditionally render form fields based on the selected filterType */}
                
                {filterType === 'short-text' && (
                    <div className="form-group">
                        <label htmlFor="shortTextText">Short Text</label>
                        <textarea
                            id="shortTextText"
                            name="shortTextText"
                            value={postData.shortTextText}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                )}

                {filterType === 'photo-video' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="photoVideoSrc">Photo/Video URL</label>
                            <input
                                type="text"
                                id="photoVideoSrc"
                                name="photoVideoSrc"
                                value={postData.photoVideoSrc}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="caption">Caption</label>
                            <textarea
                                id="caption"
                                name="caption"
                                value={postData.caption}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </>
                )}

                {filterType === 'article' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="articleTitle">Article Title</label>
                            <input
                                type="text"
                                id="articleTitle"
                                name="articleTitle"
                                value={postData.articleTitle}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="articleText">Article Text</label>
                            <textarea
                                id="articleText"
                                name="articleText"
                                value={postData.articleText}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </>
                )}

                {filterType === 'event' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="eventName">Event Name</label>
                            <input
                                type="text"
                                id="eventName"
                                name="eventName"
                                value={postData.eventName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventLocation">Event Location</label>
                            <input
                                type="text"
                                id="eventLocation"
                                name="eventLocation"
                                value={postData.eventLocation}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventDate">Event Date</label>
                            <input
                                type="date"
                                id="eventDate"
                                name="eventDate"
                                value={postData.eventDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventDescription">Event Description</label>
                            <textarea
                                id="eventDescription"
                                name="eventDescription"
                                value={postData.eventDescription}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </>
                )}

                {/* Submit button to create the post */}
                <button className="submit-button" type="submit">Create Post</button>
            </form>
        </div>
    );
}
