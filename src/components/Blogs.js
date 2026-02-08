import { Link } from "react-router-dom";
import "./Blogs.css";

const Blogs = () => {
  const allBlogs = [
    {
      id: 1,
      title: "The Evolution of Urban Techwear",
      category: "Style Guide",
      excerpt:
        "Exploring how high-performance fabrics are redefining the modern city silhouette.",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80",
    },
    {
      id: 2,
      title: "Midnight Navy: The New Black",
      category: "Color Theory",
      excerpt:
        "Why we chose #0e0f38 as the anchor for our 2026 winter collection.",
      image:
        "https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=600&q=80",
    },
    {
      id: 3,
      title: "Racing Red Accents",
      category: "Design",
      excerpt:
        "The psychological impact of high-visibility accents in street fashion.",
      image:
        "https://images.unsplash.com/photo-1508333706533-1ef43ecb8641?w=600&q=80",
    },
  ];

  return (
    <div className="blogsWrapper">
      {/* Editorial Header */}
      <header className="blogsHeader">
        <p>Capronik Journal</p>
        <h1>The Blueprint</h1>
      </header>

      {/* Responsive Grid */}
      <div className="blogsGrid">
        {allBlogs.map((post) => (
          <Link to={`/Blogs/${post.id}`} key={post.id} className="blogCard">
            <div className="imageContainer">
              <img src={post.image} alt={post.title} className="cardImage" />
            </div>
            <div className="cardContent">
              <span className="cardCategory">{post.category}</span>
              <h2 className="cardTitle">{post.title}</h2>
              <p className="cardExcerpt">{post.excerpt}</p>
              <div className="readMore">
                Read Article
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
