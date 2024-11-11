import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';  // Icon for adding new artist
import "../styles/create-studio.css";  // Import the stylesheet

export default function CreateStudio({ onClose }) {
    const [studioData, setStudioData] = useState({
        studioName: "",  // Name of the studio
        studioBio: "",   // Bio of the studio
        profilePicture: null,  // Profile picture file
        backgroundPicture: null,  // Background picture file
        instagram: "",   // Instagram link
        artists: [],  // List of artists
        location: "",  // Studio location
    });

    // Handle changes for text input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudioData({ ...studioData, [name]: value });
    };

    // Handle changes for file input fields (profile and background images)
    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setStudioData({ ...studioData, [name]: file });
    };

    // Add a new artist to the artists list
    const addArtist = () => {
        setStudioData({ ...studioData, artists: [...studioData.artists, ""] });
    };

    // Handle changes for each artist input
    const handleArtistChange = (index, value) => {
        const updatedArtists = [...studioData.artists];
        updatedArtists[index] = value;
        setStudioData({ ...studioData, artists: updatedArtists });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Studio data submitted:", studioData);
        onClose();  // Close the form after submission
    };

    return (
        <div className="create-studio-container">
            <h2>Create a Studio</h2>
            <form onSubmit={handleSubmit}>
                
                {/* Studio Name Input */}
                <div className="form-group">
                    <label htmlFor="studioName">Name of Studio</label>
                    <input
                        type="text"
                        id="studioName"
                        name="studioName"
                        value={studioData.studioName}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                {/* Studio Bio Input */}
                <div className="form-group">
                    <label htmlFor="studioBio">Studio Bio</label>
                    <textarea
                        id="studioBio"
                        name="studioBio"
                        value={studioData.studioBio}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                {/* Profile Picture Upload */}
                <div className="form-group">
                    <label>Profile Picture</label>
                    <input
                        type="file"
                        name="profilePicture"
                        onChange={handleFileChange}
                        required
                    />
                </div>

                {/* Background Picture Upload */}
                <div className="form-group">
                    <label>Background Picture</label>
                    <input
                        type="file"
                        name="backgroundPicture"
                        onChange={handleFileChange}
                        required
                    />
                </div>

                {/* Instagram Link Input */}
                <div className="form-group">
                    <label htmlFor="instagram">Link your Instagram</label>
                    <input
                        type="url"
                        id="instagram"
                        name="instagram"
                        value={studioData.instagram}
                        onChange={handleChange}
                    />
                </div>

                {/* Artists Input Fields */}
                <div className="form-group">
                    <label>Artists Working There</label>
                    {studioData.artists.map((artist, index) => (
                        <input
                            key={index}
                            type="text"
                            placeholder={`Artist ${index + 1}`}
                            value={artist}
                            onChange={(e) => handleArtistChange(index, e.target.value)}
                        />
                    ))}
                    <FiPlusCircle className="add-artist-icon" onClick={addArtist} />  {/* Add artist button */}
                </div>

                {/* Location Input */}
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={studioData.location}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-button">Create Studio</button>
            </form>
        </div>
    );
}
