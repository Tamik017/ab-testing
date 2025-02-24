import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md flex justify-between items-center text-white">
    <Link to="/" className="text-2xl font-semibold">
      A/B Testing Platform
    </Link>
    <div className="flex space-x-6">
      <Link to="/" className="text-white hover:text-gray-200">
        Home
      </Link>
      <Link to="/create-test" className="text-white hover:text-gray-200">
        Create Test
      </Link>
      <Link to="/analytics" className="text-white hover:text-gray-200">
        Analytics
      </Link>
      <Link to="/recommendations" className="text-white hover:text-gray-200">
        Recommendations
      </Link>
    </div>
    <div className="flex space-x-4">
      <Link to="/login" className="bg-white text-blue-500 hover:bg-gray-100 py-2 px-4 rounded-lg">
        Login
      </Link>
      <Link
        to="/register"
        className="bg-white text-blue-500 hover:bg-gray-100 py-2 px-4 rounded-lg"
      >
        Register
      </Link>
    </div>
  </nav>
);

export default Navbar;
