'use client';

import { Experience } from '@prisma/client';
import React, { createContext, useContext, useState, useMemo } from 'react';

// Define the structure of a jam object
export interface Jam { // Ensure 'Jam' is exported
  id: number;
  jamName: string;
  image: string;
  organizer: string;
  genre: string;
  location: string;
  date: Date;
  instruments: string;
  experience: Experience;
  description: string;
  owner: string;
}

// Define the context value type
interface JamContextType {
  savedJams: Jam[];
  addAttendedJam: (jam: Jam) => void;
}

export const JamContext = createContext<JamContextType | undefined>(undefined);

// Provider component
export const JamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedJams, setSavedJams] = useState<Jam[]>([]);

  const addAttendedJam = (jam: Jam) => {
    setSavedJams((prevJams) => [...prevJams, jam]);
  };

  const contextValue = useMemo(() => ({ savedJams, addAttendedJam }), [savedJams]);

  return (
    <JamContext.Provider value={contextValue}>
      {children}
    </JamContext.Provider>
  );
};

export const useJamContext = () => {
  const context = useContext(JamContext);
  if (!context) {
    throw new Error('useJamContext must be used within a JamProvider');
  }
  return context;
};
