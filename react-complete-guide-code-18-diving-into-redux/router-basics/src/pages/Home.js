import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h>Welcome to the home Page</h>
      <Link to="/products">
        <button>Product Page</button>
      </Link>
    </>
  );
};

export default Home;
