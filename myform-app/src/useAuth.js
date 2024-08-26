// src/useAuth.js
import { useState, useEffect } from 'react';
import { auth } from './firebaseConfig'; // Adjust the import path as needed
import { onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return { isAuthenticated };
};