import React, { useState } from "react";
import Comment from "./comments";

const Forum = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      title: "TITLE",
      content: "KKKKKKKKKKKKKKKKKKK\nNNNNNNNNNNNNNNNNNNNNN",
      replies: [],
    },
    {
      id: 2,
      title: "TITLE",
      content: "KKKKKKKKKKKKKKKKKKK\nNNNNNNNNNNNNNNNNNNNNN",
      replies: [],
    },
    {
      id: 3,
      title: "TITLE",
      content: "KKKKKKKKKKKKKKKKKKK\nNNNNNNNNNNNNNNNNNNNNN",
      replies: [],
    },
  ]);

  const addReply = (commentId, replyContent) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [...comment.replies, replyContent],
            }
          : comment
      )
    );
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-[#00334d] to-[#002333] p-6 rounded-md shadow-md">
      {/* Forum Title */}
      <h1 className="text-2xl font-bold mb-4 text-left text-white">Form</h1>

      {/* Comments Section */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id}>
            <Comment
              title={comment.title}
              content={comment.content}
              onReply={(replyContent) => addReply(comment.id, replyContent)}
            />
            {/* Render Replies */}
            {comment.replies.length > 0 && (
              <div className="ml-6 mt-4 space-y-2">
                {comment.replies.map((reply, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-2 rounded shadow text-black"
                  >
                    {reply}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;

