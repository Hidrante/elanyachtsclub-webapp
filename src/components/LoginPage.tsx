import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '../firebaseAuth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      await signInWithEmailAndPassword(email, password);
      setLoading(true); // Set loading true on successful attempt
      // Redirect user to admin panel or dashboard on successful login
      console.log('User logged in successfully');
      // Example: history.push('/admin'); or navigate('/admin')
    } catch (err: any) {
      setError(err.message);
      console.error('Login error:', err);
    } finally {
      setLoading(false); // Always set loading to false

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-10