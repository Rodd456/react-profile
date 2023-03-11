import React, { useState } from "react";
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import NavBar from './Navigation';
import Footer from './Footer';

const pages = {
  AboutMe: <AboutMe />,
  Projects: <Projects />,
  Resume: <Resume />,
  Contact: <Contact />,
};

export default function Container() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {pages[currentPage]}
      {/* <Footer /> */}
    </div>
  )
}
