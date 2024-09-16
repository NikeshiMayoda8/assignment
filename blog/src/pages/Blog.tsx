import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface BlogPost {
  id: string; 
  title: string;
  description: string;
  image?: string;
}

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        setError('No ID provided');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://127.0.0.1:8090/api/collections/posts/records/${id}`);
        if (response.data) {
          setBlog(response.data);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog data:', err);
        setError('Error fetching blog data');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;

    try {
      await axios.delete(`http://127.0.0.1:8090/api/collections/posts/records/${id}`);
      console.log('Blog deleted', id);
      navigate('/blog'); 
    } catch (err) {
      console.error('Error deleting blog:', err);
      setError('Error deleting blog');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!blog) return <div>Blog not found</div>;

  return (
    <center>
    <div>
      <h1>{blog.title}</h1>
      {blog.image && <img src={`http://127.0.0.1:8090/api/files/posts/${blog.id}/${blog.image}`} alt={blog.title} />}
      <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      
      <button onClick={() => navigate(`/edit-blog/${blog.id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div></center>
  );
};

export default Blog;
