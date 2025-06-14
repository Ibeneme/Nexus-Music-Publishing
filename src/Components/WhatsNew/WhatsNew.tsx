import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WhatsNew.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppDispatch, RootState } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsInsights } from "../../Redux/Admin/newsInsightsSlice";
import { formatDate } from "../Blog/formatDate.utils";
import Loader from "../Loader/Loader";

const WhatsNew: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 50, once: true });
  }, []);

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { insights, status, error } = useSelector(
    (state: RootState) => state.newsInsights
  );

  useEffect(() => {
    dispatch(fetchNewsInsights());
  }, [dispatch]);

  const handleClick = (id: string) => {
    navigate(`/blog-details/${id}`);
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    return text?.length > maxLength ? text?.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="whats-new" data-aos="fade-up">
      <br /> <br />
      <div className="blog-grid">
        <div className="blog-grid">
          <div className="blog-grid">
            {status === "loading" && (
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
            )}
            {status === "failed" && <p>Error: {error}</p>}
            {status === "succeeded" &&
              insights
                ?.slice()
                // ?.reverse()
                ?.map((post) => (
                  <div
                    key={post._id}
                    className="blog-card"
                    onClick={() => handleClick(post?._id)} // Pass the ID instead of the whole post
                  >
                    <img
                      src={post?.image}
                      alt={post?.title}
                      className="blog-image"
                    />
                    <div
                      className="blog-info"
                      style={{
                        justifyContent: "space-between",
                        gap: 16,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div>
                        <h2 style={{ fontWeight: 700, fontSize: 18 }}>
                          {post?.title}
                        </h2>
                        <p>{truncateText(post?.description)}</p>
                      </div>

                      <div>
                        <span
                          className="blog-date"
                          style={{
                            color: "var(--primary-color)",
                            backgroundColor: "var(--primary-color-faded)",
                            padding: `6px 11px`,
                            borderRadius: 10,
                            fontSize: 14,
                          }}
                        >
                          {post?.dateCreated
                            ? formatDate(new Date(post?.dateCreated))
                            : "Unknown date"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
