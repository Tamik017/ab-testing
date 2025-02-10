const Dashboard = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-semibold text-gray-800">Active A/B Tests</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Example of test cards */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-xl font-bold">Test 1</h3>
        <p className="text-gray-600">Test Description</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-xl font-bold">Test 2</h3>
        <p className="text-gray-600">Test Description</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-xl font-bold">Test 3</h3>
        <p className="text-gray-600">Test Description</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
