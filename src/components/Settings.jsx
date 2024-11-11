import React, { useState } from "react";
import { FaCog } from "react-icons/fa";  // Import the cog icon for settings
import "../styles/settings.css";
import CreateStudio from "./CreateStudio";  // Import the CreateStudio component

export default function Settings() {
    // State to manage whether the settings panel is open or closed
    const [isOpen, setIsOpen] = useState(false);

    // State to manage whether to show the CreateStudio component
    const [showCreateStudio, setShowCreateStudio] = useState(false);

    // State to manage the selected profile type (user or artist)
    const [profileType, setProfileType] = useState("user");

    // Function to toggle the visibility of the settings panel
    const toggleSettings = () => setIsOpen(!isOpen);

    // Functions to show and hide the CreateStudio component
    const openCreateStudio = () => setShowCreateStudio(true);
    const closeCreateStudio = () => setShowCreateStudio(false);

    return (
        <div className="settings-container">
            {/* Settings icon that toggles the settings panel */}
            <div className="settings-icon" onClick={toggleSettings}>
                <FaCog size={24} />
            </div>

            {/* Settings panel, which is conditionally rendered based on the isOpen state */}
            <div className={`settings-panel ${isOpen ? "open" : ""}`}>
                <div className="settings-content">
                    <h2>Settings</h2>

                    {/* Conditional rendering of the content based on whether to show CreateStudio */}
                    {!showCreateStudio ? (
                        <>
                            {/* Profile settings section */}
                            <div className="profile-settings">
                                <label htmlFor="profileType">Profile Type</label>
                                <select
                                    id="profileType"
                                    value={profileType}
                                    onChange={(e) => setProfileType(e.target.value)}  // Update the profile type state
                                >
                                    <option value="user">User</option>
                                    <option value="artist">Artist</option>
                                </select>
                            </div>

                            {/* Button to trigger the creation of a new studio */}
                            <button 
                                className="create-studio-button" 
                                onClick={openCreateStudio}
                            >
                                Create a Studio
                            </button>
                        </>
                    ) : (
                        // Show the CreateStudio component if `showCreateStudio` is true
                        <CreateStudio onClose={closeCreateStudio} />
                    )}
                </div>
            </div>
        </div>
    );
}
