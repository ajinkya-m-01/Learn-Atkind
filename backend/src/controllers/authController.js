import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Input validation function
const validateInput = (data) => {
  const errors = [];
  
  if (!data.email || !data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.push('Valid email is required');
  }
  
  if (!data.password || data.password.length < 6) {
    errors.push('Password must be at least 6 characters');
  }
  
  if (data.name && data.name.length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  
  return errors;
};

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Validate input
    const errors = validateInput({ name, email, password });
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // Check if user already exists
    const [existingUsers] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    // Generate JWT token
    const token = jwt.sign({ userId: result.insertId, email }, JWT_SECRET, { expiresIn: '24h' });

    res.status(201).json({
      success: true,
      message: 'Signup successful',
      token
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ success: false, message: 'Server error during signup' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    const errors = validateInput({ email, password });
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // Get user
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Check password
    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, email }, JWT_SECRET, { expiresIn: '24h' });

    res.json({
      success: true,
      message: 'Login successful',
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error during login' });
  }
};

export const join = async (req, res) => {
  try {
    const { name, email, mobile, state, district, course } = req.body;
    
    // Validate input
    if (!name || !email || !mobile || !state || !district || !course) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Validate email format
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Validate mobile format (assuming Indian mobile number)
    if (!mobile.match(/^[6-9]\d{9}$/)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid mobile number' 
      });
    }

    // Insert inquiry into database
    await pool.query(
      'INSERT INTO inquiries (name, email, mobile, state, district, course) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, mobile, state, district, course]
    );

    res.status(201).json({
      success: true,
      message: 'Thank you for your interest! We will contact you soon.'
    });
  } catch (error) {
    console.error('Join inquiry error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while submitting inquiry' 
    });
  }
};