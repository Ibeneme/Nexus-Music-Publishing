import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  // FaTwitter,
  // FaInstagram,
  // FaFacebook,
  FaArrowLeft,
} from "react-icons/fa";
import Loader from "../Loader/Loader";
import "./BlogDetailPage.css";
import { formatDate } from "./formatDate.utils";
import { AppDispatch, RootState } from "../../Redux/store";
import { fetchNewsInsightById } from "../../Redux/Admin/newsInsightsSlice";

const BlogDetailPageById: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL params
  const dispatch: AppDispatch = useDispatch();
  const { insight, status, error } = useSelector(
    (state: RootState) => state.newsInsights
  ); // Adjust selector based on your state structure
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchNewsInsightById(id)); // Fetch the blog post by ID
    }
  }, [dispatch, id]);

  // const handleShare = (url: string) => {
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  if (status === "loading") {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!insight) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-detail-page" style={{ padding: `96px 16px` }}>
      <div className="blog-content">
        <div className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> <span>Back</span>
        </div>

        <img src={insight.image} alt={insight.title} className="detail-image" />
        <h1>{insight.title}</h1>
        <p className="blog-date">
          {insight.dateCreated
            ? formatDate(new Date(insight.dateCreated))
            : "Unknown date"}
        </p>
        <div
          style={{ fontSize: 14, color: "#666" }}
          dangerouslySetInnerHTML={{ __html: insight.description ?? "" }}
        />
      </div>
      {/* <div className="share-box">
        <h2 className="share-title">Share this post</h2>
        <div className="social-icons">
          <div
            onClick={() =>
              handleShare(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  "https://www.nexusmusicpublishing.com/blog-details/" + id
                )}`
              )
            }
            className="social-icon"
          >
            <FaTwitter color={`var(--primary-color)`} fontSize={28} />
          </div>
          <div
            onClick={() =>
              handleShare(
                `https://www.instagram.com/share?url=${encodeURIComponent(
                  "https://www.nexusmusicpublishing.com/blog-details/" + id
                )}`
              )
            }
            className="social-icon"
          >
            <FaInstagram color={`var(--primary-color)`} fontSize={28} />
          </div>
          <div
            onClick={() =>
              handleShare(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  "https://www.nexusmusicpublishing.com/blog-details/" + id
                )}`
              )
            }
            className="social-icon"
          >
            <FaFacebook color={`var(--primary-color)`} fontSize={28} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BlogDetailPageById;
