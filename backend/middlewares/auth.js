import jwt from 'jsonwebtoken';

export const generateToken = (userData) => {
  const secretKey = process.env.JWT_SECRET || 'your_secret_key';
  
  return jwt.sign(userData, secretKey, { expiresIn: '30d' });
};

export const verifyToken = (token) => {
  const secretKey = process.env.JWT_SECRET || 'your_secret_key';

  try {
    const decoded = jwt.verify(token, secretKey);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error };
  }
};
