import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const AddEditBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();  
  const navigate = useNavigate();
  
  const [blogData, setBlogData] = useState<BlogPost>({ id: 0, title: '', content: '' });

  const [blogs, setBlogs] = useState<BlogPost[]>([
    { id: 1, title: 'Chocolate Cake', content: 'This is the recipe for a rich chocolate cake.' },
    { id: 2, title: 'Strawberry Cheesecake', content: 'This is the recipe for a creamy strawberry cheesecake.' },
    
  ]);

  
  useEffect(() => {
    if (id) {
      const existingBlog = blogs.find(blog => blog.id === parseInt(id));
      if (existingBlog) {
        setBlogData(existingBlog);
      }
    }
  }, [id, blogs]);

  const handleSave = () => {
    if (id) {
      
      setBlogs(prevBlogs => prevBlogs.map(blog => (blog.id === parseInt(id) ? blogData : blog)));
    } else {
      
      const newBlog = { ...blogData, id: blogs.length + 1 };
      setBlogs([...blogs, newBlog]);
    }

    
    navigate('/blog/'+id);
  };

  return (
    <div>
      <h1>{id ? 'Edit Blog' : 'Add Blog'}</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={blogData.title}
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={blogData.content}
          onChange={(e) => setBlogData({ ...blogData, content: e.target.value })}
        />
      </div>
      <button onClick={handleSave}>{id ? 'Update' : 'Create'} Blog</button>
    </div>
  );
};

export default AddEditBlog;
