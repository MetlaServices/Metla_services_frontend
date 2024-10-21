import  { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux-Hooks/hooks';
import { asyncGetBlogById } from '../../../store/actions/userAction';

const FetchParticularBlog = () => {
  const { id } = useParams<{ id: string }>(); // Type the params
  const dispatch = useAppDispatch();
  const { blog } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(asyncGetBlogById(id)); // Only dispatch if id is defined
    }
  }, [dispatch, id]);

  if (!blog) {
    return <div className="text-center">Blog not found.</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
      {blog.image && (
        <img
          className="w-full h-80 object-cover rounded-lg mb-4"
          src={blog.image.url}
          alt={blog.title}
        />
      )}
      <div className="text-lg text-gray-700 mb-4">
        <p>{blog.content}</p>
      </div>
      <Link to="/navblog" className="text-blue-700 hover:text-blue-900">
        Back to Blogs
      </Link>
    </div>
  );
};

export default FetchParticularBlog;
