import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface BlogPost {
  id?: string;
  title: string;
  description: string;
  image?: string;
}

const AddEditBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState<BlogPost>({ title: '', description: '' });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://127.0.0.1:8090/api/collections/posts/records/${id}`);
          if (response.data) {
            setBlogData({
              id: response.data.id,
              title: response.data.title,
              description: response.data.description,
              image: response.data.image
            });
          } else {
            setError('Blog not found');
          }
        } catch (err) {
          console.error('Error fetching blog data:', err);
          setError('Error fetching blog data');
        } finally {
          setLoading(false);
        }
      } else {
     
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('title', blogData.title);
      formData.append('description', blogData.description);
      if (file) {
        formData.append('image', file);
      }

      if (id) {
  
        await axios.patch(`http://127.0.0.1:8090/api/collections/posts/records/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        navigate(`/blog/${id}`);
      } else {
      
        const addresponse =  await axios.post('http://127.0.0.1:8090/api/collections/posts/records', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        navigate('/blog/'+ addresponse.data.id);
      }
    } catch (err) {
      console.error('Error saving blog data:', err);
      setError('Error saving blog data');
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-xl text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Blog' : 'Add Blog'}</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={blogData.title}
            onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={blogData.description}
            onChange={(e) => setBlogData({ ...blogData, description: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={5}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image Upload</label>
          <input
            type="file"
            id="image"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {id ? 'Update' : 'Create'} Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditBlog;
