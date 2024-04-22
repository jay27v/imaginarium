import React from "react";
import Link from "next/link";
function page() {
  return (
    <div>
      <nav>
        <Link className="text-4xl flex justify-left" href={"/"}>
          Home
        </Link>
      </nav>
      <h3 className="text-7xl flex justify-center">Imaginarium</h3>
      <h2 className="text-4xl flex justify-center">Tv shows</h2>
      <div className="text-3xl flex justify-center">
        The shows you know and love right at your fingertips
      </div>
      <nav className="flex justify-center space-x-4 text-4xl">
        <button>Sci fi</button>
        <button>Fantasy</button>
        <button>Horror</button>
        <button>Documentary</button>
        <button>Animation</button>
        <button>Thriller</button>
        <button>Comedy</button>
      </nav>
    </div>
  );
}

export default page;
