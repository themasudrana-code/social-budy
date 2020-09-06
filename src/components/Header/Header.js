import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <nav className="mein_menu">
        <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/post">POSTS</a></li>
            <li><a href="/blog">BLOG</a></li>
        </ul>
    </nav>
  );
};

export default Header;