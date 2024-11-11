import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import "../styles/inbox.css";

// Default export of the Inbox component
export default function Inbox() {
  // Dummy message data, ideally fetched from an API or context
  const messages = [
    { id: 1, username: 'User1', content: "Hey, I saw your tattoo design and I love it!" },
    { id: 2, username: 'User2', content: "When are you available for a tattoo consultation?" },
  ];

  // Dummy groups data, ideally fetched from an API or context
  const groups = [
    { id: 1, groupName: 'Tattoo Enthusiasts', content: "Let's talk about our favorite tattoo artists!" },
    { id: 2, groupName: 'Tattoo Design Inspiration', content: "Anyone has cool designs for sleeve tattoos?" },
  ];

  return (
    <div className="inbox-container">
      {/* Vote of the Day section */}
      <div className="section">
        <h3>Vote of the Day</h3>
        <div className="message">
          <div className="message-left">
            {/* Placeholder for profile picture */}
            <div className="profile-pic"></div>
          </div>
          <div className="message-right">
            <div className="username">Tattoo Team</div>
            <div className="message-content">Don't forget to vote for your favorite design today!</div>
          </div>
        </div>
      </div>

      {/* Messages section */}
      <div className="section">
        <h3>Messages</h3>
        {/* Map through the messages array to dynamically render each message */}
        {messages.map((message) => (
          <div key={message.id} className="message">
            <div className="message-left">
              {/* Placeholder for profile picture */}
              <div className="profile-pic"></div>
            </div>
            <div className="message-right">
              {/* Username of the person sending the message */}
              <div className="username">{message.username}</div>
              {/* Content of the message */}
              <div className="message-content">{message.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Groups section */}
      <div className="section">
        <h3>Groups</h3>
        {/* Map through the groups array to dynamically render each group */}
        {groups.map((group) => (
          <div key={group.id} className="message">
            <div className="message-left">
              {/* Placeholder for profile picture */}
              <div className="profile-pic"></div>
            </div>
            <div className="message-right">
              {/* Group name */}
              <div className="username">{group.groupName}</div>
              {/* Group's latest message or content */}
              <div className="message-content">{group.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Link to browse more groups */}
      <div className="browse-groups">
        <div className="message">
          <div className="message-left">
            {/* Placeholder for profile picture */}
            <div className="profile-pic"></div>
          </div>
          <div className="message-right">
            <div className="username">Browse Groups</div>
            {/* Link to navigate to the "Browse Groups" page */}
            <Link to="/browse-groups">Go to Browse Groups</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
