const CreateTest = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-semibold text-gray-800">Create New Test</h2>
    <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
      <div className="flex flex-col">
        <label htmlFor="testName" className="text-lg font-medium text-gray-700">Test Name</label>
        <input type="text" id="testName" placeholder="Enter test name" className="p-3 border border-gray-300 rounded-lg" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="testDescription" className="text-lg font-medium text-gray-700">Test Description</label>
        <textarea id="testDescription" placeholder="Enter test description" className="p-3 border border-gray-300 rounded-lg" rows={4} />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">Create Test</button>
    </form>
  </div>
);

export default CreateTest;
