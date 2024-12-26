import React, { useState } from "react";

const Comment = ({ title, content, onReply }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReplySubmit = () => {
    if (replyText.trim() !== "") {
      onReply(replyText); // Call the parent function to add the reply
      setReplyText(""); // Clear the input
      setShowReplyInput(false); // Hide the input field
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {/* Comment Title and Content */}
      <h2 className="text-lg font-bold mb-2 text-black">{title}</h2>
      <p className="text-black whitespace-pre-line">{content}</p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-2 text-black">
        <button className="text-sm hover:underline">Like</button>
        <button
          className="text-sm hover:underline"
          onClick={() => setShowReplyInput(!showReplyInput)}
        >
          Reply
        </button>
      </div>

      {/* Reply Input Field */}
      {showReplyInput && (
        <div className="mt-4">
          <textarea
            className="w-full p-2 rounded border text-black"
            placeholder="Write your reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></textarea>
          <button
            onClick={handleReplySubmit}
            className="bg-green-500 px-4 py-1 text-sm text-white rounded mt-2 hover:bg-green-600"
          >
            Submit Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default Comment;

