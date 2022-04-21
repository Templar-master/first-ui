import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/public/page2'>Page 2</Link><hr />
      <Link to='/account/login'>Login</Link>
    </div>
  );
};
export default Home;