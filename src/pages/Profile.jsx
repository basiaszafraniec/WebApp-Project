// ProfilePage.js
import React from 'react';
import { FaInstagram, FaStar, FaUserCircle, FaRegComment } from 'react-icons/fa'; // Importing icons for UI elements
import "../styles/profile.css"; // Importing the stylesheet for the profile page
import Settings from '../components/Settings'; // Importing the Settings component for configuration

// Default export of the ProfilePage component
export default function ProfilePage() {
    return (
        <div className="profile-page">
            {/* Settings component is displayed here, likely for user-related settings */}
            <Settings />

            {/* Profile Header section containing user image and basic information */}
            <div className="profile-header">
                <div className="profile-image">
                    {/* Default icon as a profile image */}
                    <FaUserCircle size={80} />
                </div>
                <div className="profile-info">
                    <h2>@TAT-Hall</h2> {/* Username */}
                    <div className="rating">
                        {/* Rating with a star icon and the number of reviews */}
                        <FaStar color="#FFD700" />
                        <span>4.5</span> (129 reviews)
                    </div>
                    <div className="social">
                        {/* Instagram icon and handle */}
                        <FaInstagram /> Instagram
                    </div>
                    <p>129 followers • 341 following</p> {/* Follower and following count */}
                </div>
            </div>

            {/* Profile description section */}
            <div className="profile-description">
                <p>
                    Where ink meets creativity. 🖤 TAT-Hall is Copenhagen's premier tattoo convention, bringing together top
                    artists, live tattooing, and a celebration of tattoo culture. Join us for exclusive designs, competitions,
                    and a weekend of artistic expression. #TATHall2024 #TattooConvention
                </p>
            </div>

            {/* Recent Posts section */}
            <div className="recent-post">
                <h3>Recent Posts</h3>
                <div className="post-content">
                    <div className="post-text">
                        {/* Example post content */}
                        <p>Mark your calendars! TAT-Hall is back this weekend with live art and exclusive designs! 🎉 #TATHall2024</p>
                    </div>
                </div>
            </div>

            {/* Gallery section showcasing images */}
            <div className="gallery">
                <h3>Gallery</h3>
                <div className="gallery-images">
                    {/* Placeholder for gallery images */}
                    <div className="gallery-image">Image 1</div>
                    <div className="gallery-image">Image 2</div>
                    <div className="gallery-image">Image 3</div>
                </div>
            </div>

            {/* Reviews section displaying user reviews */}
            <div className="reviews">
                <h3>Reviews</h3>
                {/* Display individual review items with user names and their review */}
                <div className="review-item">
                    <FaRegComment /> <strong>@TrataOla</strong>: Awesome experience ⭐⭐⭐⭐⭐
                </div>
                <div className="review-item">
                    <FaRegComment /> <strong>@TatTatUser</strong>: Would go again ⭐⭐⭐⭐
                </div>
            </div>
        </div>
    );
}
