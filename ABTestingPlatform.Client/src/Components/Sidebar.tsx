import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="w-64 bg-white shadow-md p-6 space-y-6">
    <h2 className="text-xl font-bold text-gray-700">Menu</h2>
    <nav>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/create-test" className="text-blue-600 hover:text-blue-800">
            Create Test
          </Link>
        </li>
        <li>
          <Link to="/analytics" className="text-blue-600 hover:text-blue-800">
            Analytics
          </Link>
        </li>
        <li>
          <Link to="/recommendations" className="text-blue-600 hover:text-blue-800">
            Recommendations
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
