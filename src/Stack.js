import React from 'react';
import {Link} from "react-router-dom";
export default function Stack(prop) {
    return (
      <Link to='/details'>
      <div className="item">
        <img src={prop.logo} alt={`${prop.name} logo`} />
        <div className="overlay">
          <h1>{prop.name}</h1>
        </div>
      </div>
      </Link>
    );
}