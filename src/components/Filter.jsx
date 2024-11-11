import React from 'react';

export default function Filter({ filterType, setFilterType }) {
    return (
        <div className="filter-container">
            <div className="filter-options">
                <button
                    onClick={() => setFilterType('all')}
                    className={filterType === 'all' ? 'active' : ''}
                >
                    All
                </button>
                <button
                    onClick={() => setFilterType('photo-video')}
                    className={filterType === 'photo-video' ? 'active' : ''}
                >
                    Photo/Video
                </button>
                <button
                    onClick={() => setFilterType('short-text')}
                    className={filterType === 'short-text' ? 'active' : ''}
                >
                    Short Text
                </button>
                <button
                    onClick={() => setFilterType('article')}
                    className={filterType === 'article' ? 'active' : ''}
                >
                    Article
                </button>
                <button
                    onClick={() => setFilterType('event')}
                    className={filterType === 'event' ? 'active' : ''}
                >
                    Event
                </button>
            </div>
        </div>
    );
}
