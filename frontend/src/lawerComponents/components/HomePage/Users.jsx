import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useUserStore from "../../../stores";

const InfoSections = ({ id }) => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [apiEndPoint, setApiEndPoint] = useState('');
  const [navi, setNavi] = useState('');

  const handleClick = (value, apiEndPoint, navi) => {
    setModalContent(value);
    setShowLoginModal(true);
    setApiEndPoint(apiEndPoint);
    setNavi(navi);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div>
      <div className='bg-gray-100 flex justify-center py-5 text-4xl font-extrabold'>
        <h1>Our Services</h1>
      </div>
      <div id={id} className="flex flex-wrap gap-6 p-6 bg-gray-100 px-16">
        <Card
          img="https://img.freepik.com/free-vector/man-red-shirt-with-white-collar_90220-2873.jpg"
          name="Undertrial Prisoners"
          onClick={() => handleClick("Undertrial Prisoner", "http://localhost:3000/prisoner/login")}
        />
        <Card
          img="https://img.freepik.com/premium-vector/blue-gold-sign-that-says-symbol-justice_1205884-833.jpg"
          name="Lawyers"
          onClick={() => handleClick("Lawyer", "http://localhost:3000/lawyer/login")}
        />
        <Card
          img="https://img.freepik.com/free-photo/closeup-gavel-judgement-concept_53876-31913.jpg"
          name="Judges"
          onClick={() => handleClick("Judge", "http://localhost:3000/judge/login")}
        />
      </div>

      {showLoginModal && (
        <LoginModal
          title={`${modalContent} Login`}
          onClose={handleCloseModal}
          apiEndPoint={apiEndPoint}
          navi={navi}
        />
      )}
    </div>
  );
};

const Card = ({ img, name, onClick }) => {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center h-80 transition-transform transform hover:scale-105 rounded-lg cursor-pointer overflow-hidden"
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      onClick={onClick}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded-lg text-center">
        <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>
        <p className="text-gray-300 mb-4">You can login from here</p>
        <button
          className="bg-white text-blue-800 py-2 px-6 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
        >
          {name}'s Login
        </button>
      </div>
    </div>
  );
};

const LoginModal = ({ title, onClose, apiEndPoint, navi }) => {
  const navigate = useNavigate();
  const setUserData = useUserStore((state) => state.setUserData);

  const [email_id, setEmail_id] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post(apiEndPoint, { email_id, password }, { withCredentials: true });

      if (response.data.status_code === 200) {
        const userData = response.data.data;
        setUserData(userData);
        alert('Login successful!');
        onClose();
        navigate(navi);
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
        {errorMessage && (
          <p className="text-red-600 mb-4 text-center">{errorMessage}</p>
        )}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="font-medium">Username:</span>
            <input
              type="text"
              value={email_id}
              onChange={(e) => setEmail_id(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium">Password:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoSections;
