import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <hr />
      <Link to="/main">Main</Link>
    </div>
  );
}
