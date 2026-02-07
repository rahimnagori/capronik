import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container text-center">
      <h1 className="display-1">404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
