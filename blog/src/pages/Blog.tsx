import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();  
  const [blogs] = useState<BlogPost[]>([
    { id: 1, title: 'Chocolate Cake', content: 'This is the recipe for a rich chocolate cake.' },
    { id: 2, title: 'Strawberry Cheesecake', content: 'This is the recipe for a creamy strawberry cheesecake.' },
  ]);
  
  const blog = blogs.find(b => b.id === parseInt(id || ''));  

  const navigate = useNavigate();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const deleteBlog = (id: number) => {
    console.log('Blog deleted', id);
    
  };

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <button onClick={() => navigate(`/edit-blog/${blog.id}`)}>Edit</button>
      <button onClick={() => deleteBlog(blog.id)}>Delete</button>
    </div>
  );
};

export default Blog;
