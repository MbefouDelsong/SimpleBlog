import React from 'react';
import BlogList from '../components/BlogList';
import '../App.css';

function Home() {
  return (
    <div className='HomeContainer'>
      <h1>Welcome to My Blog</h1>
      <BlogList />
    </div>
  );
}

export default Home;
