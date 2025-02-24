import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Dashboard from './Pages/Dashboard';
import CreateTest from './Pages/CreateTest';
import Analytics from './Pages/Analytics';
import Recommendations from './Pages/Recommendations';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorBoundary from './Components/ErrorBoundary';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <div className="flex flex-col h-screen bg-gray-50">
            <Navbar />
              <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
                <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/create-test" element={<CreateTest />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                </Routes>
              </main>
          </div>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}

export default App;
