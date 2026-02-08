import React from "react";
import { Link } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  const post = {
    title: "The Evolution of Urban Techwear: Capronik's 2026 Vision",
    category: "Style Guide",
    author: "Alex Caproni",
    date: "Feb 12, 2026",
    content: `
      <p>Streetwear is no longer just about aesthetics; it’s about utility. As we transition into the mid-2020s, Capronik is leading the charge in blending high-performance fabrics with silhouettes that define the modern cityscape.</p>
      <h3>The Fabric Revolution</h3>
      <p>We've integrated moisture-wicking tech into our signature navy layers. Our design philosophy remains simple: if it doesn't move with you, it doesn't belong in your wardrobe.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200",
  };

  return (
    <div className="blogWrapper">
      <nav className="navHeader">
        <div className="navContent">
          <Link to="/blog" className="backLink">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            BACK TO BLOG
          </Link>
          <Link to="/" className="logoLink">
            CAPRONIK
          </Link>
        </div>
      </nav>

      <article>
        <div className="heroContainer">
          <img src={post.image} alt={post.title} className="heroImage" />
          <div className="heroOverlay"></div>
        </div>

        <div className="contentCard">
          <div className="metaContainer">
            <span className="categoryTag">{post.category}</span>
            <div className="metaItem">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {post.author}
            </div>
            <div className="metaItem">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              {post.date}
            </div>
          </div>

          <h1 className="blogTitle">{post.title}</h1>

          <div
            className="articleBody"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
