

import React from 'react';

const Navbar = () => {
    return (
      <nav className="mb-20 flex items-center justify-between py-6 mx-[-65px]">
        {/* Navbar Title */}
        <div>
        </div>

        {/* Navbar Items */}
        <div className="m-8 flex items-center justify-center gap-8 text-xl">
          <button
            className="hover:text-accent hover:scale-110 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: document.getElementById('hero').offsetTop, behavior: 'smooth' })}
          >
            About
          </button>
          <button
            className="hover:text-accent hover:scale-110 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: document.getElementById('tech').offsetTop, behavior: 'smooth' })}
          >
            Technologies
          </button>
          <button
            className="hover:text-accent hover:scale-110 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}
          >
            Projects
          </button>
          <button
            className="hover:text-accent hover:scale-110 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: document.getElementById('coding').offsetTop, behavior: 'smooth' })}
          >
            Coding Profiles
          </button>
          <button
            className="hover:text-accent hover:scale-110 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
          >
            Contact
          </button>
        </div>
      </nav>
    );
  };

export default Navbar;

