import React from "react";
import { Link } from "react-router-dom";

const ByAuthor = () => {
  return (
    <>
      <div className="flex">
        <nav>
          <ul>
            <li>
              <Link to="/bygenre">Recommendations by genre </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>Some book recommendations based on your favorite authors!</div>
    </>
  );
};

export default ByAuthor;
