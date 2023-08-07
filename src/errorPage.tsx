import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="not-found" style={{
            textAlign: "center"
        }}>
            <h2>Sorry</h2>
            <p>Page not found</p>
            <Link to="/">Back to the HomePage</Link>
        </div>
    );
}
 
export default ErrorPage;