import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux-Hooks/hooks';
import { asyncGetBlogById } from '../../../store/actions/userAction';
import ClipLoader from 'react-spinners/ClipLoader';

// Define the interfaces for blog content
export interface ISubheadingContent {
  subheading: string;
  content: string;
}

export interface IHeadingContent {
  heading: string;
  subheadings?: ISubheadingContent[]; // Optional array of subheadings
}

export interface IBlog {
  title: string;
  image?: {
    url: string;
    fileId: string;
  };
  createdAt: string; // Adjust based on your actual createdAt type
  headings: IHeadingContent[]; // Array of headings
}

// Loader component
const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#3498db" size={50} />
    </div>
  );
};

// FetchParticularBlog component
const FetchParticularBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Type the params
  const dispatch = useAppDispatch();
  const { blog, loading } = useAppSelector((state) => state.user); // Assume you have a loading state

  useEffect(() => {
    if (id) {
      dispatch(asyncGetBlogById(id)); // Only dispatch if id is defined
    }
  }, [dispatch, id]);

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  if (!blog) {
    return <div className="text-center">Blog not found.</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-8 bg-white shadow-lg rounded-lg my-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
      {blog.image && (
        <img
          className="w-full h-80 object-cover rounded-lg mb-4"
          src={blog.image.url}
          alt={blog.title}
        />
      )}
      <div className="text-lg text-gray-700 mb-4">
        {/* Iterate through the headings to display them */}
        {blog.headings.map((headingContent: IHeadingContent, index: number) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{headingContent.heading}</h2>
            {headingContent.subheadings?.map((subheading: ISubheadingContent, subIndex: number) => (
              <div key={subIndex} className="mb-4">
                <h3 className="text-xl font-semibold text-gray-700">{subheading.subheading}</h3>
                <p>{subheading.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <Link to="/navblog" className="text-blue-700 hover:text-blue-900">
          Back to Blogs
        </Link>
        <span className="text-gray-600">{new Date(blog.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default FetchParticularBlog;
