import React from 'react';
import "../styles/filter.css";  // Import the CSS for styling the Filter component

export default function Filter({ filterType, setFilterType, showAllButton = true }) {
    return (
        <div className="filter-container">
            <div className="filter-options">
                {/* Conditionally render the 'All' button depending on wher it's used */}
                {showAllButton && (
                    <button
                        onClick={() => setFilterType('all')}  // When clicked, set filter to 'all'
                        className={filterType === 'all' ? 'active' : ''}  // Add 'active' class if filterType is 'all'
                    >
                        All
                    </button>
                )}

                {/* Button to filter posts by 'photo-video' type */}
                <button
                    onClick={() => setFilterType('photo-video')}  // When clicked, set filter to 'photo-video'
                    className={filterType === 'photo-video' ? 'active' : ''}  // Add 'active' class if filterType is 'photo-video'
                >
                    Photo/Video
                </button>

                {/* Button to filter posts by 'short-text' type */}
                <button
                    onClick={() => setFilterType('short-text')}  // When clicked, set filter to 'short-text'
                    className={filterType === 'short-text' ? 'active' : ''}  // Add 'active' class if filterType is 'short-text'
                >
                    Short Text
                </button>

                {/* Button to filter posts by 'article' type */}
                <button
                    onClick={() => setFilterType('article')}  // When clicked, set filter to 'article'
                    className={filterType === 'article' ? 'active' : ''}  // Add 'active' class if filterType is 'article'
                >
                    Article
                </button>

                {/* Button to filter posts by 'event' type */}
                <button
                    onClick={() => setFilterType('event')}  // When clicked, set filter to 'event'
                    className={filterType === 'event' ? 'active' : ''}  // Add 'active' class if filterType is 'event'
                >
                    Event
                </button>
            </div>
        </div>
    );
}
