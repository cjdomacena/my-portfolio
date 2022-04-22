import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="font-text flex w-fit py-2 space-x-2 items-center">
      <Link to="/">
        <h1 className="text-lg font-medium border-r pr-2">CD</h1>
      </Link>
      <p className="text-white/60 text-sm">frontend developer</p>
    </div>
  );
}

export default Logo;