import React, { useState } from 'react';
import '../ShowHeader.css';

function ShowHeader() {
  const [active, setActive] = useState('#home');

  const menuItems = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#services', text: 'Services' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className={`nav-item ${active === item.href ? 'active' : ''}`}
              onClick={() => setActive(item.href)}
            >
              <a href={item.href} className="nav-link">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default ShowHeader;
