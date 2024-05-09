import React from "react";
import { Link } from "react-router-dom";

const ByGenre = () => {
  return (
    <>
      <div className="flex">
        <nav>
          <ul>
            <li>
              <Link to="/byauthor"> Recommendations by author </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        Some book recommendations based on the genres of your favorite books!
      </div>
    </>
  );
};

export default ByGenre;
