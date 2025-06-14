import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "./blogPosts";
import "./BlogDetail.css";
import { FaArrowLeft } from "react-icons/fa";

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="blog-detail">
        <h2>Post not found.</h2>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> <span>Back</span>
      </div>

      <img src={post.image} alt={post.title} />
      <h1>{post.title}</h1>
      <p className="date">{post.date}</p>
      <div className="content">{post.content}</div>
    </div>
  );
};

export default BlogDetail;
