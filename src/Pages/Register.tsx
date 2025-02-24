import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validate = () => {
    const formErrors: Errors = {};

    if (!formData.username) formErrors.username = 'Username is required.';
    if (!formData.email) formErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = 'Please enter a valid email (e.g. user@example.com).';
    if (!formData.password) formErrors.password = 'Password is required.';
    else if (formData.password.length < 6)
      formErrors.password = 'Password must be at least 6 characters.';
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = 'Passwords do not match.';

    setErrors(formErrors);
  };

  useEffect(() => {
    validate(); // Проверяем на ошибку, если данные изменяются
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Если поле уже было затронуто, запрашиваем валидацию
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
      console.log('Form data is valid. Submitting...');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
          {touched.username && errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
          {touched.email && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
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
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
