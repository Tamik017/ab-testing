import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
  loginOrEmail: string;
  password: string;
}

interface Errors {
  loginOrEmail?: string;
  password?: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    loginOrEmail: '',
    password: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validate = () => {
    const formErrors: Errors = {};

    if (!formData.loginOrEmail) formErrors.loginOrEmail = "Login or Email is required.";
    if (!formData.password) formErrors.password = "Password is required.";
    else if (formData.password.length < 6) formErrors.password = "Password must be at least 6 characters.";

    setErrors(formErrors);
  };

  useEffect(() => {
    validate();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (touched[name]) {
      validate();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const field = e.target.name as keyof FormData;
    setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validate();
    if (Object.keys(errors).length === 0) {
      console.log("Form data is valid. Submitting...");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="loginOrEmail" className="block text-sm font-medium text-gray-700">Login or Email</label>
          <input
            type="text"
            id="loginOrEmail"
            name="loginOrEmail"
            value={formData.loginOrEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
          {touched.loginOrEmail && errors.loginOrEmail && (
            <p className="text-red-500 text-sm">{errors.loginOrEmail}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
          {touched.password && errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Login</button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
