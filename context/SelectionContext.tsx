import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Side, Map } from '../data/videos';

interface SelectionContextType {
  selectedSide: Side | null;
  selectedMap: Map | null;
  setSelectedSide: (side: Side) => void;
  setSelectedMap: (map: Map) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selectedSide, setSelectedSide] = useState<Side | null>(null);
  const [selectedMap, setSelectedMap] = useState<Map | null>(null);

  return (
    <SelectionContext.Provider
      value={{
        selectedSide,
        selectedMap,
        setSelectedSide,
        setSelectedMap,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const context = useContext(SelectionContext);
  if (context === undefined) {
    throw new Error('useSelection must be used within a SelectionProvider');
  }
  return context;
} 