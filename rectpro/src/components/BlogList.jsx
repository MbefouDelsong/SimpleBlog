import React from 'react';
import BlogPost from '../components/BlogPost';
import '../App.css';

const posts = [
  { title: 'Annna`s Post:', content: 'This is the content of the first post.' },
  { title: 'Paul`s Post:', content: 'This is the content of the second post.' },
];

function BlogList() {
  return (
    <div className="BlogListContainer">
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default BlogList;
